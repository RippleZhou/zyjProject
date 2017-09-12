/**
 * Created by johnson on 17/4/27.
 */
import {Injectable} from '@angular/core';
import {HttpUtils} from "../utils/http.utils";
import {Observable} from "rxjs/Rx";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";

@Injectable()
export class SMS {

  constructor(private api:HttpUtils,private USER:USER) {

  }

  send(phone:any,succ:any){
    let pm = new ParamsModel(this.USER);
    pm.url = `/common/verifyCode/${phone}`;
    pm.succCallback = succ;
    this.api.post(pm)
  }

}
