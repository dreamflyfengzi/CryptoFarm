/**
* name 
*/
import { ui } from "../../ui/layaMaxUI";
export class mainView {
  private btn1: Laya.Sprite;
  private btn2: Laya.Sprite;
  private btn3: Laya.Sprite;
  /**test*/
  // private _animation:mvc.baseView.component.baseAnimation;

  constructor() {
  }
  /** */
  public onInit() {
    
    // fairygui.UIConfig.packageFileExtension = 'json';
    // //
    // var base = resConfig.getResUrl('base').split(".");
    // fairygui.UIPackage.addPackage(base[0]);
    // var farmland = resConfig.getResUrl('farmland').split(".");;
    // fairygui.UIPackage.addPackage(farmland[0]);
    // var animation = resConfig.getResUrl('animation').split(".");;
    // fairygui.UIPackage.addPackage(animation[0]);
    //
    // this.initView();
  }
  /** */
  // public initView() {
  //   if (this.btn1 == null) {
  //     this.btn1 = new Laya.Sprite;
  //     var tmpbtnbg: fairygui.GImage = fairygui.UIPackage.createObject('base', 'button-green-3').asImage;
  //     // this.btn1.addChild(tmpbtnbg.displayObject);
  //     this.btn1.texture = tmpbtnbg.image.tex;
  //     //
  //     var tmptxt = new Laya.Text;
  //     tmptxt.text = "静态框体";
  //     tmptxt.color = '#ffffff';
  //     tmptxt.fontSize = 18;
  //     this.btn1.width = tmpbtnbg.width;
  //     this.btn1.height = tmpbtnbg.height;
  //     tmptxt.x = (tmpbtnbg.width - tmptxt.getBounds().width) * .5;
  //     tmptxt.y = (tmpbtnbg.height - tmptxt.getBounds().height) * .5;
  //     this.btn1.addChild(tmptxt);
  //     gameLayer.scenelayer.addChild(this.btn1);
  //     this.btn1.x = 45;
  //     this.btn1.y = 200;
  //     this.btn1.on(Laya.Event.CLICK, this, this.onOpen, [1]);
  //     //
  //     this.btn2 = new Laya.Sprite;
  //     var tmpbtnbg: fairygui.GImage = fairygui.UIPackage.createObject('base', 'button-green-3').asImage;
  //     this.btn2.texture = tmpbtnbg.image.tex;
  //     //
  //     tmptxt = new Laya.Text;
  //     tmptxt.text = "动态框体";
  //     tmptxt.color = '#ffffff';
  //     tmptxt.fontSize = 18;
  //     var rect = this.btn2.getBounds();
  //     console.log("rect:", rect);
  //     tmptxt.x = (rect.width - tmptxt.getBounds().width) * .5;
  //     tmptxt.y = (rect.height - tmptxt.getBounds().height) * .5;
  //     this.btn2.addChild(tmptxt);
  //     gameLayer.scenelayer.addChild(this.btn2);
  //     this.btn2.x = 250;
  //     this.btn2.y = 200;
  //     this.btn2.width = tmpbtnbg.width;
  //     this.btn2.height = tmpbtnbg.height;
  //     //
  //     this.btn2.on(Laya.Event.CLICK, this, this.onOpen, [2]);
  //     /** */
  //     this.btn3 = new Laya.Sprite;
  //     var tmpbtnbg: fairygui.GImage = fairygui.UIPackage.createObject('base', 'button-green-3').asImage;
  //     this.btn3.texture = tmpbtnbg.image.tex;
  //     tmptxt = new Laya.Text;
  //     tmptxt.text = "动画";
  //     tmptxt.color = '#ffffff';
  //     tmptxt.fontSize = 18;
  //     var rect = this.btn3.getBounds();
  //     console.log("rect:", rect);
  //     tmptxt.x = (rect.width - tmptxt.getBounds().width) * .5;
  //     tmptxt.y = (rect.height - tmptxt.getBounds().height) * .5;
  //     this.btn3.addChild(tmptxt);
  //     gameLayer.scenelayer.addChild(this.btn3);
  //     this.btn3.x = 450;
  //     this.btn3.y = 200;
  //     this.btn3.width = tmpbtnbg.width;
  //     this.btn3.height = tmpbtnbg.height;
  //     //
  //     this.btn3.on(Laya.Event.CLICK, this, this.onOpen, [3]);
  //   }
  // }

  // /** */
  // public onOpen(type) {
  //   if (type == 1) {
  //     // Laya.stage.event(GAMEEVENT.TIPS);
  //     if (this._animation) {
  //       this._animation.onClear();
  //     }
  //   } else if (type == 2) {
  //     // Laya.stage.event(GAMEEVENT.TIPS2);
  //     if (this._animation) {
  //       this._animation.onClear();
  //     }
  //   } else {
  //     if (this._animation == null) {
  //       this._animation = new mvc.baseView.component.baseAnimation;
  //     }
  //     this._animation.initAnimation("animation", "mc01");
  //     gameLayer.windowlayer.addChild(this._animation);
  //     this._animation.x = Laya.stage.width * .5;
  //     this._animation.y = Laya.stage.height * .5;
  //     if (this._animation.isplaying) {
  //       this._animation.stopAni();
  //     } else {
  //       this._animation.playAni();
  //     }
  //   }
  // }

}
