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
  private _type: string;//当前选项的类型
  private _good_list: Laya.List;

  constructor() {
    super();
  }
  /**显示工厂场景(type:1.当前页面隐藏切换，2.当前页面去除切换 */
  public onShowWarehouse() {
    if (this._warehouse == null) {
      this._warehouse = new ui.warehouse.warehouseUI();
      // this.setScale(this._warehouse);
      this._warehouse.name = 'warehouse';
      this._warehouse.pivotX = 0.5 * this._warehouse.width;
      this._warehouse.pivotY = 0.5 * this._warehouse.height;
      this.addChild(this._warehouse);
    }
    this.tweenShow();
    this._warehouse.scene.item_all.on(Laya.Event.CLICK, this, function () {
      if (this._type != 'all') {
        this.switchItem('all');
        this.initWarehouseGoodList();
      }
    }.bind(this));
    this._warehouse.scene.item_flower.on(Laya.Event.CLICK, this, function () {
      if (this._type != 'flower') {
        this.switchItem('flower');
        this.initWarehouseGoodList();
      }
    }.bind(this));
    this._warehouse.scene.item_good.on(Laya.Event.CLICK, this, function () {
      if (this._type != 'goods') {
        this.switchItem('goods');
        this.initWarehouseGoodList();
      }
    }.bind(this));
    //初始化选项
    this.switchItem('all');
    //获取用户的物品数据
    this.store_info();
    this._warehouse.scene.close_btn.on(Laya.Event.CLICK, this, this.tweenHide);

  }
  /**
   * 设置仓库的基本信息
   */
  public initWarehouseInfo() {
    var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    console.log('仓库', data)
    // 'store_id'=>'仓库系统ID',
    // 'grade'=>'仓库等级',
    // 'num'=>'仓库总大小',
    // 'num2'=>'仓库已使用数量', num2/num , num3
    // 'num3'=>'每格的大小',
    // 'name'=>'仓库名称',
    // 'data_info'=>array(//要获取的物品信息
    //     array(
    //         'good_id'=>'物品ID',
    //         'pos'=>'仓库位置',
    //         'num'=>'物品数量',
    //     ),
    // )
    this._warehouse.scene.good_num.text = '容量：' + data.num2 + '/' + data.num;
    //判断是否可以升级
    var store_info = dataJson.getInstance().GET_SYS_STORE_INFO();
    console.log(data, store_info, store_info[Math.floor(data.grade) + 1])
    if (store_info[Math.floor(data.grade) + 1]) {
      this._warehouse.scene.upgrade_btn.visible = true;
      this.setUpdrageDiv();
    } else {
      //最高
      this._warehouse.scene.upgrade_btn.visible = false;
    }
  }
  /**
   * 设置升级按钮
   */
  public setUpdrageDiv() {
    console.log('设置升级按钮')
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//获取用户信息金币信息
    var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    this._warehouse.scene.upgrade_btn.off(Laya.Event.CLICK, this, this.showGoldTip);

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
      console.log(str)
      this._warehouse.scene.upgrade_btn.on(Laya.Event.CLICK, this, this.showGoldTip, ['仓库升级', str, '确定', '取消', confirm_fun, cancel_fun]);
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
    this._good_list = this._warehouse.scene.good_list;
    this._good_list.dataSource = []
    var _dataSource = []
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
        // this._good_list.dataSource = source;
        isAdd = false;
      }
    }

    // 添加点击事件
    // this._good_list.setItem(1,{}) //改变单个数据
    this._good_list.selectEnable = true;
    // this._good_list.selectHandler = 
    this._good_list.renderHandler = new Laya.Handler(this, this.itemSelectHandler, [data[i].id], false)
  }
  // 点击图标
  private itemSelectHandler(id, cell) {
    // var item = cell.getChildByName('gicon')
    cell.on(Laya.Event.CLICK, this, this.clickItem, [cell])

    // cell.on(Laya.Event.CLICK,this,)
    // this.showSellTip(this._good_list.array[index].gicon.skin)
    // console.log(this._good_list.getChildByName('gicon'))
    // console.log(cell.getChildByName('gicon'))
  }

  private clickItem(cell) {
    this.showSellTip(cell.dataSource.id)
  }
  /**
   * 创建图标 单个商品
   * @param id 商品ID
   * @param num 商品图标
   */
  private creator_good_item(id, num) {
    var data = dataGlobal.getInstance().warehouseInfo;//查询仓库的信息
    var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[id];

    let index = good_info.pic.lastIndexOf("/")
    var _skin = good_info.pic.substring(index + 1, good_info.pic.length)
    // gicon.graphics.drawTexture(Laya.loader.getRes("main/" + _skin + ".png"));
    var isNum = num - Math.floor(data.num3)
    if (isNum > 0) {//需要放两格
      var good_item = {
        gnum: {
          text: data.num3
        },
        gicon: {
          skin: "main/" + _skin + ".png"
        },
        id:id
      }

      //   _dataSource.push(good_item)
      this._good_list.addItem(good_item)
      this.creator_good_item(id, isNum);
    } else {
      var good_item = {
        gnum: {
          text: num,
        },
        gicon: {
          skin: "main/" + _skin + ".png"
        },
        id:id
      }
      //   // gnum.text = num;
      //   // this._warehouse.scene.good_list.add(good_item);
      //   _dataSource.push(good_item)
      this._good_list.addItem(good_item)
    }

    // console.log(this._warehouse.scene.good_list.dataSource)
    // // Laya.stage.event(NETWORKEVENT.SHOWSELLTIP,id);
    // good_item.on(Laya.Event.CLICK, this, this.showSellTip, [id]);
    // return _dataSource
  }


  /**
   * 切换选项
   * str:切换的选项卡（all，flower，goods）
   */
  private switchItem(str) {
    this._type = str;
    //先初始化各个选项
    this._warehouse.scene.item_all.skin = 'warehouse/btn_biaoqian2.png';
    this._warehouse.scene.item_flower.skin = 'warehouse/btn_biaoqian2.png';
    this._warehouse.scene.item_good.skin = 'warehouse/btn_biaoqian2.png';
    this._warehouse.scene.item_all.labelColors = '#7D4815';
    this._warehouse.scene.item_flower.labelColors = '#7D4815';
    this._warehouse.scene.item_good.labelColors = '#7D4815';
    this._warehouse.scene.item_all_biao.visible = false;
    this._warehouse.scene.item_flower_biao.visible = false;
    this._warehouse.scene.item_good_biao.visible = false;
    if (this._type == 'all') {
      this._warehouse.scene.item_all.skin = 'warehouse/btn_biaoqian1.png';
      this._warehouse.scene.item_all.labelColors = '#fff';
      this._warehouse.scene.item_all_biao.visible = true;
    } else if (this._type == 'flower') {//花卉
      this._warehouse.scene.item_flower.skin = 'warehouse/btn_biaoqian1.png';
      this._warehouse.scene.item_flower.labelColors = '#fff';
      this._warehouse.scene.item_flower_biao.visible = true;
    } else if (this._type == 'goods') {//商品
      this._warehouse.scene.item_good.skin = 'warehouse/btn_biaoqian1.png';
      this._warehouse.scene.item_good.labelColors = '#fff';
      this._warehouse.scene.item_good_biao.visible = true;
    }
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
    Laya.stage.event(NETWORKEVENT.STOREUPGRADEBAK);
  }
  /**
   * 出售框
   */
  private showSellTip(id: string) {
    warehouseController.getInstance().showSellTip(id);
  }
}	
