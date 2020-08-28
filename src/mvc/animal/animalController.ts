import animalView from "./animalView";
import NETWORKEVENT from '../event/NETWORKEVENT'
import animalNetwork from './animalNetwork'

export default class animalController {
  private static _instance: animalController;
  private _animalType: string;
  private _animalView: animalView;
  private _network: animalNetwork;
  public static getInstance(): animalController {
    if (animalController._instance == null) {
      animalController._instance = new animalController;
    }
    return animalController._instance;
  }
  constructor() {
    this._animalView = new animalView;
    this._network = new animalNetwork;
    Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTINFO,this,this._network.SendAnimalFactoryBak);
    Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTHARVEST,this,this._network.HarvestAnimalFactory);
    Laya.stage.on(NETWORKEVENT.ANIMALPRODUCTFEED,this,this._network.FeedAnimalFactory);
    Laya.stage.on(NETWORKEVENT.ANIMALSlOTLOCK,this,this._network.AnimalSlotLock);
  }
  
  /**
   * 展示界面
   */
  public onShowAnimal(type){
    this._animalType = type;
    if (this._animalView == null) {
      //初始化视图的类
      this._animalView = new animalView;
    }
    this._animalView.onShowAnimal(type);
  }

  /**
   * 展示生产的动物列表
   */
  public showAnimalFactory(_type?:string){
    this._animalView.showAnimalFactory(_type)
  }
}