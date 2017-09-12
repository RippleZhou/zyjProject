/**
 * Created by johnson on 17/4/27.
 */
export class UserModel {
  id:number;
  username:string;
  name:string;
  sex:number;
  password:string;
  uuid:string;
  token:string;
  portrait:string;
  balance:number;
  score:number;
  idcard:string;
  invitation:string;
  idcardFront:string
  idcardBack:string
  constructor(resp:any){
    this.id=resp.id;
    this.username=resp.username;
    this.uuid=resp.uuid;
    this.token=resp.token;
    this.portrait=resp.portrait == null?this.portrait='assets/images/default.png':resp.portrait;
    this.name = resp.name;
    this.sex = resp.sex;
    this.balance = resp.balance;
    this.score = resp.score;
    this.idcard = resp.idcard;
    this.invitation = resp.invitation;
    this.idcardFront = resp.idcardFront;
    this.idcardBack = resp.idcardBack;

  }
}
