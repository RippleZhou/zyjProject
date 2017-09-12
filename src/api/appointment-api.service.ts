import {Injectable} from "@angular/core";
import {PageParam} from "./api.service";
import {HttpUtils} from "../utils/http.utils";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";

export interface AppointmentRequest {
  phone:string;
  name:string;
  verifyCode:string;
  /**
   * 预约内容
   */
  content?:string;
  /**
   * 性别，1-男，2-女，0-未知
   */
  sex?:number;
  /**
   * 预约公寓ID
   */
  buzProduct:string;
  /**
   * 预约公寓房型ID
   */
  buzItem:string;
}

export interface AppointmentModel {
  id:number;
  /**
   * 公寓ID
   */
  buzProduct:number;
  buzProductName:string;
  /**
   * 房型ID
   */
  buzItem:number;
  buzItemName:string;
  /**
   * 看房时间
   */
  providerTime?:string;
  userId:number;
  /**
   * 预约用户
   */
  userName:string;
  /**
   * 预约手机号
   */
  userPhone:string;
  /**
   * 销售姓名（带看房的人）
   */
  providerName?:string;
  providerPhone?:string;
  /**
   * 预约时间
   */
  createTime:string;
  status:number;
  statusName:string;
  content:string;
  /**
   * 评价时间
   */
  commentTime?:string;
  /**
   * 评分
   */
  commentScore?:string;
  /**
   * 评价内容
   */
  comment?:string;
}

@Injectable()
export class AppointmentApiService {
  constructor(private api: HttpUtils,private USER:USER) {

  }

  public sendAppointment(req:AppointmentRequest, succ) {
    let pm = new ParamsModel(this.USER)
    pm.url = `/common/appointment`;
    pm.reqestData = req;
    pm.succCallback = succ
    this.api.post(pm)
  }

  public getAppointmentPage(succ,page?:PageParam) {
    let pm = new ParamsModel(this.USER)
    pm.url = `/appointment`;
    pm.reqestData = page;
    pm.succCallback = succ
    this.api.get(pm)
  }
}
