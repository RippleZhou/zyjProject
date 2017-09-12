import {Injectable} from "@angular/core";
import {WechatUtil} from "../utils/wechat.util";


@Injectable()
export class WechatService {


  constructor(private wxUtil: WechatUtil) {
  }

  getOpenId(): string {
    let match = location.search.match(/openId=([^&=]*)/);
    if (match) {
      localStorage.setItem('openId',match[1])
    }

    return localStorage.getItem('openId');
  }

  pay(param: { prepayId, timestamp, nonceStr, paySign, onSuccess?, onFailed?, onCancel? }) {
    let {prepayId, timestamp, nonceStr, paySign, onSuccess, onFailed, onCancel} = param;
    this.wxUtil.jsPay(prepayId, timestamp, nonceStr, paySign, onSuccess, onFailed, onCancel)
  }
}
