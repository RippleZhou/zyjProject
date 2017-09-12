/**
 * Created by johnson on 17/4/27.
 */
export class ReservationModel {
  apartmentId:string;
  layoutId:string;
  constructor(apartmentId:string,layoutId:string){
    this.apartmentId = apartmentId;
    this.layoutId = layoutId;
  }
}
