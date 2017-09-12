import {Injectable} from "@angular/core";
import {HttpUtils} from "../utils/http.utils";
import {USER} from "../service/user.service";
import {ParamsModel} from "../model/params.model";


export interface ApartmentResponse {
  id: number;
  name: string;
  brief: string;
  thumb: string;
  minPrice?: number;
  enabled: boolean;
  address: string;
  cityName: string;
}

export interface BuildingModel {
  buildingVOs: Array<{ id: number, name: string, floorDesc: any }>;
  layoutVOs: Array<{ id: number, name: string }>;
}

export interface ApartmentDetail{
  id:number
  name:string
  slogan:string
  brief:string
  thumb:string
  minPrice:number
  priceDesc:string
  description:string
  tel:string
  street:string
  address:string
  service:string
  banner:Array<{//轮播图
    id:number
    apartmentId:number
    type:number
    url:string
    description:string
    link:string
    sorting:number
  }>
  city:number
  cityName:string
  lon:number
  lat:number

}
// {
//   "id": 1,  #公寓ID
//   "name": "轻轻公寓",   #公寓名
//   "slogan": "让生活更轻松",  #标语
//   "brief": "让生活更轻松",  #简介
//   "thumb": "assets/images/home-banner1.jpg",  #封面图片
//   "minPrice": 1000,    #起订价格
//   "priceDesc": "1000~3000",  #价格区间描述
//   "description": "",  #详细介绍
//   "tel": "15821953197",  #联系电话
//   "street": "",   #
//     "address": "嘉定区曹安公路1611号楼", #公寓地址
//   "service": "", #公寓服务
//   "banner": [  #轮播图
//   {
//     "id": 1,
//     "apartmentId": 1,
//     "layoutId": 0,
//     "type": 0,
//     "url": "assets/images/home-banner1.jpg",
//     "description": "",
//     "link": "",
//     "sorting": 1
//   }
// ],
//   "city": 1,  #城市
//   "cityName": null, #城市名
//   "lon": 1,
//   "lat": 1
// }
export interface ApartmentLayout{

}

export interface ApartmentLayoutModel {
  id: number;
  apartmentId: number;
  name: string;
  uuid: string;
  enabled: boolean;
  brief?: string;
  description: string;
  thumb: string;
  layoutImage: string;
  priceDesc: string;
  minPrice: number;
  createTime: string;
  createId: number;
  // TODO
}

@Injectable()
export class APARTMENTAPISERVICE {
  private baseurl = '/apartment';

  constructor(private api: HttpUtils,private USER:USER) {

  }

  getPage(page:any , success: any) {
    let pm = new ParamsModel(this.USER)
    pm.url = this.baseurl;
    pm.reqestData = page;
    pm.succCallback = success;
    this.api.get(pm);
  }

  getList(success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = this.baseurl+"/list";
    pm.succCallback = success;
    this.api.get(pm);
  }

  getBuildingById(apartmentId: number,success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = '/building';
    pm.reqestData = {apartmentId:apartmentId};
    pm.succCallback = success;
    this.api.get(pm);
  }

  getApartmentDetail(apartmentId: number,success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = '/apartment/'+apartmentId;
    pm.succCallback = success;
    this.api.get(pm);
  }

  getHouseList(params:{apartmentId: number, layoutId?:number, buildingId: number, floor: number},success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = '/house';
    pm.reqestData = params;
    pm.succCallback = success;
    this.api.get(pm);
  }

  getLayoutList(apartmentId:number,success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = `${this.baseurl}/${apartmentId}/layout`;
    pm.succCallback = success;
    this.api.get(pm);
  }


  exchangeRoom(contractId:number,params:{apartmentId: number,HouseNo: string, operation: number},success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = `/contract/${contractId}/operateApply`;
    pm.reqestData = params;
    pm.succCallback = success;
    this.api.post(pm);
  }

  repealRoom(contractId:number,params:{operation: number},success:any){
    let pm = new ParamsModel(this.USER)
    pm.url = `/contract/${contractId}/operateApply`;
    pm.reqestData = params;
    pm.succCallback = success;
    this.api.post(pm);
  }

}
