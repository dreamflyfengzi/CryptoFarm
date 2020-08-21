/*
* name;
*/
import baseWindow from '../../component/baseWindow'
import {ui} from '../../../../ui/layaMaxUI'
import gameLayer from '../../../gameLayer'
import CONST from '../../../../const/CONST'
export default class tipIndex extends baseWindow {

  constructor() {
    super();
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
    console.log(content_txt,confirm_txt,cancel_txt,confirm_fun,cancel_fun)
    console.log(content_txt,confirm_txt,cancel_txt,confirm_fun,cancel_fun)
    console.log(content_txt,confirm_txt,cancel_txt,confirm_fun,cancel_fun)
    var _tipKuan = new ui.base.tip.holeTipUI();
    _tipKuan.content_txt.text = content_txt;
    // _tipKuan.confirm_btn.on(Laya.event.Click,this, confirm_fun);
    _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
    _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, cancel_fun);
    _tipKuan.confirm_btn.label = confirm_txt
    _tipKuan.cancel_btn.label = cancel_txt
    _tipKuan.close_btn.on(Laya.Event.CLICK, this, this.close);
    _tipKuan.pivot(_tipKuan.width / 2, _tipKuan.height / 2);//设置轴心
    this.addChild(_tipKuan);
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
    var txtNode: Laya.Text = new Laya.Text();
    txtNode.text = txt;
    txtNode.pivotX = txtNode.width * .5;
    txtNode.pivotY = txtNode.height * .5;
    txtNode.x = CONST.STAGEWIDTH /3;
    txtNode.y = CONST.STAGEHEIGHT / 2;
    txtNode.color = '#ffffff';
    txtNode.fontSize = 65;
    gameLayer.tipslayer.addChild(txtNode);
    Laya.Tween.to(txtNode, { y: txtNode.y - 100, alpha: 0.5 }, 1000, null, Laya.Handler.create(this, function () {
      txtNode.removeSelf();
      call_fun ? call_fun : function () { };
    }));

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
     var _tipKuan = new ui.base.tip.holeTipUI();
     this.addChild(_tipKuan)
    _tipKuan.content_txt.text = content_txt;
    _tipKuan.confirm_btn.on(Laya.Event.CLICK, this, confirm_fun);
    _tipKuan.cancel_btn.on(Laya.Event.CLICK, this, cancel_fun);
    _tipKuan.close_btn.on(Laya.Event.CLICK, this, this.close);
    _tipKuan.pivotX = 0.5 * _tipKuan.width;
    _tipKuan.pivotY = 0.5 * _tipKuan.height;
    this.tweenShow();
  }
}
