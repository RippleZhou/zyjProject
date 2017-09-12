import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

export class LivePeopleModel{
  public name: string;
  public idNum: string;
}
@Injectable()
export class ContractService {
  private livePeople: Subject<LivePeopleModel> = new Subject<LivePeopleModel>();

  public sendLivePeople(data:LivePeopleModel) {
    this.livePeople.next(data);
  }

  public getLivePeople(): Observable<LivePeopleModel> {
    return this.livePeople.asObservable();
  }
}
