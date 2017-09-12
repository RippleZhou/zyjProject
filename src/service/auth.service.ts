import {EventEmitter, Injectable} from "@angular/core";
import {Modal, ModalController} from "ionic-angular";
import {LoginPage} from "../pages/login/login";
import {Subject} from "rxjs/Subject";
import {UserInfo} from "../api/user.api.service";
import {Observable} from "rxjs/Observable";
import {ApiService} from "../api/api.service";
import {EventService} from "./event.service";


@Injectable()
export class AuthService {
  private loginModal: Modal;

  private loginSuccess: Subject<UserInfo> = new Subject<UserInfo>();
  private user?: UserInfo;
  private user$ = new EventEmitter<UserInfo>();
  private token$ = new EventEmitter<string>();
  private token? = '460ef7728a10db6e60ff9c9447ddfbb1';// 该 Token 用于测试
  private needRefresh = false;

  constructor(public modalCtrl: ModalController,private eventService:EventService, public apiService: ApiService) {
    this.resetLoginSuccess();
    this.token$.subscribe(v => {
      this.token = v;
      v && this.apiService.setToken(v);
    });
    this.user$.subscribe(v => {
      // 用户信息更新后存储用户信息, 或用户信息失效后清除用户信息
      localStorage.setItem("user", v ? JSON.stringify(v) : null);
      this.user = v;
      this.token$.emit(v ? v.token : null);

      // 如果当前用户信息更新, 检测是否需要刷新
      if(this.needRefresh && v){
        this.needRefresh = false;
        console.log('Refresh current page');
        this.eventService.publish(EventService.NAV_ROOT);
      }
    });
    setTimeout(this.init.bind(this), 200);

    this.apiService.getFailedResponse().subscribe(v => {
      switch (v.status) {
        // 由 cors 引起的错误 status 为 0
        case 0:
        case 401:
          if (this.isAuthenticated()) {
            console.log('Logout due to failed response');
            this.logout();
          }
          this.user = null;
          // 强制登陆,登陆成功后返回首页
          console.log('Relogin on failed response');
          this.needRefresh = true;
          this.showLoginModal();
      }
    })
  }

  private init() {
    console.log("Init Auth Service")
    let user = localStorage.getItem("user");
    if (user) {
      console.log("Load user from local", user)
      this.user$.emit(JSON.parse(user));
    }
  }

  private resetLoginSuccess() {
    console.log('resetLoginSuccess');
    if (this.loginSuccess) {
      this.loginSuccess.complete();
    }
    this.loginSuccess = new Subject<UserInfo>();
    this.loginSuccess
      .asObservable()
      .subscribe(v => this.user$.emit(v));
  }

  getToken(): Observable<string> {
    if (this.token) {
      setTimeout(() => {
        this.token && this.token$.emit(this.token);
      }, 0)
    }
    return this.token$;
  }

  getUser(): Observable<UserInfo> {
    if (this.user) {
      setTimeout(() => {
        this.user && this.user$.emit(this.user);
      }, 0)
    }
    return this.user$;
  }

  public isAuthenticated(): boolean {
    return this.user != null;
  }

  public requireAuth(): Promise<UserInfo> {
    if (this.isAuthenticated()) {
      return Promise.resolve(this.user);
    }
    this.showLoginModal();
    return this.loginSuccess.asObservable().toPromise();
  }

  sendLoginSuccess(user: UserInfo) {
    this.loginSuccess.next(user)
  }

  private showLoginModal(): boolean {
    if (this.loginModal) {
      return false;
    }
    this.loginModal = this.modalCtrl.create(LoginPage, null, {showBackdrop: true});
    this.loginModal.present();
    this.loginModal.onDidDismiss((data, role) => {
      console.log('Login result', data);
      if (data) {
        this.sendLoginSuccess(data);
      } else {
        // 丢弃之前的监听
        this.resetLoginSuccess()
      }
      this.loginModal = null;
    });

    return true;
  }

  logout() {
    this.user$.emit(null)
  }
}
