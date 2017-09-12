import {Injectable} from "@angular/core";
import {HttpUtils} from "../utils/http.utils";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";

@Injectable()
export class AlipayApiService {

  constructor(private api: HttpUtils,private USER:USER) {

  }

   public prepay(orderNo: string,succ){
     let pm = new ParamsModel(this.USER)
     pm.url = `/payment/alipay/prepay/wap/${orderNo}`;
     pm.succCallback = succ;
     this.api.get(pm);
  }

}
