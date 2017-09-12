import {Injectable} from "@angular/core";
import {HttpUtils} from "../utils/http.utils";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";

export interface WechatPrepay {
  appId:string;
  nonceStr:string;
  package:string;
  preSign:string;
  prepay_id:string;
  sign:string;
  signType:string;
  timeStamp:string
}

@Injectable()
export class PaymentApiService {

  constructor(private api:HttpUtils,private USER:USER) {

  }

  wechatPrepay(orderNo:string, param:{ openId:string }, succ,context) {
    let pm = new ParamsModel(this.USER);
    pm.url = `/payment/wechat/prepay/${orderNo}`;
    pm.reqestData = param;
    pm.context = context;
    pm.succCallback = succ;
    this.api.get(pm)
  }

}
