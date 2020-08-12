/**
* name 
*/
import gameLayer from '../../gameLayer'
import CONST from '../../../const/CONST'
export default class baseTips extends Laya.Sprite {
  public modal: Laya.Sprite;
  private delay = 1000;/*单位：毫秒 */

  constructor() {
    super();
    this.modal = new Laya.Sprite;
  }
  /** */
  public init() {

  }
  /** */
  public showModal() {
    this.modal.visible = true;
    this.modal.graphics.clear();
    this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
    this.modal.alpha = .5;
    this.modal.width = Laya.stage.width;
    this.modal.height = Laya.stage.height;
    // gameLayer.tipslayer.addChildAt(this.modal,0);
    gameLayer.tipslayer.addChild(this.modal);
    this.modal.on(Laya.Event.CLICK, this, this.onClick);
  }
  /** */
  public tweenShow() {
    //
    this.visible = true;
    this.setCenter();
    this.scale(0, 0);
    this.alpha = 0;
    Laya.Tween.to(this, { alpha: 1 }, this.delay, Laya.Ease.linearIn);
    Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.delay, Laya.Ease.elasticOut);
    this.showModal();
    gameLayer.tipslayer.addChild(this);

  }
  /**没有效果显示 */
  public showLayer() {
    this.visible = true;
    this.setCenter();
    this.showModal();
    gameLayer.tipslayer.addChild(this);
  }
   /**没有效果显示tip */
   public showTip() {
    this.visible = true;
    this.setCenter();
    this.modal.visible = true;
    this.modal.graphics.clear();
    this.modal.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
    this.modal.alpha = 0.35;
    this.modal.width = Laya.stage.width;
    this.modal.height = Laya.stage.height;
    // gameLayer.tipslayer.addChildAt(this.modal,0);
    gameLayer.tipslayer.addChild(this.modal);
    this.modal.on(Laya.Event.CLICK, this, this.onClick);
    gameLayer.tipslayer.addChild(this);
  }
   /**没有效果隐藏 */
   public hideTip() {
    gameLayer.tipslayer.removeChild(this);
    this.clearAll();
  }
  /**没有效果隐藏 */
  public hideLayer() {
    gameLayer.tipslayer.removeChild(this);
    this.clearAll();
  }
  /** */
  public tweenHide() {
    // this.modal.off(Laya.Event.CLICK,this,this.onClick);
    Laya.Tween.to(this, { scaleX: 0, scaleY: 0 }, this.delay, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onComplete));
    Laya.Tween.to(this, { alpha: 0 }, this.delay, Laya.Ease.bounceInOut, Laya.Handler.create(this, this.onAlphaComplete));
  }
  /** */
  private onComplete() {
    gameLayer.tipslayer.removeChild(this);
    this.scale(1, 1);
    this.clearAll();
  }
  /** */
  private onAlphaComplete() {
    gameLayer.tipslayer.removeChild(this);
    this.alpha = 1;
    this.clearAll();
  }
  /** */
  public setCenter() {
    this.pivotX = this.width * .5;
    this.pivotY = this.height * .5;
    this.x = Laya.stage.width * .5;
    this.y = Laya.stage.height * .5;
  }
  /**
   * 
   */
  /** */
  public onClick() {
  }
  /** */
  public clearAll() {
    this.modal.visible = false;
    this.modal.graphics.clear();
    this.modal.off(Laya.Event.CLICK, this, this.onClick);
    this.modal.off(Laya.Event.CLICK, this, this.hideLayer);
    this.removeChildren();
    Laya.Tween.clearAll(this);
    this.visible = false;
  }
  public setScale(obj: any) {
    var str = 0;
    if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > 1) {
      str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    }
    if (CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT > 1) {
      str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    }
    if (CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH > CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT) {
      str = CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    } else {
      str = CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    }
    obj.scale(CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH);
  }
}
