/**
 * Created by johnson on 17/4/27.
 */
import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {WfToast} from "./toast.utils";
import {USER} from "../service/user.service";
import {LocalStorage} from "./localstorage.utils";
import {ParamsModel} from "../model/params.model";
// import {environment} from "../../environments/environment";

@Injectable()
export class HttpUtils {
  private baseUrl:string = "http://qingguoyu.api.test.ostengar.com/qingguoyu";
  private options:RequestOptions;


  constructor(public http:Http, public ls:LocalStorage) {
    console.log("HttpUtils constructor")
    // this.baseUrl = environment.backend
  }

  transferGetParam(data:Object):string {
    if (data instanceof Object && data != null && data != undefined) {
      let str = '?';
      for (let key of Object.keys(data)) {
        if (data[key]!=undefined && data[key]!='') {
          str += key + '=' + data[key] + '&';
        }
      }
      str = str.substring(0, str.length - 1);
      return str;
    } else {
      return ''
    }

  }

  get(paramsModel:ParamsModel) {
    let headers = new Headers({'Content-Type': 'application/json','Authorization':this.ls.getObject('user').token});
    this.options = new RequestOptions({headers: headers});
    this.http.get(this.baseUrl + paramsModel.url + this.transferGetParam(paramsModel.reqestData), this.options).map(result=>result.json()).subscribe(
      function onNext(resp:any) {
        if (resp.code == 0) {
          paramsModel.succCallback(resp.message,paramsModel.context);
        } else {
          paramsModel.failCallback(resp.message)
        }
      },
      function onError(err:any) {
        paramsModel.errorCallback(err)
        if (err.status == 401){
          paramsModel.tokenExpireCallback()
        }
      },
      function onCompleted() {
        paramsModel.finallyCallback()
      }
    );
  }
  post(paramsModel:ParamsModel) {
    let headers = new Headers({'Content-Type': 'application/json','Authorization':this.ls.getObject('user').token});
    this.options = new RequestOptions({headers: headers});
    this.http.post(this.baseUrl + paramsModel.url, paramsModel.reqestData, this.options).map(result=>result.json()).subscribe(
      function onNext(resp:any) {
        if (resp.code == 0) {
          paramsModel.succCallback(resp.message,paramsModel.context);
        } else {
          paramsModel.failCallback(resp.message)
        }
      },
      function onError(err:any) {
        paramsModel.errorCallback(err)
        if (err.status == 401){
          paramsModel.tokenExpireCallback()
        }
      },
      function onCompleted() {
        paramsModel.finallyCallback()
      }
    );
  }

  put(paramsModel:ParamsModel) {
    let headers = new Headers({'Content-Type': 'application/json','Authorization':this.ls.getObject('user').token});
    this.options = new RequestOptions({headers: headers});
    this.http.put(this.baseUrl + paramsModel.url, paramsModel.reqestData, this.options).map(result=>result.json()).subscribe(
      function onNext(resp:any) {
        if (resp.code == 0) {
          paramsModel.succCallback(resp.message,paramsModel.context);
        } else {
          paramsModel.failCallback(resp.message)
        }
      },
      function onError(err:any) {
        paramsModel.errorCallback(err)
        if (err.status == 401){
          paramsModel.tokenExpireCallback()
        }
      },
      function onCompleted() {
        paramsModel.finallyCallback()
      }
    );
  }
}
