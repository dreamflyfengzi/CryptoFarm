/**
* name 
*/
import baseView from '../baseView/component/baseView'
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import NETWORKEVENT from '../event/NETWORKEVENT'
import dataJson from '../resconfig/dataJson'
export default class warehouseSellTip extends baseView {

  // private _sellTip:fairygui.GComponent;//顶层对象
  private _id: string;//商品的ID
  // private _close:fairygui.GLoader;//关闭按钮
  private _num: number;//当前选择的数量
  // private _jian_btn:fairygui.GLoader;//减的按钮
  // private _jia_btn:fairygui.GLoader;//加的按钮
  // private _sell_btn:fairygui.GLoader;//出售的按钮
  // private _tot_num:fairygui.GTextField;//总共的数量
  // private _gicon:fairygui.GLoader;//物品图片
  // private _tot_price:fairygui.GTextField;//总共的价格

  private _good_info: any;//物品的信息
  constructor() {
    super(ui.warehouse.sell_tipUI);
  }
  /** */
  public showSellTip(id) {
    this._id = id;

    // console.log(id);
    // this._sellTip = fairygui.UIPackage.createObject('warehouse','sell_tip').asCom;
    // this.setScale(this._sellTip.displayObject);
    // this._sellTip.displayObject.pivotX = 0.5*this._sellTip.displayObject.width;
    // this._sellTip.displayObject.pivotY = 0.5*this._sellTip.displayObject.height;
    // this.addChild(this._sellTip.displayObject);
    this.tweenShow();
    // //赋值
    // this._gicon = this._sellTip.getChild('gicon').asLoader;
    // this._tot_num = this._sellTip.getChild('tot_num').asTextField;
    // this._tot_price = this._sellTip.getChild('tot_price').asTextField;
    // this._jian_btn = this._sellTip.getChild('jian_btn').asLoader;
    // this._jia_btn = this._sellTip.getChild('jia_btn').asLoader;
    // this._sell_btn = this._sellTip.getChild('sell_btn').asLoader;
    // this._close = this._sellTip.getChild('close').asLoader;
    this.ui.jian_btn.on(Laya.Event.CLICK, this, this.setGoodNum, [-1]);
    this.ui.jia_btn.on(Laya.Event.CLICK, this, this.setGoodNum, [1]);
    this.ui.close_btn.on(Laya.Event.CLICK, this, this.closeSellTip);
    this.ui.sell_btn.on(Laya.Event.CLICK, this, this.storeGoodDel);
    // //初始化物品的信息
    this.initGoodInfo();
  }
  private closeSellTip() {
    this.tweenHide();
  }
  /**
   * 初始化物品信息
   */
  private initGoodInfo() {
    var good_info = dataGlobal.getInstance().userGoodInfo[this._id];
    this._num = Math.floor((Math.floor(good_info.num) / 2)) < 1 ? 1 : Math.floor((Math.floor(good_info.num) / 2));
    this.ui.tot_num.text = 'X' + this._num;
    //获取物品的信息
    this._good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[this._id];
    let index = this._good_info.pic.lastIndexOf("/");
    var _skin = this._good_info.pic.substring(index + 1, this._good_info.pic.length);
    this.ui.gicon.graphics.drawTexture(Laya.loader.getRes("main/" + _skin + ".png"));
    console.log(this._good_info.pic)
    this.ui.tot_price.text = Math.floor(this._good_info.num) * Math.floor(this._num) + '';
  }
  /**
   * 点击加减按钮
   */
  private setGoodNum(this_num) {
    //获取用户仓库物品
    var good_info = dataGlobal.getInstance().userGoodInfo[this._id];
    if (this_num > 0) {
      this._num++;
      this._num = (Math.floor(good_info.num) >= this._num) ? this._num : Math.floor(good_info.num);
    } else {
      this._num--;
      this._num = this._num < 1 ? 1 : this._num;
    }
    this.ui.tot_num.text = 'X' + this._num;
    this.ui.tot_price.text = Math.floor(this._good_info.num) * Math.floor(this._num) + '';
  }
  /**
   * 出售商品
   */
  private storeGoodDel() {
    // let tmp_http = net.httpJson.getInstance();
    // let tmp_data = {
    // 	'a':"store_good_del",
    // 	'm':"store",
    // 	'd':{
    // 		'good_id':this._id,
    // 		'num':this._num
    // 	},
    // 	'code':1
    // };
    // console.log("发送websocket数据",tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    Laya.stage.event(NETWORKEVENT.STOREUPGRADEBAK);
    this.closeSellTip();
  }


}
