/**
* name 
*/
import baseWindow from '../baseView/component/baseWindow'
import { ui } from '../../ui/layaMaxUI'
import NETWORKEVENT from '../event/NETWORKEVENT'
import dataGlobal from '../resconfig/dataGlobal'
import dataJson from '../resconfig/dataJson'
import tipController from '../baseView/public/tip/tipController'
import GAMEEVENT from '../event/GAMEEVENT'
import warehouseItem from './warehouseItem'
import warehouseController from './warehouseController'
export default class warehouseIndex extends baseWindow {

  private _warehouse: Laya.Sprite;//顶层对象
  // private _close:fairygui.GLoader;
  private _type: string;//当前选项的类型
  // private _good_list:fairygui.GList;//商品列表
  // private _item_all_bg:fairygui.GLoader;//‘所有’按钮
  // private _item_flower_bg:fairygui.GLoader;//‘花卉’按钮
  // private _item_good_bg:fairygui.GLoader;//‘商品’按钮
  // private _upgrade_div:fairygui.GGroup;//升级层
  // private _upgrade_btn:fairygui.GLoader;//升级按钮

  constructor() {
    super();
  }
  /**显示工厂场景(type:1.当前页面隐藏切换，2.当前页面去除切换 */
  public onShowWarehouse() {
    if(this._warehouse == null){
      this._warehouse = new ui.warehouse.warehouseUI();
    	this.setScale(this._warehouse);
    	 this._warehouse.name = 'warehouse';
    // // // 	// console.log(this._tipKuan. x,this._tipKuan. y);
    	this._warehouse.pivotX = 0.5*this._warehouse.width;
    	this._warehouse.pivotY = 0.5*this._warehouse.height;
     this.addChild(this._warehouse);
    }
    this.tweenShow();
    //获取对象
    // this._close = this._warehouse.getChild('close').asLoader;
    // this._item_all_bg = this._warehouse.getChild('item_all_bg').asLoader;
    // this._item_flower_bg = this._warehouse.getChild('item_flower_bg').asLoader;
    // this._item_good_bg = this._warehouse.getChild('item_good_bg').asLoader;
    // this._good_list = this._warehouse.getChild('good_list').asList;//商品列表
    // this._warehouse.item_all.on(Laya.Event.CLICK, this, function () {
    //   if (this._type != 'all') {
    //     this.switchItem('all');
    //     // this.initWarehouseGoodList();
    //   }
    // }.bind(this));
    // this.ui.item_flower.on(Laya.Event.CLICK, this, function () {
    //   if (this._type != 'flower') {
    //     this.switchItem('flower');
    //     // this.initWarehouseGoodList();
    //   }
    // }.bind(this));
    // this.ui.item_good.on(Laya.Event.CLICK, this, function () {
    //   if (this._type != 'goods') {
    //     this.switchItem('goods');
    //     // this.initWarehouseGoodList();
    //   }
    // }.bind(this));
    // // this.ui.upgrade_btn = this._warehouse.getChild('upgrade_div').asGroup;;//升级层
    // // this._upgrade_btn = this._warehouse.getChild('upgrade_btn').asLoader;//升级按钮
    // //初始化选项
    // this.switchItem('all');
    // //获取用户的物品数据
    // this.store_info();
    // // this._close.on(Laya.Event.CLICK,this,this.tweenHide);

  }
  /**
   * 设置仓库的基本信息
   */
  public initWarehouseInfo() {
    var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    // var good_num = this._warehouse.getChild('good_num').asTextField;//容量文字
    // this.ui.good_num.text = '容量：' + data.num2 + '/' + data.num;
    //判断是否可以升级
    var store_info = dataJson.getInstance().GET_SYS_STORE_INFO();
    if (store_info[Math.floor(data.grade) + 1]) {//最高级了
      // this.ui.upgrade_btn.visible = true;
      this.setUpdrageDiv();
    } else {
      // this.ui.upgrade_btn.visible = false;
    }
  }
  /**
   * 设置升级按钮
   * 
   */
  public setUpdrageDiv() {
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//获取用户信息金币信息
    var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    console.log(have_gold, data, dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1])
    // this.ui.upgrade_btn.off(Laya.Event.CLICK, this, this.showGoldTip);

    //获取等级下一级的信息
    if (dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1]) {//有下一级
      //判断一下
      var next_grade = dataJson.getInstance().GET_SYS_STORE_INFO()[Math.floor(data.grade) + 1];
      var good_list = next_grade.good;
      var confirm_fun: any;
      for (var i in good_list) {
        if (good_list[i].id == 'g001') {
          if (good_list[i].num > have_gold) {//不够钱
            // var str = "<span style='color:#E92727'>"+have_gold+"</span><span style='color:#7D4815'>/"+good_list[i].num+"</span>";
            var str = "" + have_gold + "/" + good_list[i].num + "";
            confirm_fun = function () {
              tipController.getInstance().close();
            }
            console.log('不够钱', confirm_fun);
          } else {
            console.log('无法升级')
            // 				var str = "<span style='color:#7D4815'>"+have_gold+"</span><span style='color:#7D4815'>/"+good_list[i].num+"</span>";
            var str = "" + have_gold + "/" + good_list[i].num + "";
            var self = this;
            confirm_fun = function () {
              this.warehouseUpgrade();
              tipController.getInstance().close();
            }.bind(this);
          }
        }
      }
      var cancel_fun = function () {
        tipController.getInstance().close();
      }
      // this.ui.upgrade_btn.on(Laya.Event.CLICK, this, this.showGoldTip, ['仓库升级', str, '确定', '取消', confirm_fun, cancel_fun]);
    }
  }

  /**
   * 金币弹窗
   */
  private showGoldTip(title: string, content_txt: string, confirm_txt: string, cancel_txt: string, confirm_fun: Function, cancel_fun: Function) {
    Laya.stage.event(GAMEEVENT.GOLDTIP, [title, content_txt, confirm_txt, cancel_txt, confirm_fun, cancel_fun]);
  }
  /**
   * 获取仓库信息
   */
  public store_info() {
    // let tmp_http = net.httpJson.getInstance();
    // let tmp_data = {
    // 	'a':"store_info",
    // 	'm':"store",
    // 	'd':{},
    // 	'code':1
    // };
    // // console.log("发送websocket数据",tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    Laya.stage.event(NETWORKEVENT.STOREINFOBAK);
  }

  /**
   * 展示仓库的信息
   */
  public initWarehouseGoodList() {
    var data = dataGlobal.getInstance().userGoodInfo;//查询仓库的信息

    // this.ui.good_list.removeChildren();
    if (data) {
      var isAdd = false;
      for (var i in data) {
        //获取物品的信息
        var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[data[i].id];

        if (this._type == 'all') {
          isAdd = true;
        } else if (this._type == 'flower' && good_info.type == 6) {//花卉
          isAdd = true;

        } else if (this._type == 'goods' && good_info.type == 5) {//商品
          isAdd = true;
        }
        if (isAdd && Math.floor(data[i].num) > 0) {
          this.creator_good_item(data[i].id, data[i].num);
        }
        isAdd = false;
      }
    }
  }
  /**
   * 创建图标
   * @param id 商品ID
   * @param num 商品图标
   */
  private creator_good_item(id, num) {}
  // private creator_good_item(id, num) {

  //   var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
  //   // //获取物品的信息
  //   var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[id];
  //   var good_item = new warehouseItem();
    
  //   var gicon = good_item.gicon;
  //   var gnum = good_item.gnum;
  //   //todo
  //   good_item.x = ((this.ui.n10.width-good_item.width*3)/4)*(this.ui.good_list._children.length+1)+(good_item.width*this.ui.good_list._children.length)
  //   if (this.ui.good_list._children.length<= 3 ) {
  //     good_item.y = 30
  //   }
  //   let index = good_info.pic.lastIndexOf("/")
  //   var _skin = good_info.pic.substring(index + 1, good_info.pic.length)
  //   gicon.graphics.drawTexture(Laya.loader.getRes("main/" + _skin + ".png"));
  //   var isNum = num - Math.floor(data.num3)
  //   if (isNum > 0) {//需要放两格
  //     gnum.text = data.num3;
  //     this.ui.good_list.addChild(good_item);
  //     this.creator_good_item(id, isNum);
  //   } else {
  //     gnum.text = num;
  //     this.ui.good_list.addChild(good_item);
  //   }
  //   console.log( this.ui.good_list)
  //   good_item.on(Laya.Event.CLICK, this, this.showSellTip, [id]);
  // }

  /**
   * 切换选项
   * str:切换的选项卡（all，flower，goods）
   */
  private switchItem(str) {
    this._type = str;
    //先初始化各个选项
    // this.ui.item_all.skin = 'warehouse/btn_biaoqian2.png';
    // this.ui.item_flower.skin = 'warehouse/btn_biaoqian2.png';
    // this.ui.item_good.skin = 'warehouse/btn_biaoqian2.png';
    // this.ui.item_all.labelColors = '#7D4815';
    // this.ui.item_flower.labelColors = '#7D4815';
    // this.ui.item_good.labelColors = '#7D4815';
    // this.ui.item_all_biao.visible = false;
    // this.ui.item_flower_biao.visible = false;
    // this.ui.item_good_biao.visible = false;
    // if (this._type == 'all') {
    //   this.ui.item_all.skin = 'warehouse/btn_biaoqian1.png';
    //   this.ui.item_all.labelColors = '#fff';
    //   this.ui.item_all_biao.visible = true;
    // } else if (this._type == 'flower') {//花卉
    //   this.ui.item_flower.skin = 'warehouse/btn_biaoqian1.png';
    //   this.ui.item_flower.labelColors = '#fff';
    //   this.ui.item_flower_biao.visible = true;
    // } else if (this._type == 'goods') {//商品
    //   this.ui.item_good.skin = 'warehouse/btn_biaoqian1.png';
    //   this.ui.item_good.labelColors = '#fff';
    //   this.ui.item_good_biao.visible = true;
    // }
  }
  /**
   * 仓库升级
   */
  private warehouseUpgrade() {
    // var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    // let tmp_http = net.httpJson.getInstance();
    // let tmp_data = {
    // 	'a':"store_up_gread",
    // 	'm':"store",
    // 	'd':{
    // 		'store_id':data.store_id
    // 	},
    // 	'code':1
    // };
    // // console.log("发送websocket数据",tmp_data);
    // tmp_http.httpPost(CONST.LOGIN_URL,tmp_data);
    //  Laya.stage.event(NETWORKEVENT.STOREUPGRADEBAK);
  }
  /**
   * 出售框
   */
  private showSellTip(id: string) {
    warehouseController.getInstance().showSellTip(id);
  }

}	
