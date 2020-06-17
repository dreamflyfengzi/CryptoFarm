/**
* name 
*/
import GAMEEVENT from "../event/GAMEEVENT"
import { mainView } from "./mainView"
import { mainNetwork } from "./mainNetwork"
import { mainModel } from "./mainModel"
export default class mainController {
  private static _instance: mainController;
  //
  private _mainview: mainView;
  /** */
  private _network: mainNetwork;
  /** */
  public maininfo: mainModel;
  /** */
  // public socketmsg:net.socketMsg;
  /** */
  public static getInstance(): mainController {
    if (mainController._instance == null) {
      mainController._instance = new mainController;
    }
    return mainController._instance;
  }
  //
  constructor() {
    // Laya.stage.on(GAMEEVENT.RESCOMPLETE,this,this.onInit);
    this.onInit()
    // this.initModule();
  }
  /** */
  private onInit() {
    if (this._mainview == null) {
      this._mainview = new mainView;
    }
    this._mainview.onInit();
  }
  // /** */
  // private initModule(){
  // 	if(this._network == null){
  // 		this._network = new   mainNetwork;
  // 		this.maininfo = new   mainModel;
  //       	// this.socketmsg = new net.socketMsg;
  // 	}

  // }
}
