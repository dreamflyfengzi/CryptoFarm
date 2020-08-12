import bankView from "./bankView";

export default class bankController {
  private static _instance: bankController;
  private _bankType: string;
  private _bankView: bankView;
  public static getInstance(): bankController {
    if (bankController._instance == null) {
      bankController._instance = new bankController;
    }
    return bankController._instance;
  }
  constructor() {
    this._bankView = new bankView;
  }
  
  /**
   * 展示銀行
   */
  public onShowBank(type){
    this._bankType = type;
    if (this._bankView == null) {
      //初始化视图的类
      this._bankView = new bankView;
    }
    this._bankView.onShowBank(type);
  }
}