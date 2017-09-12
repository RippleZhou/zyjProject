/**
 * Created by johnson on 17/4/27.
 */
export class ContractModel {
  tel: string;
  customerName: string
  customerCard: string
  customerPhone: string
  address: string
  leaseStart: string
  leaseEnd: string
  payMoney?: string
  rental: number
  deposit: number
  feeBefore: number
  payWay: string
  cleanFee?: string
  signTime?: string
  contractId: number
  contractNo: string
  billNo: string
  billContent: string
  money?: string
  constructor(resp:any){
    this.tel=resp.id;
    this.customerName=resp.customerName;
    this.customerCard=resp.customerCard;
    this.customerPhone=resp.customerPhone;
    this.address=resp.address;
    this.leaseStart = resp.leaseStart;
    this.leaseEnd = resp.leaseEnd;
    this.payMoney = resp.payMoney;
    this.rental = resp.rental;
    this.deposit = resp.deposit;
    this.feeBefore = resp.feeBefore;
    this.payWay = resp.payWay;
    this.cleanFee = resp.cleanFee;
    this.signTime = resp.signTime;
    this.contractId = resp.contractId;
    this.contractNo = resp.contractNo;
    this.billNo = resp.billNo;
    this.billContent = resp.billContent;
    this.money = resp.money;
  }
}
