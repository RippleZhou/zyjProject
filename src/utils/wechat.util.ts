/**
 * Created by johnson on 17/4/27.
 */
import {Injectable} from '@angular/core';
import {HttpUtils} from "./http.utils";
import {ParamsModel} from "../model/params.model";
import {USER} from "../service/user.service";

@Injectable()
export class WechatUtil {
  private debug:boolean = false;
  private signatureUrl:string = '/wechat/config';
  private title:string = '标题';
  private url:string = 'https://open.weixin.qq.com/connect/oauth2/authorize?' +
    'appid=wx0c2a47deda49dcc4' +
    '&redirect_uri=http%3a%2f%2fcloudschool.api.test.ostengar.com%2fcloudschool%2fwechat%2flogin' +
    '&response_type=code' +
    '&scope=snsapi_userinfo' +
    '&state=1#wechat_redirect';
  private img:string = 'http://oj74kzcv7.bkt.clouddn.com/logo.png';
  private desc:string = '描述';


  constructor(private api:HttpUtils,private USER:USER) {
    console.log("init wechatUtil")
    let ele:any = document.createElement('script');
    ele.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js'
    document.body.appendChild(ele)
    ele.onload = ()=>{
      this.doConfig();
    }
  }

  inviteCodeFunc(inviteCode) {
    if (inviteCode != undefined) {
      return `https://open.weixin.qq.com/connect/oauth2/authorize?
      appid=wx0c2a47deda49dcc4
      &redirect_uri=http%3a%2f%2fcloudschool.api.test.ostengar.com%2fcloudschool%2fwechat%2flogin%3finviteCode%3d${inviteCode}
      &response_type=code
      &scope=snsapi_userinfo
      &state=1#wechat_redirect`;
    } else {
      return this.url;
    }
  }

  jsConfig(js_appId, js_timestamp, js_nonceStr, js_signature) {
    wx.config({
        debug: this.debug,
        appId: js_appId,
        timestamp: js_timestamp,
        nonceStr: js_nonceStr,
        signature: js_signature,
        jsApiList: ['chooseWXPay', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ',
          'onMenuShareWeibo', 'scanQRCode', 'chooseImage', 'uploadImage']
      }
    )
  }

  jsPay(pay_prepay_id, pay_timestamp, pay_nonceStr, pay_paySign, successCallback, failCallback, cancleCallback) {
    wx.chooseWXPay({
        timestamp: pay_timestamp,
        nonceStr: pay_nonceStr,
        package: 'prepay_id=' + pay_prepay_id,
        signType: 'MD5',
        paySign: pay_paySign,
        success: (res) => {
          successCallback(res)
        },
        fail: (res) => {
          failCallback(res)
        },
        cancel: (res) => {
          cancleCallback(res)
        }
      }
    )
  }

  jsShare(title, link, imgUrl, desc, type = 'link', dataUrl = '') {
    wx.onMenuShareTimeline({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: ()=> {
          console.log("success");
        },
        cancel: ()=> {
          console.log("cancel");
        }
      }
    )
    wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        type: type,
        dataUrl: dataUrl,
        success: ()=> {
          console.log("success");
        },
        cancel: ()=> {
          console.log("cancel");
        }
      }
    )
    wx.onMenuShareQQ({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: ()=> {
          console.log("success");
        },
        cancel: ()=> {
          console.log("cancel");
        }
      }
    )
    wx.onMenuShareWeibo({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: ()=> {
          console.log("success");
        },
        cancel: ()=> {
          console.log("cancel");
        }
      }
    )
  }


  getLocation(successCallback) {
    wx.getLocation({
      type: 'gcj02',
      success: (res)=> {
        successCallback(res.latitude, res.longitude)
      }
    })
  }

  syncUpload(localIds, uploadFunc) {
    let localId = localIds.pop()
    wx.uploadImage({
      localId: localId,
      isShowProgressTips: 1,
      success: (res) => {
        let serverId = res.serverId
        uploadFunc(serverId)
        if (localIds.length > 0) {
          this.syncUpload(localIds, uploadFunc)
        }
      }
    })
  }

  chooseAndUploadImage(count, chooseFunc, uploadFunc) {
    wx.chooseImage({
      count: count,
      sizeType: ['compressed'],
      sourceType: [
        'album',
        'camera'
      ],
      success: (res)=> {
        let localIds = res.localIds
        chooseFunc(localIds)
        this.syncUpload(localIds, uploadFunc)
      }
    })
  }

  doConfig() {
    let pm = new ParamsModel(this.USER);
    pm.url = this.signatureUrl;
    pm.reqestData = {url: location.href.split('#')[0]};
    pm.succCallback = (resp)=> {
      this.jsConfig(resp.appId, resp.timestamp, resp.nonceStr, resp.signature);
      wx.ready(()=> {
          this.jsShare(this.title, this.url, this.img, this.desc)
          this.getLocation(()=> {
          })
        }
      )
    }
    this.api.post(pm)
  }

}
