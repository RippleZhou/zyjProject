import {Injectable} from '@angular/core';
import {UserModel} from "../model/user.model";
import {LocalStorage} from "../utils/localstorage.utils";
import {Subject} from "rxjs/Subject";
import {EventService} from "./event.service";

@Injectable()
export class USER {

  private user:UserModel;
  private loginSuccess: Subject<UserModel> = new Subject<UserModel>();



  constructor(private ls:LocalStorage,private eventService:EventService) {
    this.user = this.ls.getObject('user') as UserModel;
  }

  public update(user:UserModel){
    this.user = user;
    this.ls.setObject('user',user);
    this.eventService.publish(EventService.REFRESH_USER);
  }
  public getToken():string{
    this.user = this.ls.getObject('user') as UserModel;

    return this.user.token;
  }
  public setToken(token:string){
    this.user.token = token;
    this.update(this.user);
  }
  public get():UserModel{
    this.user = this.ls.getObject('user') as UserModel;

    return this.user;
  }
  public reset(){
    this.ls.setObject('user',{});
  }

  public isAuthenticated(): boolean {
    return this.get().token != undefined;
  }

  public isLogin(): Promise<UserModel> {
    console.log(this.isAuthenticated());
    if (this.isAuthenticated()) {
      return Promise.resolve(this.user);
    }
    this.eventService.publish(EventService.RE_LOGIN);
    return this.loginSuccess.asObservable().toPromise();
  }
  public needName(): boolean {
    return this.get().name !=undefined
  }
  public relogin():void {
    this.eventService.publish(EventService.RE_LOGIN);
  }
  public toast(msg:string){
    this.eventService.publish(EventService.TOAST,msg);
  }



}
