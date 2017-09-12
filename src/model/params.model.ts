import {USER} from "../service/user.service";
/**
 * Created by johnson on 17/4/27.
 */
export class ParamsModel {
  url:string;
  reqestData:any;
  context:any;
  succCallback:any = (v,context)=> {
    console.log('need overried succCallback')
  };
  failCallback:any = v=> {
    console.log('failCallback')
    this.USER.toast(v);
  };
  tokenExpireCallback:any = ()=> {
    console.log('tokenExpireCallback');
    this.USER.relogin();

  };
  errorCallback:any = v=> {
    console.log('errorCallback')
    this.USER.toast(`${v.status}:${v.message}`);

  };
  finallyCallback:any = ()=> {
    console.log('finallyCallback')
  };

  constructor(private USER:USER) {

  }

}
