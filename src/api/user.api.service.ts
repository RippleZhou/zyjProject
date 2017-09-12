import {Injectable} from "@angular/core";
import {HttpUtils} from "../utils/http.utils";
import {ParamsModel} from "../model/params.model";
import {USER} from "../service/user.service";

export interface UserInfo {
  id:number;
  username?:string;
  nickname?:string;
  phone:string;
  email?:string;
  sex?:string;
  level?:string;
  uuid:string;
  token:string;
  portrait?:string;
  birthday?:string;
  brief?:string;
  status:number;

  idcard?:string;
  idcardFront?:string;
  idcardBack?:string;

  height?:string;
  weight?:string;
  phoneModel?:string;
}
@Injectable()
export class USERAPI {

  constructor(private api: HttpUtils,private USER:USER) {

  }

  public fetchUser(success:any){
    let pm = new ParamsModel(this.USER);
    pm.url = '/customerUser/info';
    pm.succCallback = success;
    this.api.get(pm)
  }

  public registration(param: { phone: string, verifyCode: string, openId?: string, password?: string },succ){
    param['communityId'] = '2f93a76eda6c4873811befac41c9c0c2';
    let pm = new ParamsModel(this.USER);
    pm.url = '/common/registration';
    pm.reqestData = param;
    pm.succCallback = succ;
    this.api.post(pm)
  }
}
