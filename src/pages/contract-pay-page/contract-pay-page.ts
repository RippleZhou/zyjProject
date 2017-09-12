import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {LivePeoplePage} from "../live-people/live-people";
import {ContractService} from "../../service/contract.service";
import {Subscription} from "rxjs/Subscription";
import {SignContractPage} from "../sign-contract/sign-contract";
import {ContractApiService} from "../../api/contract-api.service";
import moment from "moment"
import {IdcardConfirmPage} from "../idcard-confirm/idcard-confirm";
import {USER} from "../../service/user.service";
import {LocalStorage} from "../../utils/localstorage.utils";
import {HouseModel} from "../../model/houseInfo.model";
import {ContractModel} from "../../model/contract.model";
import {ROUTER} from "../../service/router.service";
/**
 * Generated class for the ContractPayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contract-pay-page',
  templateUrl: 'contract-pay-page.html',
})
export class ContractPayPage {
  private showCostDetail:boolean;

  houseInfo:HouseModel;
  data = {
    rentDate: 3,
    payWay: 1,
    startDate: moment().format(),
    customerCard: '',
    persons: [
      {
        name: '张三',
        idNum: '12345678900987654'
      }
    ],
    name: '',
    id: null
  };

  monthItems = [
    {name: '一月', value: 1, times: 1, validCheck: () => this.data.payWay != 1},
    {name: '三月', value: 2, times: 3},
    {name: '六月', value: 3, times: 6},
    {name: '一年', value: 4, times: 12},
    {name: '两年', value: 5, times: 24},
  ];

  payWays = [
    {name: '押一付三', value: 1, times: 3, validCheck: () => this.data.rentDate != 1},
    {name: '押一付一', value: 2, times: 1},
    {name: '租赁贷', value: 4, times: 0}
  ];

  /**
   * 押金
   */
  get guaranteeMoney() {
    return this.houseInfo.depositPrice
    // return this.houseInfo.depositPrice * this.payWays.find(v => v.value == this.data.payWay).times
  }

  /**
   * 租金
   */
  get rentMoney() {
    return this.houseInfo.salePrice * this.payWays.find(v => v.value == this.data.payWay).times;
  }


  get moneyItems() {
    let items = [
      {name: '押金', money: this.guaranteeMoney},
      {name: '租金', money: this.rentMoney},
    ];
    let sum = items.map(v => v.money).reduce((a, b) => a + b);
    items.push({name: '合计', money: sum});
    items.push({name: '本次应付', money: sum - this.saveMoney});
    return items;
  }


  get totalMoney() {
    return this.moneyItems[this.moneyItems.length - 1].money;
  }

  get saveMoney() {
    return 0;
  }

  private livePeopleSub:Subscription;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              private contractService:ContractService,
              private alterController:AlertController,
              private USER:USER,
              private ROUTER: ROUTER,
              private ls:LocalStorage,
              private modalCtrl:ModalController,
              private contractApiService:ContractApiService) {
    this.houseInfo  = this.ls.getObject('houseInfo') as HouseModel
  }


  gotoLivePeople() {
    this.navCtrl.push(LivePeoplePage)
  }

  gotoSignContract() {
    this.USER.isLogin()
      .then(v => {
        if (!v.idcard) {
          let modal = this.modalCtrl.create(IdcardConfirmPage, null, {showBackdrop: true});
          modal.onDidDismiss((data:{ name, idcard }) => {
            console.log("IdcardConfirm", data);
            if (data && data.idcard) {
              this.data.customerCard = data.idcard;
              this.doSignContract()
            }
          });
          modal.present()
        } else {
          this.data.customerCard = v.idcard;
          this.doSignContract()
        }
      });
  }

  doSignContract() {
    this.contractApiService
      .create({
        houseId: this.houseInfo.id,
        payWay: this.data.payWay,
        lease: this.data.rentDate,
        leaseStart: moment(this.data.startDate).format("YYYY-MM-DD"),
        payMoney: "" + this.totalMoney,
        customerCard: this.data.customerCard
      }, v => {
        let contract = new ContractModel(v);
        let user = this.USER.get();
        user.idcard = contract.customerCard
        this.USER.update(user);
        this.ls.setObject('contract',contract);
        this.ROUTER.go(ROUTER.SIGN);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractPayPage');
    this.livePeopleSub = this.contractService.getLivePeople().subscribe(v => {
      console.log('Recv', v);
      this.data.persons.push(v);
    });
    console.log(this.houseInfo);
  }

  ionViewWillUnload() {
    if (this.livePeopleSub) {
      this.livePeopleSub.unsubscribe();
    }
  }

  hasMask(a, b) {
    return (a & b) > 0;
  }
}
