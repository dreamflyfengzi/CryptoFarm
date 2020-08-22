import animalView from "./animalView";

export default class animalController {
  private static _instance: animalController;
  private _animalType: string;
  private _animalView: animalView;
  public static getInstance(): animalController {
    if (animalController._instance == null) {
      animalController._instance = new animalController;
    }
    return animalController._instance;
  }
  constructor() {
    this._animalView = new animalView;
  }
  
  /**
   * 展示动物
   */
  public onShowAnimal(type){
    this._animalType = type;
    if (this._animalView == null) {
      //初始化视图的类
      this._animalView = new animalView;
    }
    this._animalView.onShowAnimal(type);
  }
}