/**
 * Created by johnson on 17/4/27.
 */
export class HouseModel {
  id: number;
  statusName: string;
  status: number;
  apartmentId: number;
  buildingId: number;
  floor: number;
  houseNo: string;
  layoutName:string;
  salePrice: number;
  depositPrice: number;
  orientationsName: string;
  orientations: number;
  area: number;
  payTypeName: string;
  payType: number;
  top: number;
  left: number;
  width: number;
  height: number;
  rotate: number;
  constructor(resp:any){
    this.id=resp.id;
    this.statusName=resp.statusName;
    this.status=resp.status;
    this.apartmentId=resp.apartmentId;
    this.buildingId=resp.buildingId;
    this.floor = resp.floor;
    this.houseNo = resp.houseNo;
    this.layoutName = resp.layoutName;
    this.salePrice = resp.salePrice;
    this.depositPrice = resp.depositPrice;
    this.orientationsName = resp.orientationsName;
    this.orientations = resp.orientations;
    this.area = resp.area;
    this.payTypeName = resp.payTypeName;
    this.payType = resp.payType;
    this.top = resp.top;
    this.left = resp.left;
    this.width = resp.width;
    this.height = resp.height;
    this.rotate = resp.rotate;
  }
}
