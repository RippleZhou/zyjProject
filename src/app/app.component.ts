import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {App, Nav, Platform, Modal, ModalController, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {WechatUtil} from "../utils/wechat.util";
import {EventService} from "../service/event.service";
import {LoginPage} from "../pages/login/login";
import {Page} from "ionic-angular/navigation/nav-util";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  private loginModal: Modal;


  rootPage: any = HomePage;
  @ViewChild(Nav) nav;

  get navCtrl(){
    return this.app.getRootNav();
    // return this.injector.get(NavController);
  }
  constructor(private app: App,
              private eventService:EventService,
              private injector:Injector,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              private wechat: WechatUtil,
              ) {
    //noinspection TypeScriptUnresolvedFunction
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });


    this.eventService.subscribe(EventService.NAV_ROOT,()=>{
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
    this.eventService.subscribe(EventService.RE_LOGIN,()=>{
      this.showLoginModal();
    });
    this.eventService.subscribe(EventService.NAV_TO,(page:Page,params:any)=>{
      this.navCtrl.push(page, params)
    });
    this.eventService.subscribe(EventService.TOAST,(msg:string)=>{
      console.log('toast');
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });




  }
  private showLoginModal(): boolean {
    if (this.loginModal) {
      return false;
    }
    this.loginModal = this.modalCtrl.create(LoginPage, null, {showBackdrop: true});
    this.loginModal.present();
    this.loginModal.onDidDismiss((data, role) => {
      this.loginModal = null;
    });
    return true;
  }

  ngOnInit(): void {

  }

}
