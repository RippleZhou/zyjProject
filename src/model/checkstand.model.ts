/**
 * Created by johnson on 17/4/27.
 */
export class CheckStandModel {
  billNo:string;
  billContent:string;
  sumMoney:string;
  money:number;
  id:number
  constructor(billNo:string,billContent:string,money:number,id:number){
    this.billNo = billNo;
    this.billContent = billContent;
    this.money = money;
    this.id=id;
  }
}
