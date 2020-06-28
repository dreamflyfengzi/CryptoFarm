/*
* name;
*/
import baseView from '../../component/baseView'
import {ui} from '../../../../ui/layaMaxUI'
export default class tipIndex extends baseView {

  constructor() {
    super(ui.base.tishi_tipUI);
  }
  // private _tipKuan: fairygui.GComponent;
  // private content_txt: fairygui.GTextField;
  // private confirm_btn: fairygui.GLoader;
  // private cancel_btn: fairygui.GLoader;
  // private close_btn: fairygui.GLoader;
  // private confirm_txt: fairygui.GTextField;
  // private cancel_txt: fairygui.GTextField;

  /**
   * 提醒弹窗
   * @param content_txt :提示文字
   * @param confirm_txt :确定文字
   * @param cancel_txt ：取消文字
   * @param confirm_fun ：确定监听函数
   * @param cancel_fun   ：取消监听函数
   */
  public tipShow(content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    console.log(this.ui.scene)
    var _tipKuan = this.ui.scene;
    _tipKuan.content_txt.text = content_txt;
    _tipKuan.confirm_btn.label = confirm_txt;
    _tipKuan.cancel_btn.label = cancel_txt;
    // _tipKuan.confirm_btn.on(Laya.event.Click,this, confirm_fun);
    _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
    _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, this.close);
    // _tipKuan.cancel_btn.asLoader.onClick(this, cancel_fun);
    // _tipKuan.close_btn.asLoader.onClick(this, this.close);
    // // console.log(this._tipKuan.displayObject.x,this._tipKuan.displayObject.y);
    // _tipKuan.displayObject.pivotX = 0.5 * _tipKuan.displayObject.width;
    // _tipKuan.displayObject.pivotY = 0.5 * _tipKuan.displayObject.height;
    // this.addChild(_tipKuan.displayObject);
    this.tweenShow();
  }
  public close() {
    this.tweenHide();
  }
  public gameFailTip(data) {
    var myData = data.gd;
    this.tipShow(myData.msg, '确定', '取消', function () {
      this.close();
    }.bind(this), function () {
      this.close();
    }.bind(this))
  }
  /**
   * 飘字提醒
   * 
   */
  public gameTxtTip(txt: string, call_fun?: Function) {
    // var txtNode: Laya.Text = new Laya.Text();
    // txtNode.text = txt;
    // txtNode.pivotX = txtNode.width * .5;
    // txtNode.pivotY = txtNode.height * .5;
    // txtNode.x = CONST.STAGEWIDTH / 2;
    // txtNode.y = CONST.STAGEHEIGHT / 2;
    // txtNode.color = '#ffffff';
    // txtNode.fontSize = 15;
    // gameLayer.tipslayer.addChild(txtNode);
    // Laya.Tween.to(txtNode, { y: txtNode.y - 100, alpha: 0.5 }, 1000, null, Laya.Handler.create(this, function () {
    //   txtNode.removeSelf();
    //   call_fun ? call_fun : function () { };
    // }));

  }
  /**
   * 金币弹窗
   * @param content_txt :提示文字
   * @param confirm_txt :确定文字
   * @param cancel_txt ：取消文字
   * @param confirm_fun ：确定监听函数
   * @param cancel_fun   ：取消监听函数
   */
  public goldTipShow(title: string, content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    // var _goldTipKuan = fairygui.UIPackage.createObject('base', 'gold_tip').asCom;
    // _goldTipKuan.getChild('title').asTextField.text = title;
    // _goldTipKuan.getChild('content_txt').asTextField.text = content_txt;
    // _goldTipKuan.getChild('confirm_txt').asTextField.text = confirm_txt;
    // _goldTipKuan.getChild('cancel_txt').asTextField.text = cancel_txt;
    // _goldTipKuan.getChild('confirm_btn').asLoader.onClick(this, confirm_fun);
    // _goldTipKuan.getChild('cancel_btn').asLoader.onClick(this, cancel_fun);
    // _goldTipKuan.getChild('close_btn').asLoader.onClick(this, this.close);
    // this.setScale(_goldTipKuan.displayObject);
    // // console.log(this._tipKuan.displayObject.x,this._tipKuan.displayObject.y);
    // _goldTipKuan.displayObject.pivotX = 0.5 * _goldTipKuan.displayObject.width;
    // _goldTipKuan.displayObject.pivotY = 0.5 * _goldTipKuan.displayObject.height;
    // this.addChild(_goldTipKuan.displayObject);
    this.tweenShow();
  }
}
