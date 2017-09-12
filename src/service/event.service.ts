import {Injectable} from "@angular/core";
import {Events} from "ionic-angular";
/**
 * 全局事件中心
 */
@Injectable()
export class EventService {
  /**
   * 导航到 root 页
   */
  static NAV_ROOT = 'nav:root';
  static RE_LOGIN = 're:login';
  static REFRESH_USER = 'refresh:user';
  static NAV_TO = 'nav:to';
  static TOAST = 'toast'


  constructor(public events: Events) {
  }

  publish(topic: string, ...args: any[]): any[] {
    return this.events.publish(topic, ...args);
  }

  subscribe(topic: string, ...handlers: Function[]): void {
    this.events.subscribe(topic, ...handlers);
  }

  unsubscribe(topic: string, handler?: Function): boolean {
    return this.events.unsubscribe(topic, handler);
  }
}
