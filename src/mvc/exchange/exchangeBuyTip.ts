/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import NETWORKEVENT from '../event/NETWORKEVENT'
import dataJson from '../resconfig/dataJson'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
export default class warehouseSellTip extends baseTips {

  private _sellTip:Laya.Sprite;//顶层对象
  private _id: string;//商品的ID
  private _close:Laya.Sprite;//关闭按钮
  private _num: number;//当前选择的数量
  private _good_info: any;//物品的信息
  constructor() {
    super();
  }
  /** */
  public showSellTip(id) {
    this._id = id;
    this._sellTip = new ui.exchange.buyBulletUI();
    this._sellTip.pivotX = 0.5*this._sellTip.width;
    this._sellTip.pivotY = 0.5*this._sellTip.height;
    this.addChild(this._sellTip);
    this.tweenShow();
    this._sellTip.scene.close_btn.on(Laya.Event.CLICK, this, this.closeSellTip);
    this._sellTip.scene.cancel.on(Laya.Event.CLICK, this, this.closeSellTip);
    // 初始化物品的信息
    this.initInfo();
  }
  private closeSellTip() {
    this.tweenHide();
  }
  /**
   * 初始化物品信息
   */
  private initInfo() {
    var good_info = dataGlobal.getInstance().marketInfo.data_info;
    for (var i in good_info) {
      if(good_info[i].good_id == this._id) {
        var _good_info = good_info[i];
      }
    }
    this._sellTip.scene.good_name.text = _good_info.good_name;
    this._sellTip.scene.icon.skin = "factory/pic_"+_good_info.good_id+".png";
    this._sellTip.scene.seller.text = _good_info.seller;
    this._sellTip.scene.price.text = _good_info.price;
    this._sellTip.scene.describe.text = _good_info.good_name;
    this._sellTip.scene.buy_btn.on(Laya.Event.CLICK, this, this.purchaseItems);
  }
  
  /**
   * 购买商品
   */
  private purchaseItems() {
    let tmp_http = httpJson.getInstance();
    let tmp_data = {
    	'a':"store_good_del",
    	'm':"store",
    	'd':{
    		'good_id':this._id,
    		'num':this._num
    	},
    	'code':1
    };
    tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    // Laya.stage.event(NETWORKEVENT.STOREUPGRADEBAK); // todo
    this.closeSellTip();
  }
}
