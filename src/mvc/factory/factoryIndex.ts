/**
* name 
*/

import { baseScene } from '../baseView/component/baseScene'
import { ui } from '../../ui/layaMaxUI'
import CONST from '../../const/CONST'
import factoryController from './factoryController'
import dataGlobal from '../resconfig/dataGlobal'
import dataJson from '../resconfig/dataJson'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import tipController from '../baseView/public/tip/tipController'
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
export default class factoryIndex extends baseScene {

  private _factory: Laya.Sprite;//顶层对象
  private _factory_div: Laya.List;//工厂组
  private downMouseY = 0;
  private offsetY = 0;
  private maxY = 0;
  private minY = -6312;

  constructor() {
    super();
    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown)
    Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp)
  }

  private mouseDown() {
    this.downMouseY = Laya.stage.mouseY
    console.log('鼠标按下', this.downMouseY)
    Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
    Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.mouseMoveOff)
  }

  private mouseMove() {
    let y = this.offsetY - (Laya.stage.mouseY - this.downMouseY)
    console.log('鼠标移动', y)
    this.moveMap(y)
  }

  private mouseUp() {
    Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
  }

  private mouseMoveOff() {
    Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
  }
  private moveMap(y) {
    this._factory.scene.bg.y = this._factory.scene.bg.y - y / 10
    if (this._factory.scene.bg.y < this.minY) {
      this._factory.scene.bg.y = this.minY
    }
    if (this._factory.scene.bg.y > this.maxY) {
      this._factory.scene.bg.y = this.maxY
    }
  }



  /**显示工厂场景(type:1.当前页面隐藏切换，2.当前页面去除切换 */
  public onShow(type) {
    if (this._factory == null) {
      this._factory = new ui.factory.factoryUI;

      // this.setScale(this._factory);
      this._factory.name = 'factory';
      //初始化信息
      //先获取用户的工厂信息
      this.get_factory_info();

    } else {
      //看看有没有需要打开的工厂，可能是从别的地方跳过来生产的
      this.isOpenFactoryInfo();
      this.showFactory();
    }

    // this.tweenAlphaAdd(this._factory.displayObject,this._factory.displayObject.name,type);
    this.tweenTranAdd(this._factory, this._factory.name, type, 'left');
  }
  //判断是否有需要打开的工厂
  private isOpenFactoryInfo() {
    var id = factoryController.getInstance().model._mf_id;
    var is_open = factoryController.getInstance().model._is_open;
    if (id && is_open) {
      //判断一下是否有开通这间工厂了，没有的话就不能进去
      var factoryInfo = dataGlobal.getInstance().factory;
      if (factoryInfo[id]) {
        this.onShowFactoryInfo(id);
      } else {
        Laya.stage.event(GAMEEVENT.TXTTIP, ['请先建造该工厂']);
      }
    }
    factoryController.getInstance().model._is_open = false;//帮用户打开过工厂就设置回来，不需要打开了
  }
  //获取用户的工厂信息
  private get_factory_info() {
    let tmp_http = httpJson.getInstance();
    let tmp_data = {
      'a': "send_factory",
      'm': "init",
      'd': {},
      'code': 1
    };
    console.log("发送http数据", tmp_data);
    tmp_http.httpPost(CONST.LOGIN_URL, tmp_data);
    // Laya.stage.event(NETWORKEVENT.SENDFACTORYBAK);
  }
  /**
	* 展示工厂界面的信息
	*/
  public showFactory() {
    //看看有没有需要打开的工厂，可能是从别的地方跳过来生产的
    this.isOpenFactoryInfo();
    //获取自己工厂信息
    var myData = dataGlobal.getInstance().factory;
    //获取配置表工厂的信息
    var data = dataJson.getInstance().GET_SYS_FACTORY_INFO();
    //玩家的等级
    var level = dataGlobal.getInstance().userInfo.grade;
    var num = 1;
    for (var id in data) {
      var factory_item = this._factory.scene.factory_div.cells[num - 1];//单个工厂
      var factory_div = factory_item.getChildByName('open_div');//解锁层
      var unlock_div = factory_item.getChildByName('unlock_div');//未解锁层
      factory_div.off(Laya.Event.CLICK, this, this.factory_good_save);
      factory_div.off(Laya.Event.CLICK, this, this.onShowFactoryInfo);
      unlock_div.off(Laya.Event.CLICK, this, this.factory_create);
      if (myData[id]) {//有信息的
        //如果是有信息的，证明已经购买了该工厂
        factory_div.visible = true;
        unlock_div.visible = false;
        var factory_icon = factory_div.getChildByName('factory_icon');//工厂ICON
        factory_icon.skin = data[id][myData[id].grade].pic + '.png';
        var factory_level = factory_div.getChildByName('factory_level');//工厂等级
        factory_level.text = myData[id].grade;

        // factory_div.touchable = true;
        var good_list_bgdi = factory_div.getChildByName('good_list_bgdi');//生产完成物品列表的背景下角
        var good_list_bg = factory_div.getChildByName('good_list_bg');//生产完成物品列表的背景
        var good_list = factory_div.getChildByName('good_list');//生产完成物品列表
        // //判断是否有生产完成的物品
        var succ_goods_num = myData[id].succ_goods.length;
        if (succ_goods_num > 0) {//工厂完成时点击
          //获取物品的列表
          var good_data = dataJson.getInstance().GET_SYS_FACTORY_GOOD();
          //显示生产成功的列表
          if (succ_goods_num > 3) {
            good_list_bg.width = succ_goods_num * 110 + (succ_goods_num + 1) * 10;
          }
          good_list.width = succ_goods_num * 110 + (succ_goods_num + 1) * 10;
          good_list_bgdi.visible = true;
          // 鼠标不可以穿透

          good_list_bg.visible = true;
          good_list.visible = true;
          var list_data = myData[id].succ_goods;
          //清除列表信息
          var _dataSource = []
          good_list.dataSource = [];
          for (var q in list_data) {
            var goodInfo = good_data[id][list_data[q].id];//工厂可生产物品的信息
            goodInfo = dataJson.getInstance().GET_SYS_GOOD_INFO()[goodInfo.id];//获取物品的详细信息

            let index = goodInfo.pic.lastIndexOf("/")
            var _skin = goodInfo.pic.substring(index + 1, goodInfo.pic.length)
            var imgLoader = {
              items: {
                skin: "factory/" + _skin + '.png'
              }
            };

            _dataSource.push(imgLoader)
            good_list.dataSource = _dataSource;

          }
          factory_div.on(Laya.Event.CLICK, this, this.factory_good_save, [id]);
          //展示完成的物品
        } else {
          //这里直接监听进入工厂生产页面
          good_list_bgdi.visible = false;
          good_list_bg.visible = false;
          good_list.visible = false;
          factory_div.on(Laya.Event.CLICK, this, this.onShowFactoryInfo, [id]);
        }
      } else {
        //如果没有该信息，那么就是没有购买的
        factory_div.visible = false;
        unlock_div.visible = true;
        var gold = unlock_div.getChildByName('gold');//需要的金币
        gold.text = data[id][1].unlocknum;
        var factory_name = unlock_div.getChildByName('factory_name');//工厂名字
        factory_name.text = data[id][1].name;
        var factory_info = unlock_div.getChildByName('factory_info');//详情
        var xian = unlock_div.getChildByName('xian');
        var tishi_icon = unlock_div.getChildByName('tishi_icon');
        //判断一下玩家的等级是否达到这个等级
        if (Math.floor(level) >= Math.floor(data[id][1].grade2)) {//玩家达到等级了，可以解锁
          factory_info.text = '点击建造';
          xian.skin = 'factory/pic_xian2.png';
          tishi_icon.visible = true;
          unlock_div.touchable = true;
          unlock_div.on(Laya.Event.CLICK, this, this.factory_create, [id]);
        } else {//玩家没有达到等级
          factory_info.text = data[id][1].grade2 + '级可解锁';
          xian.skin = 'factory/pic_xian1.png';
          tishi_icon.visible = false;
          unlock_div.touchable = true;
          unlock_div.on(Laya.Event.CLICK, this, this.factory_create, [id]);
        }
      }
      num++;

    }
    this._factory.scene.factory_div.visible = true;
  }
  /**
   * 建造工厂
   * @param id：工厂ID 
   */
  private factory_create(id: string) {

    this.factory_create_act(id); //暂时
    //获取用户的信息
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    var level = dataGlobal.getInstance().userInfo.grade;
    //获取工厂这个物品的信息
    var factory_info = dataJson.getInstance().GET_SYS_FACTORY_INFO()[id];
    var gold = factory_info[1].unlocknum;
    var grade2 = factory_info[1].grade2;
    tipController.getInstance()
    if (Math.floor(level) < Math.floor(grade2)) {
      Laya.stage.event(GAMEEVENT.TXTTIP, [grade2 + '级解锁']);
      return;
    }
    if (Math.floor(have_gold) < Math.floor(gold)) {
      Laya.stage.event(GAMEEVENT.TXTTIP, ['宝石不足']);
      return;
    }
    // Laya.stage.event(GAMEEVENT.TIPSKUAN, ['是否消耗' + gold + '宝石建造' + factory_info[1].name + '？', '确定', '取消', function () {
    //   this.factory_create_act(id);
    //   tipController.getInstance().close();
    // }.bind(this), function () {
    //   tipController.getInstance().close();
    // }]);
  }
  /**
   * 建造工厂
   * @param id：工厂ID 
   */
  private factory_create_act(id: string) {
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "factory_create",
      'm': "gzhq_factory",
      'd': {
        'mf_id': id
      },
      'code': 1
    };
    console.log("发送websocket数据", tmp_data);
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FACTORYCREATEBAK);

  }
  /**
   * 工厂生产产品完成后用户点击收获
   * @param id 工厂ID
   */
  public factory_good_save(id: string) {
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "factory_good_save",
      'm': "gzhq_factory",
      'd': {
        'mf_id': id
      },
      'code': 1
    };
    console.log("发送websocket数据", tmp_data);
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FACTORYGOODSAVEBAK);
  }
  /**
   * 进入工厂
   * @param id：工厂ID 
   */
  private onShowFactoryInfo(id: string) {
    //这里进入工厂
    factoryController.getInstance().onShowFactoryInfo(id);
  }
}
