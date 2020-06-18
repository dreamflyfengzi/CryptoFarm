export default class indexSprite extends Laya.View {
  constructor() {
      super();
  }

  createChildren(){
      super.createChildren();
      this.createView(Laya.View.uiMap["indexSprite"]);
  }
}