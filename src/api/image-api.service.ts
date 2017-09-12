import {Injectable} from "@angular/core";
import {ApiService, GeneralResponse} from "./api.service";
import {Observable} from "rxjs/Observable";
import {HttpUtils} from "../utils/http.utils";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";


export interface Base64UploadResponse {
  path: string;
  // 图片存储地址
  saveUrl: string;
  size: number;
  mime: string;
  name: string;
  saveName: string;
}

@Injectable()
export class ImageApiService {

  constructor(private api:HttpUtils,private USER:USER) {
  }

  base64Upload(param: { data: string, path?: string, suffix?: string },succ){
    let pm = new ParamsModel(this.USER);
    pm.url = '/image/base64';
    pm.reqestData = param;
    pm.succCallback = succ;
    this.api.post(pm)
  }
}
