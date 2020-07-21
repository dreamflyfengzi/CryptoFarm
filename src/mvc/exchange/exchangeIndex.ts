/**
* name 
*/
import { ui } from '../../ui/layaMaxUI'
import baseWindow from '../baseView/component/baseWindow'
import screen from './screen'
import exchangeController from './exchangeController'
import tmp_http from '../../net/httpJson'
import dataJson from '../resconfig/dataJson'
import dataGlobal from '../resconfig/dataGlobal'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import globalFun from '../resconfig/globalFun'
import httpJson from '../../net/httpJson'
import CONST from '../../const/CONST'
// import net from '../event/NETWORKEVENT'
export default class exchangeIndex extends baseWindow {

  private _exchangeIndex: Laya.Sprite;//顶层对象
  private _screenView: screen;
  private _exchangeItem: any;//任务列表子对象
  private _type: string;//当前选项的类型
  private _my_list: Laya.List;
  private _market_list: Laya.List;
  private _material_btn: Laya.Button;//我的按钮
  private _market_btn: Laya.Button;//市场按钮
  private _good_list: Laya.List;//物品列表
  // private _gold_val: fairygui.GTextField;//下面金币
  // private _exp_val: fairygui.GTextField;//下面经验
  private _time: any;//倒计时时间
  private _flagMarket: false;
  private _flagMy: false;
  constructor() {
    super();
    this._exchangeItem = {}
  }
  /**显示订单弹窗 */
  public onShowexchange() {
    this._exchangeIndex = new ui.exchange.exchangeUI();
    this._exchangeIndex.name = 'exchangeIndex';
    this._exchangeIndex.pivot(this._exchangeIndex.width / 2, this._exchangeIndex.height / 2);//设置轴心
    this.addChild(this._exchangeIndex);
    this.tweenShow();
    //初始化参数
    this._my_list = this._exchangeIndex.scene.getChildByName('my_list'); //我的物品列表
    // this._my_list.visible = false;
    this._market_list = this._exchangeIndex.scene.getChildByName('market_list'); //市场物品列表
    // this._market_list.visible = false;
    this._material_btn = this._exchangeIndex.scene.getChildByName('material_btn'); //我的材料按钮

    this._market_btn = this._exchangeIndex.scene.getChildByName('market_btn'); //我的材料按钮
    this._exchangeIndex.scene.close_btn.on(Laya.Event.CLICK, this, this.closeexchange);
    this._exchangeIndex.scene.screen_btn.on(Laya.Event.CLICK, this, this.goScreen);
     
    //初始化选项
    this.switchItem('market');
    //获取用户的物品数据
    this.store_info();
    // 绑定切换事件
    this.changeSceneList()
  }
  /**
   * 两个列表的切换
   */
  public changeSceneList() {
    this._market_btn.on(Laya.Event.CLICK, this, function () {
      if (this._type != 'market') {
        this.switchItem('market');
      }
    }.bind(this));

    this._material_btn.on(Laya.Event.CLICK, this, function () {
      if (this._type != 'material') {
        this.switchItem('material');
      }
    }.bind(this));
  }

  /**
		 * 获取列表信息
		 */
  public store_info() {
    if (this._type == 'market' ) {
       Laya.stage.event(NETWORKEVENT.MARKETINFOBAK);
    }
    let tmp_http = httpJson.getInstance();
    let tmp_data = {
      'a': "store_info",
      'm': "store",
      'd': {},
      'code': 1
    };
    tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    // Laya.stage.event(NETWORKEVENT.STOREINFOBAK);
  }
  /**
   * 初始化市场列表信息
   * @param str 
   */
  public initMarketGoodList() {
    var data = dataGlobal.getInstance().marketInfo;//查询仓库的信息
    var _data_info = data.data_info;
    this._market_list.vScrollBarSkin = ''
    // this._market_list.dataSource = [];
    for (var i in _data_info) {
      var dataItem = {
        id:_data_info[i].good_id,
        detailed:{
          skin:"factory/pic_"+_data_info[i].good_id+".png"
        },
        order_gold_val:{
          text:_data_info[i].price+'ONES'
        }
      }
      this._market_list.addItem(dataItem)
      this._market_list.visible = true;
      this.bindClickMarketItem(this._market_list.getCell(Number(i)),Number(i))
    }
    // this._market_list.cells
    // this._market_list.renderHandler = new Laya.Handler(this, this.bindClickMarketItem)
  }

  /**
   * 初始化我的列表信息
   * @param str 
   */
  public initMyGoodList() {
    var data = dataGlobal.getInstance().marketInfo;//查询仓库的信息
    var _data_info = data.data_info;  
      this._market_list.vScrollBarSkin = ''
    // this._my_list.dataSource = [];
    for (var i in _data_info) {
      var dataItem = {
        id:_data_info[i].good_id,
        icon:{
          skin:"factory/pic_"+_data_info[i].good_id+".png"
        },
        order_gold_val:{
          text:_data_info[i].good_name
        }
      }
      this._my_list.addItem(dataItem)
      this._my_list.visible = true;
      this.bindClickMyItem(this._my_list.getCell(Number(i)),Number(i))
    }
    // this._market_list.cells
    // this._market_list.renderHandler = new Laya.Handler(this, this.bindClickMarketItem)
  }
  /**
   * 绑定点击事件
   * @param 单个选项卡 
   */
  private bindClickMarketItem(cell,index) {
    if (this._flagMarket) {
      return
    }
    cell.on(Laya.Event.CLICK,this,function(){
      this._flagMarket = true
      this.showBuyTip(this._market_list.getItem(index).id)
    }.bind(this))
    // item.off(Laya.Event.CLICK, this, this.showSellTip(this._market_list.getItem(index).id))
    // item.on(Laya.Event.CLICK, this, this.showSellTip(this._market_list.getItem(index).id));
  }

   /**
   * 绑定点击事件
   * @param 单个选项卡 
   */
  private bindClickMyItem(cell,index) {
    if (this._flagMy) {
      return
    }
    cell.on(Laya.Event.CLICK,this,function(){
      this._flagMy = true
      this.showSellTip(this._market_list.getItem(index).id)
 
    }.bind(this))
  }

  /**
	* 切换选项
	* str:切换的选项卡（market，material）
	*/
  private switchItem(str) {
    this._type = str;
    if (this._type == 'market') {
      this._material_btn.skin = 'main/btn_hui.png';
      this._market_btn.skin = 'main/btn_huang.png';
      this._my_list.visible = false;
      this._market_list.visible = true;
      this._exchangeIndex.scene.n5.text = '交易市场';
      this.initMarketGoodList();
    }
    if (this._type == 'material') {
      this._my_list.visible = true;
      this._market_list.visible = false;
      this._market_btn.skin = 'main/btn_hui.png';
      this._material_btn.skin = 'main/btn_huang.png';
      this._exchangeIndex.scene.n5.text = '我的材料'
      this.initMyGoodList();
    }
  }

  /**
   * 关闭按钮
   */
  public closeexchange() {
    // exchangeController.getInstance().model.clearexchangeTime();//清除掉定时器
    this.tweenHide();
  }

  /**
   * 购买
   */
  private showBuyTip(id: string) {
    // item.off(Laya.Event.CLICK, this, this.showSellTip(id))
    exchangeController.getInstance().showBuyTip(id);
  }
  
  
  /**
   * 出售
   */
  private showSellTip(id: string) {
    exchangeController.getInstance().showSellTip(id);
  }

  /**
   * 筛选
   */
  private goScreen (){
    if (this._screenView == null) {
      //初始化视图的类
      this._screenView = new screen;
    }
    this._screenView.onShow();
  }
}
