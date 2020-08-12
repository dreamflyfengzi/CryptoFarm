/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import CONST from '../../const/CONST'
import dataJson from '../resconfig/dataJson'
import materialController from './/materialController'
import GAMEEVENT from '../event/GAMEEVENT'
import { ui } from '../../ui/layaMaxUI';
import tipController from '../baseView/public/tip/tipController'
import httpJson from '../../net/httpJson'
// import infoController from '../info/infoController'
// import factoryController from '../factory/factoryController'
export default class orderTip extends baseTips {

  private _orderTip: Laya.Sprite;//对象层
  // private gname:fairygui.GTextField;//名字
  // private make:fairygui.GTextField;//出产
  // private goto_btn:fairygui.GLoader;//物品列表
  constructor() {
    super();
  }
  /**前往的框 */
  public showOrderTip(x, y, info, index) {//todo 
    this._orderTip = new ui.materialorder.orderTipsUI;
    this._orderTip.x = x - CONST.DESIGNSTAGEWIDTH / 2 - 45;
    this._orderTip.y = (y - CONST.DESIGNSTAGEHEIGHT / 2) * CONST.STAGEHEIGHT / CONST.DESIGNSTAGEHEIGHT;
    this.addChild(this._orderTip);
    this.showTip();
    console.log(info, index)
    var need_num = info.goods[index].num;
    console.log(need_num)
    //查询系统物品信息
    var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()['hh6003'];
    this._orderTip.scene.get_btn.off(Laya.Event.CLICK, this, this.getProduct.bind(this));

    this._orderTip.scene.getChildByName("num").text = good_info.num + '/' + need_num;
    this._orderTip.scene.good_icon.skin = "product/" + info.goods[index].id + '.png';
    if (good_info.num === need_num || good_info.num > need_num) {//足够
      this._orderTip.scene.getChildByName("num").color = "#0eb544"
      var _status = 'load'
    }
    if (good_info.num < need_num) {
      this._orderTip.scene.getChildByName("num").color = "#ee2e45"
      var _status = 'purchase'
    }
    this._orderTip.scene.get_btn.on(Laya.Event.CLICK, this, this.getProduct.bind(this), [_status,info,index]);

    this.modal.on(Laya.Event.CLICK, this, this.hideLayer);

  }

  /**
   * 装载商品
   */
  private getProduct(_status,info,index) {
    if (_status == 'load') {
      console.log('进行装载')
    } else {
      tipController.getInstance()
      var _info = {
        "skin":"product/" + info.goods[index].id + '.png',
        "num_txt":info.goods[index].num,
        "price":'11'
      }
      console.log(_info)
      var confirm_fun = function (){
        
      }
      Laya.stage.event(GAMEEVENT.BASETIPS, ["商品不足", '从工厂和农场生产商品，或者你现在可以用钻石购买', _info, confirm_fun]);
      this.hideLayer()
    }
    // let tmp_http = httpJson.getInstance();
    // let tmp_data = {
    // 	'a':"store_good_del",
    // 	'm':"store",
    // 	'd':{
    // 		'good_id':,
    // 		'num':
    // 	},
    // 	'code':1
    // };
    // tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    // Laya.stage.event(NETWORKEVENT.STOREGOODDEL);
  }

  // private goFun(type: any, id: string) {
  //   this.tweenHide();
  //   orderController.getInstance().closeOrder();
  //   if (type == 5) {
  //     infoController.getInstance().showBottonDiv('factory');
  //     //获取工厂的信息
  //     var factoryGoodInfo = dataJson.getInstance().GET_SYS_FACTORY_GOOD();
  //     console.log(id, factoryGoodInfo);
  //     var factoryId = '';
  //     for (var i in factoryGoodInfo) {
  //       for (var q in factoryGoodInfo[i]) {
  //         if (factoryGoodInfo[i][q].id == id) {
  //           factoryId = i;
  //           break;
  //         }
  //       }
  //       if (factoryId) {
  //         break;
  //       }
  //     }
  //     if (factoryId) {
  //       // factoryController.getInstance().onShowFactoryInfo(factoryId);
  //       console.log('设置需要打开工厂的ID')
  //       factoryController.getInstance().model._mf_id = factoryId;//设置需要打开工厂的ID
  //       factoryController.getInstance().model._is_open = true;//设置是否需要打开工厂
  //     }
  //     factoryController.getInstance().onShow(1);

  //   } else if (type == 6) {
  //     infoController.getInstance().showBottonDiv('farm');
  //   }
  // }

}
