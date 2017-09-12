import {NgModule} from "@angular/core";
import {ContractService} from "./contract.service";
import {ValidationService} from "./validation.service";
import {AuthService} from "./auth.service";
import {WechatService} from "./wechat.service";
import {EventService} from "./event.service";

@NgModule({
  declarations: [],
  imports: [],
  entryComponents: [],
  providers: [ContractService, ValidationService, AuthService, WechatService, EventService]
})
export class ServiceModule {

}
