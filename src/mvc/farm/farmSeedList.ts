// /*
// * 种子的类
// */
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import farmController from './farmController'
import seedItem from './seedItem'
import GAMEEVENT from '../event/GAMEEVENT'
import NETWORKEVENT from '../event/NETWORKEVENT'
import tipController from '../baseView/public/tip/tipController'
import webSocketJson from '../../net/webSocketJson'
import dataJson from '../resconfig/dataJson'
import httpJson from '../../net/httpJson'
export default class farmSeedList extends ui.farm.seedListUI {
  constructor() {
    super()
  }
  private _seedListScene: Laya.Sprite;//列表的组件 列表本页面
  private _seed_list: Laya.List; //列表本表
  private _dataSeedList: Array<any>; //列表种子
  private _dataFertilizer: Array<any>; //列表化肥
  public init() {
    this._seedListScene = this;
    this._seed_list = this.seed_list;
    this._seed_list.repeatY = 1;
    this._seed_list.hScrollBarSkin = "";
    this._seed_list.visible = false
    this._seedListScene.visible = false;
    var _nowScene = this._seedListScene;

    return _nowScene
  }

  public addSeedListItem(data) {
    this.addSeedItem(data.seed_data);
    this.addFertilizerItem(data.fat_data);
  }
  //添加种子选项
  private addSeedItem(data) {
    this._dataSeedList = []
    for (var i in data) {
      let index = data[i].pic.lastIndexOf("/");
      var _skin = data[i].pic.substring(index + 1, data[i].pic.length);

      var _seedItem = {
        id: 'seed_' + data[i].id,
        name: data[i].id,
        index: 0,
        seep_pic: {
          skin: 'main/' + _skin + '.png'
        },
        gold_num: {
          text: data[i].gold,
          color: ""
        },
        suo_div: {
          visible: true
        },
        visible: false
      };
      this.initSeedItem(_seedItem);
      this._dataSeedList.push(_seedItem)
    }
  }
  /**
   * 添加施肥按钮
   */
  private addFertilizerItem(data) {
    this._dataFertilizer = [];
    for (var i in data) {
      let index = data[i].pic.lastIndexOf("/");
      var _skin = data[i].pic.substring(index + 1, data[i].pic.length);
      var _seedItem = {
        id: 'fat_' + data[i].id,
        name: data[i].id,
        index: 0,
        seep_pic: {
          skin: 'farm/' + _skin + '.png'
        },
        gold_num: {
          text: data[i].num,
          color: ""
        },
        suo_div: {
          visible: false
        },
        visible: false
      };
      var have_gold = dataGlobal.getInstance().userInfo.have_gold;
      if (have_gold >= data[i].num) {//够钱
        _seedItem.gold_num.color = '#EDFF24';
      } else {//不够钱
        _seedItem.gold_num.color = '#FF3E24';
      }
      this._dataFertilizer.push(_seedItem)
    }


  }
  //先初始化层
  private initSeedItem(itemObj) {
    itemObj.suo_div.visible = false;
    itemObj.gold_num.color = '#EDFF24';
  }
  //--1--设置信息
  public setSeedListItem() {
    if (this._seed_list.renderHandler) {
      this._seed_list.renderHandler = null;
    }
    if (farmController.getInstance().model.clickLandStatic == 'plant') {
      this.setSeedItem();//设置种子信息
    }
    if (farmController.getInstance().model.clickLandStatic == 'fertilizer') {
      this.setFatItem();//设置施肥信息
    }
  }
  /**
   * 2设置花种信息
   */
  public setSeedItem() {
    this._seed_list.dataSource = this._dataSeedList;
    var grade = dataGlobal.getInstance().userInfo.grade;
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    //获取种子列表信息
    var seed_arr = farmController.getInstance().model.seedData;
    var isshow = true;//是否显示下一级的种子
    for (var i in seed_arr) {
      //查询一下种子的信息
      var seed_info = dataJson.getInstance().GET_SYS_FLOWER_PLANTS()[seed_arr[i].id];
      for (var z in this._seed_list.dataSource) {
        if (this._seed_list.dataSource[z].name === seed_info[1].id) {
          var _seedItem = this._seed_list.dataSource[z];
          _seedItem.index = Number(z);
          var _index = Number(z);
        }
      }
      this.initSeedItem(_seedItem);
      if (grade >= seed_arr[i].grade2 && grade <= seed_arr[i].grade3) {
        // 可以解锁
        if (have_gold >= seed_arr[i].gold) {//够钱
          _seedItem.gold_num.color = '#EDFF24';
        } else {//不够钱
          _seedItem.gold_num.color = '#FF3E24';
        }
        _seedItem.visible = true;
      } else {//不可以解锁
        if (Math.floor(seed_info[1].grade2) <= Math.floor(grade) + 1 && isshow) {//下一级的种子并且是第一个种子
          isshow = false;
          _seedItem.visible = true;
        } else {//超过下一级的种子
          // _seedItem.visible = false;
          _seedItem.visible = true;
        }
        _seedItem.suo_div.visible = true;
        _seedItem.gold_num.color = '#274200';

      }


    }
    this._seed_list.renderHandler = null;
    this._seed_list.renderHandler = new Laya.Handler(this, this.itemSelectHandler, null, false)
    this._seed_list.visible = true;
    this._seedListScene.visible = true;
  }


  /**
   * 2设置施肥信息
   */
  private setFatItem() {
    this._seed_list.dataSource = this._dataFertilizer;
    var grade = dataGlobal.getInstance().userInfo.grade;//用户等级
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币
    var fat_arr = farmController.getInstance().model.fatData;//获取肥料信息
    for (var i in fat_arr) {
      //查询一下肥料的信息
      var fat_info = dataJson.getInstance().GET_SYS_FLOWER_COMPOSTED()[fat_arr[i].id];

      for (var z in this._seed_list.dataSource) {
        if (this._seed_list.dataSource[z].name === fat_info[1].id) {
          var _seedItem = this._seed_list.dataSource[z];
          _seedItem.index = Number(z);
        }
      }
      _seedItem.suo_div.visible = false;
      if (have_gold >= fat_arr[i].num) {//够钱
        _seedItem.gold_num.color = '#EDFF24';
        _seedItem.visible = true
      } else {//不够钱
        _seedItem.gold_num.color = '#FF3E24';
        _seedItem.visible = true
      }
      _seedItem.visible = true
    }
    this._seed_list.visible = true;
    this._seedListScene.visible = true;
    this._seed_list.renderHandler = null;
    this._seed_list.renderHandler = new Laya.Handler(this, this.itemFatSelectHandler, [fat_arr], false)
  }



  //点击种子列表项
  private itemSelectHandler(cell, index) {
    cell.off(Laya.Event.CLICK, this, this.onClick)
    var grade = dataGlobal.getInstance().userInfo.grade;
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    //获取种子列表信息
    var seed_arr = farmController.getInstance().model.seedData;
    if (grade >= seed_arr[index].grade2 && grade <= seed_arr[index].grade3) {
      //可以解锁
      if (have_gold >= seed_arr[index].gold) {//够钱
        cell.on(Laya.Event.CLICK, this, this.onClick, ['buy', { 'id': seed_arr[index].id }])
      } else {//不够钱
        cell.on(Laya.Event.CLICK, this, this.onClick, ['noMoney', { 'gold': seed_arr[index].gold }])
      }
    } else {
      //不可以解锁
      cell.on(Laya.Event.CLICK, this, this.onClick, ['lock', { 'grade': seed_arr[index].grade2, 'name': seed_arr[index].name }])
    }
  }

  //点击肥料列表项
  private itemFatSelectHandler(arr: any, cell, index) {
    cell.off(Laya.Event.CLICK, this, this.onClick)
    cell.off(Laya.Event.CLICK, this, this.onFertilizer)
    cell.on(Laya.Event.CLICK, this, this.onFertilizer, [{ 'id': arr[index].id, 'num': arr[index].num }]);
  }



  /**
   * 隐藏
   */
  public hide() {
    this._seedListScene.visible = false;
  }
  /**
   * 点击选项
   * itemStatic:种子的状态
   * arr:种子的数据（id：种子的id，gold:所需的金币，grade:所需要的级别）
   */

  private onClick(itemStatic: string, arr: any) {
    tipController.getInstance();
    if (itemStatic == 'buy') {//等级够了，钱也够
      var landId = farmController.getInstance().model.landId;
      this.onPlant(landId, arr.id);
    } else if (itemStatic == 'noMoney') {//等级够了，钱不够
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['种植该种子需要' + arr.gold + '金币', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
    } else if (itemStatic == 'lock') {//等级不够
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['种植该种子需要' + arr.grade + '级', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
    }
  }
  /**
   * 种植操作
   * @param landId ：种植田的ID
   * @param id ：种子的ID
   */
  private onPlant(landId, id) {
    //判断一下田是否有种了，如果有的话就不能再种
    var landData = dataGlobal.getInstance().farmInfo[landId];
    if (landData.seed_data.id) {
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['该田已经种植了', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
      return;
    }
    //试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "init_plant_flower",
      'm': "init",
      'd': {
        'ff_id': landId,
        'seed_num': id
      },
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);
    // var list = {
    //   "htid": landId,
    //   "hhid": id
    // }
    // Laya.stage.event(NETWORKEVENT.FARMINITPLANTFLOWER, list);
  }
  /**
   * 点击施肥
   */
  private onFertilizer(data) {
    var landId = farmController.getInstance().model.landId;
    var landData = dataGlobal.getInstance().farmInfo[landId];
    //判断是否可以施肥
    if (landData.fat_time > 0) {
      //不可以施肥
      Laya.stage.event(GAMEEVENT.TXTTIP, ['该花田已施肥']);
      return;
    }
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    if (have_gold < data.num) {
      Laya.stage.event(GAMEEVENT.TXTTIP, ['施肥种子需要' + data.num + '宝石']);
      return;
    }
    //试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "init_flower_fertilize",
      'm': "init",
      'd': {
        'ff_id': landId,
        'fat_id': data.id
      },
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);
    // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFERTILIZE);
  }
}
