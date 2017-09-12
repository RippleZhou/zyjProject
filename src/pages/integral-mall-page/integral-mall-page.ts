import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IntegralStoreOrderPage} from "../integral-store-order/integral-store-order";
import {ROUTER} from "../../service/router.service";

@IonicPage()
@Component({
  selector: 'page-integral-mall-page',
  templateUrl: 'integral-mall-page.html',
})
export class IntegralMallPage {
  goods = [
    {
      name: '礼品名称',
      price: '100',
      info: {
        one:"1.关关雎鸠，在河之洲，窈窕淑女，君子好逑。《诗经·国风·周南·关雎》",
        two:"2. 蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。",
        three:"3.桃之夭夭,灼灼其华。之子于归，宜其室家。 《诗经·国风·周南·桃夭》",
        four:"4.知我者，谓我心忧；不知我者，谓我何求，悠悠苍天，此何人哉? 《诗经·国风·王风·黍离》",
        five:"5.彼采萧兮，一日不见，如三秋兮。《诗经·国风·王风·采葛》"
      }
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,private ROUTER: ROUTER) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad IntegralMallPage');
  }

  gotoIntegralStoreOrder() {
    this.ROUTER.go(ROUTER.INTERGRALORDER);
  }

}
