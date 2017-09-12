import {Component, ViewChild} from '@angular/core';

import {HomePage} from '../home/home';
import {ActivityPage} from '../activity/activity';
import {UserPage} from "../user/user";
import {Tabs, NavParams} from "ionic-angular";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef:Tabs;
  tab1Root:any = HomePage;
  tab2Root:any = ActivityPage;
  tab3Root:any = UserPage;
  public tabId:number;
  public selectTabIndex:number;

  constructor(public params:NavParams) {
    console.log("mainTabs constructor");
    this.tabId = params.get("tabId");
    if (this.tabId != undefined || this.tabId != null) {
      this.selectTabIndex = this.tabId;
    }
  }

  changeTabs = function () {
    console.log("tab changed");
  };

  ionViewDidEnter() {
    console.log("tab ionViewDidEnter");
  }
}
