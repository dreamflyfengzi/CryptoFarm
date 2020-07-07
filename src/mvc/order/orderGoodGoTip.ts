/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import CONST from '../../const/CONST'
import dataJson from '../resconfig/dataJson'
import orderController from './orderController'
import { ui } from '../../ui/layaMaxUI';
import infoController from '../info/infoController'
export default class orderGoodGoTip extends baseTips {

  private _orderGoodGoTip: Laya.Sprite;//对象层
  // private gname:fairygui.GTextField;//名字
  // private make:fairygui.GTextField;//出产
  // private goto_btn:fairygui.GLoader;//物品列表
  constructor() {
    super();
  }
  /**前往的框 */
  public showOrderGoodGoTip(x, y, id) {
    console.log('showOrderGoodGoTip',x, y, id)
    console.log('showOrderGoodGoTip',(x - CONST.DESIGNSTAGEWIDTH / 2) * CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH, (y - CONST.DESIGNSTAGEHEIGHT / 2) * CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT, id)
    this._orderGoodGoTip = new ui.order.goodGoTipUI;
    // this._orderGoodGoTip.x = (x - CONST.DESIGNSTAGEWIDTH / 2) * CONST.STAGEWIDTH / CONST.DESIGNSTAGEWIDTH;
    this._orderGoodGoTip.x = x - CONST.DESIGNSTAGEWIDTH / 2 + this._orderGoodGoTip.width/2;
    // this._orderGoodGoTip.y = (y - CONST.DESIGNSTAGEHEIGHT / 2) * CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    this._orderGoodGoTip.y = y - CONST.DESIGNSTAGEHEIGHT / 2;
    // this.setScale(this._orderGoodGoTip);
    this._orderGoodGoTip.pivotX = 0.5*this._orderGoodGoTip.width;
    this._orderGoodGoTip.pivotY = 1*this._orderGoodGoTip.height;
    this.addChild(this._orderGoodGoTip);
    this.showLayer();
    //赋值
    // this.go_btn = this._orderGoodGoTip.getChild('go_btn').asLoader;
    // this.gname = this._orderGoodGoTip.getChild('gname').asTextField;
    // this.make = this._orderGoodGoTip.getChild('make').asTextField;
    // this.goto_btn = this._orderGoodGoTip.getChild('goto_btn').asLoader;

    //查询系统物品信息
    var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[id];

    this._orderGoodGoTip.scene.gname.text = good_info.name;
    // this.goto_btn.off(Laya.Event.CLICK,this,this.goFun.bind(this));
    if(good_info.type == 6){//花田种植
    	this._orderGoodGoTip.scene.make.text = '花田种植';
    }else if(good_info.type == 5){
    this._orderGoodGoTip.scene.make.text = '工厂物品';	
    }
    this._orderGoodGoTip.scene.goto_btn.on(Laya.Event.CLICK,this,this.goFun.bind(this),[good_info.type,good_info.id]);

    this.modal.on(Laya.Event.CLICK, this, this.hideLayer);

  }

  private goFun(type: any, id: string) {
    this.tweenHide();
    orderController.getInstance().closeOrder();
    if (type == 5) {
      infoController.getInstance().showBottonDiv('factory');
      //获取工厂的信息
      var factoryGoodInfo = dataJson.getInstance().GET_SYS_FACTORY_GOOD();
      console.log(id, factoryGoodInfo);
      var factoryId = '';
      for (var i in factoryGoodInfo) {
        for (var q in factoryGoodInfo[i]) {
          if (factoryGoodInfo[i][q].id == id) {
            factoryId = i;
            break;
          }
        }
        if (factoryId) {
          break;
        }
      }
      if (factoryId) {
        // factoryController.getInstance().onShowFactoryInfo(factoryId);
        // factoryController.getInstance().model._mf_id = factoryId;//设置需要打开工厂的ID
        // factoryController.getInstance().model._is_open = true;//设置是否需要打开工厂
      }
      // factoryController.getInstance().onShow(1);

    } else if (type == 6) {
      infoController.getInstance().showBottonDiv('farm');
    }
  }

}
