import animalIndex from './animalIndex'
export default class animalView {
  private _animalCom: animalIndex;
  constructor() {
  }

  public onShowAnimal(type){
    if (this._animalCom == null) {
      this._animalCom = new animalIndex;
    }
    this._animalCom.onShowAnimal(type);
  }
}