import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ContractPayPage} from "../contract-pay-page/contract-pay-page";
import {APARTMENTAPISERVICE, BuildingModel} from "../../api/apartment-api.service";
import {USER} from "../../service/user.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {HouseModel} from "../../model/houseInfo.model";
import {ROUTER} from "../../service/router.service";


interface FloorDescModel {
  id?: number;
  name?: string;
  thumb?: string;
  enabled?: boolean;
}

@IonicPage()
@Component({
  selector: 'page-renting-page',
  templateUrl: 'renting-page.html',
  providers:[APARTMENTAPISERVICE]
})
export class RentingPage {
  private apartmentList: string[];

  private apartmentId: number;
  private layoutId: number = -1;
  private buildingId: number;
  private floorId: number;
  private houseId: number;


  private buildingData ?: BuildingModel;
  private houseList ?: Array<HouseModel>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private user: USER,
              private ls:LocalStorage,
              public toastCtrl: ToastController,
              private apartmentApiService: APARTMENTAPISERVICE ,
              private ROUTER: ROUTER
  ) {
  }

  get buildingList() {
    return this.buildingData ? this.buildingData.buildingVOs : [];
  }

  get layoutList() {
    return this.buildingData ? this.buildingData.layoutVOs : [];
  }

  get buildingInfo() {
    return this.buildingList.find(v => v.id === +this.buildingId);
  }

  get floorList(): Array<FloorDescModel> {
    if (this.buildingInfo) {
      let desc = this.buildingInfo.floorDesc;
      if (typeof desc === 'string') {
        return JSON.parse(desc);
      }
      return desc;
    }
    return [];
  }

  get floorInfo(): FloorDescModel {
    if (this.floorId) {
      return this.floorList.find(v => v.id === +this.floorId) || {};
    }
    return {};
  }

  get houseInfo():HouseModel{
    if (this.houseId) {
      return this.houseList.find(v => v.id === +this.houseId);
    }
    return null;
  }

  gotoContractPay() {
    this.user.isLogin()
      .then(v => {
        if(this.houseInfo == null){
          let toast = this.toastCtrl.create({
            message: '请先选择房间',
            duration: 3000,
            position: 'top'
          });
          toast.present();
          return
        }
        this.ls.setObject('houseInfo',this.houseInfo);
        console.log(this.houseInfo);
        this.ROUTER.go(ROUTER.CONTRACTPAY);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentingPage');
    if (!this.apartmentList) {
      this.apartmentApiService.getList((v => {
        this.apartmentList = v;
        if (this.apartmentList[0]) {
          this.onApartmentIdChange(v[0].id);
        }
      }));
    }
  }

  onApartmentIdChange(v) {
    this.apartmentId = v;
    this.apartmentApiService
      .getBuildingById(this.apartmentId,(v => {
        this.buildingData = v;
        // 默认不选中
        // if(this.layoutList[0]){
        //   this.layoutId=this.layoutList[0].id;
        // }
        if (this.buildingList[0]) {
          this.buildingId = this.buildingList[0].id;
        }
        if (this.floorList[0]) {
          this.floorId = this.floorList[0].id;
        }
        this.onFloorParamChange();
      }));
  }


  onFloorParamChange() {
    if (this.apartmentId && this.buildingId && this.floorId) {
      this.apartmentApiService.getHouseList(
        {
          apartmentId: this.apartmentId,
          // layoutId: +this.layoutId < 0 ? undefined : this.layoutId,
          buildingId: this.buildingId,
          floor: this.floorId
        }
        ,(v => {
          this.houseList = v;
          console.log(this.houseList);
        }));
    }
  }
}
