import {Injectable} from "@angular/core";
import {HttpUtils} from "../utils/http.utils";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";


export interface ContractDetail {
  uuid:string;
  firstName:string;
  firstPhone:string;
  customerName: string;
  customerPhone: string;
  customerCard: string;
  cotenantWords: any;
  address: string;
  leaseStart: string;
  leaseEnd: string;
  rental: number;
  rentalCapital:string;
  payWay: number;
  payWayName: string;
  deposit: number;
  waterPrice: number;
  powerPrice: number;
  cleanPrice: number;
  manageFee: number;
  signTime: string;
  signPicture: string;
  configures:any;
}

export interface CreateContractRequest {
  houseId: number;
  // 付款方式， 1-押一付3，2-押一付一，4-租赁贷, 必传
  payWay: number;
  // 租期，1-一个月，2-3个月，3-六个月，4-一年，5-两年, 必传
  lease: number;
  // "2017-05-01", #合同生效时间, 必传
  leaseStart: string;
  // 客户身份证号
  customerCard?: string;
  payMoney: string;
}


export interface ContractListRequest{
  content:Array<{
    id:number
    orderName:string
    uuid:string
    deposit:number
    rental:number
    apartmentName:string
    houseNo:string
    leaseStart:string
    lease:string
    leaseName:string
    payWay:number
    payWayName:string
    status:number
    statusName:string
  }>
  totalElements:number
  totalPages:number
  last:boolean
  size:number
  sort:any
  first:boolean
  numberOfElements:number
}

export interface ContractMsg{
  id:number
  uuid:string
  apartmentName:string
  buildingName:string
  houseNo:string
  customerName:string
  customerPhone:string
  payWay:number
  payWayName:string
  rental:number
  leaseStart:string
  leaseEnd:string
  deposit:number
  lease:number
  leaseName:string
  payMoney:number
}
export interface Rentbill{
  id:number
  uuid:string
  houseNo:string
  type:number
  typeName:string
  content:string
  money:number
  status:number
  statusName:string
  createTime:string
}

export interface RentbillRequest{
  content:Array<{
    id:number
    uuid:string
    houseNo:string
    type:number
    typeName:string
    content:string
    money:number
    status:number
    statusName:string
    createTime:string
  }>
  totalElements:number
  totalPages:number
  last:boolean
  number:number
  size:number
  sort:any
  numberOfElements:number
  first:boolean
}


@Injectable()
export class ContractApiService {
  constructor(private api: HttpUtils,private USER:USER) {

  }

  /**
   * @param id 合同编号
   * @param param 签字的 PDF 和 签字 URL
   */
  sendConfirm(id: number, param: { contractPdf?: string, signPicture: string },succ,context){
    let pm = new ParamsModel(this.USER);
    pm.url = `/contract/confirm/${id}`;
    pm.reqestData = param;
    pm.succCallback = succ;
    pm.context = context;
    this.api.put(pm)
  }

  getDetail(id: number,succ){
    let pm = new ParamsModel(this.USER);
    pm.url = `/contract/${id}/word`;
    pm.succCallback = succ;
    this.api.get(pm);
  }

  getContractMsg(id: number,succ){
    let pm = new ParamsModel(this.USER);
    pm.url = `/contract/${id}/detail`;
    pm.succCallback = succ;
    this.api.get(pm)
  }

  create(req: CreateContractRequest,succ){
    let pm = new ParamsModel(this.USER);
    pm.url = '/contract';
    pm.reqestData = req;
    pm.succCallback = succ;
    this.api.post(pm)
  }

  getContractList(succ){
    let pm = new ParamsModel(this.USER);
    pm.url =`/contract/list`;
    pm.succCallback = succ;
    this.api.get(pm)
  }

  getRentbill(params:{contractId:number,type:number},succ){
    let pm = new ParamsModel(this.USER);
    pm.url = `/bill`;
    pm.reqestData = params;
    pm.succCallback = succ;
    this.api.get(pm)
  }
}

