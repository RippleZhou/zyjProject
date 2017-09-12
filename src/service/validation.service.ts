import {Injectable} from "@angular/core";


@Injectable()
export class ValidationService {
  public isPhoneValid(phone: string): boolean {
    return /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[3-8])|(18[0-9]))+\d{8}$/.test(phone);
  }
}
