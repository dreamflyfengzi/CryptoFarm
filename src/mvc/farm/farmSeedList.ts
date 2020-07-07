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
export default class farmSeedList extends ui.farm.seedListUI {
  constructor() {
    super()
  }
  private _seedListScene: Laya.Sprite;//列表的组件 列表本页面
  private _nowScene: Laya.Sprite;//列表的组件 列表本页面
  private _seedListArray: Array<any>;//列表的数组
  private _fatListArray: Array<any>;//列表的数组
  private _seed_list: Laya.List; //列表本表
  public init() {
    this._seedListScene = this;
    this._seed_list = this.seed_list;
    // this._seed_list.repeatX = 5;
    // this._seed_list.repeatX = 1;
    this._seed_list.hScrollBarSkin = "";
    this._seedListScene.visible = false;
    var _nowScene = this._seedListScene;
    // return this._seedListScene;
    return _nowScene
  }

  // 虚拟列表渲染调用的函数
  // private RenderListItem(index: number, obj: fairygui.GObject) {
  //   console.log(index, obj)
  // }

  // 设置一下种子（data = {'seed_data':种子信息,'fat_data':肥料信息}）
  public addSeedListItem(data) {
    //添加肥料选项
    var fat_data = data.fat_data;
    this.addFertilizerItem(fat_data);
    // 添加种子选项
    var seed_data = data.seed_data;
    this.addSeedItem(seed_data);
  }
  //设置施肥信息
  public setSeedListItem() {
    this.setFatItem();//设置施肥信息
    this.setSeedItem();//设置种子信息
  }
  //添加种子选项
  private addSeedItem(data) {
    this._seedListArray = [];
    for (var i in data) {
      this._seedListArray.push(data[i])
    }
    this._seed_list.array = this._seedListArray;
  }
  //设置种子的信息
  public setSeedItem() {
    var grade = dataGlobal.getInstance().userInfo.grade;
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    //获取种子列表信息
    var seed_arr = farmController.getInstance().model.seedData;

    let dataSource = [];
    for (var i in seed_arr) {
      let data = null;
      if (grade >= seed_arr[i].grade2 && grade <= seed_arr[i].grade3) {
        //可以解锁
        if (have_gold >= seed_arr[i].gold) {//够钱
          data = {
            suo_div: { visible: false },
            seep_pic: {
              skin: "farm/" + seed_arr[i].id + "_seed.png"
            },
            gold_num: {
              text: seed_arr[i].gold,
              color: "#EDFF24"
            },
          }
        } else {//不够钱
          data = {
            suo_div: { visible: false },
            seep_pic: {
              skin: "farm/" + seed_arr[i].id + "_seed.png"
            },
            gold_num: {
              text: seed_arr[i].gold,
              color: "#FF3E24"
            },
          }
        }
      } else {//不可以解锁
        data = {
          suo_div: { visible: true },
          seep_pic: {
            skin: "farm/" + seed_arr[i].id + "_seed.png"
          },
          gold_num: {
            text: seed_arr[i].gold,
            color: "#274200"
          },
        }
      }
      dataSource.push(data)
      // this.initSeedItem(_seedItem);
      //   _seedItem.off(Laya.Event.CLICK, this, this.onClick);

    }
    this._seed_list.dataSource = dataSource;
    this._seed_list.selectEnable = true;
    this._seed_list.selectHandler = new Laya.Handler(this, this.itemSelectHandler, null, false)
    // console.log(this._seed_list.dataSource)
    this._seedListScene.visible = true;
  }
  //点击种子列表项
  private itemSelectHandler(index: number) {
    console.log(index)
    console.log(this._seed_list.dataSource);
    // return 
    var grade = dataGlobal.getInstance().userInfo.grade;
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    //获取种子列表信息
    var seed_arr = farmController.getInstance().model.seedData;
    console.log(index)
    if (grade >= seed_arr[index].grade2 && grade <= seed_arr[index].grade3) {
      //可以解锁
      if (have_gold >= seed_arr[index].gold) {//够钱
        this.onClick('buy', { 'id': seed_arr[index].id })
        // _seedItem.scene.gold.color = '#EDFF24';
        // _seedItem.on(Laya.Event.CLICK, this, this.onClick, ['buy', { 'id': seed_arr[i].id }]);
      } else {//不够钱
        console.log('不够了')
        this.onClick('noMoney', { 'id': seed_arr[index].id })
        // _seedItem.scene.gold.color = '#FF3E24';
        // _seedItem.on(Laya.Event.CLICK, this, this.onClick, ['noMoney', { 'gold': seed_arr[i].gold }]);
      }
    } else {
      //不可以解锁
      console.log('取法解锁')
      // _seedItem.suo_div.visible = true;
      // _seedItem.scene.suo_div.visible = true;
      this.onClick('lock', { 'id': seed_arr[index].id })
      // _seedItem.scene.gold.color = '#274200';
      // _seedItem.on(Laya.Event.CLICK, this, this.onClick, ['lock', { 'grade': seed_arr[i].grade2 }]);
    }
  }
  //点击肥料列表
  private fatItemSelectHandler(index: number) {
    console.log('fatItemSelectHandler', index)
  }
  //先初始化层
  private initSeedItem(itemObj) {
    itemObj.suo_div.visible = false;
    itemObj.gold.color = '#EDFF24';
  }
  /**
   * 添加施肥按钮
   */
  private addFertilizerItem(data) {
    this._fatListArray = [];
    for (var i in data) {
      this._fatListArray.push(data[i])
    }
    this._seed_list.array = this._fatListArray;
  }
  /**
   * 设置施肥信息
   */
  private setFatItem() {
    var grade = dataGlobal.getInstance().userInfo.grade;//用户等级
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币
    var fat_arr = farmController.getInstance().model.fatData;//获取肥料信息
    let dataSource = [];
    for (var i in fat_arr) {
      let data = null;
      if (have_gold >= fat_arr[i].num) {//够钱
        data = {
          suo_div: { visible: true },
          seep_pic: {
            skin: fat_arr[i].pic + ".png"
          },
          gold_num: {
            text: fat_arr[i].num3,
            color: "#EDFF24"
          },
        }
      } else {//不够钱
        data = {
          suo_div: { visible: false },
          seep_pic: {
            skin: fat_arr[i].pic + ".png"
          },
          gold_num: {
            text: fat_arr[i].num3,
            color: "#FF3E24"
          },
        }
      }
      dataSource.push(data)
    }
    this._seed_list.dataSource = dataSource;
    this._seed_list.selectEnable = true;
    // this._seed_list.selectedItem
    this._seed_list.selectHandler = new Laya.Handler(this, this.fatItemSelectHandler, null, false)
    // this._seed_list.on(Laya.Event.CLICK,this,this.fatItemSelectHandler)
    // this._seed_list.getChildByName('btnBuyProps').on(Laya.Event.CLICK, this, function () {
    //   // this.event(ShopLimitTimeView.PROPS_ID, data.shop_list[index].id)
    //   console.log('点击')
    // })
    // console.log(this._seed_list.dataSource)
    this._seedListScene.visible = true;
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
      console.log("等级够了，钱也够")
      var landId = farmController.getInstance().model.landId;
      this.onPlant(landId, arr.id);
    } else if (itemStatic == 'noMoney') {//等级够了，钱不够
      console.log("等级够了，钱不够")
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['种植该种子需要' + arr.gold + '金币', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
    } else if (itemStatic == 'lock') {//等级不够
      console.log("等级不够")
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['种植该种子需要' + arr.grade + '级', '确定', '取消', function () {
        console.log('tanchuang')
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
    // //试着进行websocke请求
    // let tmp_websocket = net.webSocketJson.getInstance();
    // let tmp_data = {
    //     'a':"init_plant_flower",
    //     'm':"init",
    //     'd':{
    //         'ff_id':landId,
    //         'seed_num':id
    //     },
    //     'code':1
    // };
    // console.log("发送websocket数据",tmp_data);
    // tmp_websocket.sendMessage(tmp_data);
    var list = {
      "htid": landId,
      "hhid": id
    }
    Laya.stage.event(NETWORKEVENT.FARMINITPLANTFLOWER, list);
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
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['该田已经施过肥了', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
    }
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;
    if (have_gold < data.num) {
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['施肥种子需要' + data.num + '金币', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
      return;
    }
    // //试着进行websocke请求
    // let tmp_websocket = net.webSocketJson.getInstance();
    // let tmp_data = {
    //   'a': "init_flower_fertilize",
    //   'm': "init",
    //   'd': {
    //     'ff_id': landId,
    //     'fat_id': data.id
    //   },
    //   'code': 1
    // };
    // console.log("发送websocket数据", tmp_data);
    // tmp_websocket.sendMessage(tmp_data);
    Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFERTILIZE);
  }


}
