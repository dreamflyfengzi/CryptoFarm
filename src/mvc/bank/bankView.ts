import bankIndex from './bankIndex'
export default class bankView {
  private _bankCom: bankIndex;
  constructor() {
  }

  public onShowBank(type){
    if (this._bankCom == null) {
      this._bankCom = new bankIndex;
    }
    this._bankCom.onShowBank(type);
  }
}