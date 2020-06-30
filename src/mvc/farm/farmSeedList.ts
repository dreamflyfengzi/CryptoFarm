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
  private _seedListArray: Array<any>;//列表的数组
  private _seed_list: Laya.List; //列表本表
  public init() {
    this._seedListScene = this;
    this._seed_list = this.seed_list;
    // this._seed_list.repeatX = 5;
    // this._seed_list.repeatX = 1;
    this._seed_list.hScrollBarSkin = "";
    this._seedListScene.visible = false;
    return this._seedListScene;
  }

  // 虚拟列表渲染调用的函数
  // private RenderListItem(index: number, obj: fairygui.GObject) {
  //   console.log(index, obj)
  // }

  // 设置一下种子（data = {'seed_data':种子信息,'fat_data':肥料信息}）
  public addSeedListItem(data) {
    //添加种子选项
    // var seed_data = data.seed_data;
    // var seed_data = data;
    // this.addSeedItem(seed_data);
    // //添加肥料选项
    // var fat_data = data.fat_data;
    // this.addFertilizerItem(fat_data);
  }
  //设置施肥信息
  public setSeedListItem() {
    this.setSeedItem();//设置种子信息
    // this.setFatItem();//设置施肥信息
  }
  //添加种子选项
  private addSeedItem(data) {
    this._seedListArray = [];
    for (var i in data) {
      this._seedListArray.push(data[i])
      // var seep_pic: Laya.Image = this._seed_list;
      // var _seedItem = new seedItem();
      // _seedItem.name = 'seed_' + data[i].id;
      // var ntn = parseInt(data[i].id.replace(/[^0-9]/ig, ""));

      // _seedItem.x = (this._seed_list.width / 6) * (ntn - 2)
      // _seedItem.y = (this._seed_list.height - _seedItem.height) / 2 // todo 种子的坐标
      // _seedItem.gold.text = data[i].gold
      // _seedItem.seep_pic.graphics.drawTexture(Laya.loader.getRes("farm/" + data[i].id + "_seed.png"))
      // _seedItem.getChild('seep_pic').asLoader.url = data[i].pic;
      // _seedItem.getChild('gold').asTextField.text = data[i].gold;
      // this.initSeedItem(_seedItem);
      // this._seed_list.addChild(_seedItem);
    }
    this._seed_list.array = this._seedListArray;

    console.log(this._seed_list.array, '------------------------')

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
    console.log(this._seed_list.dataSource)
    this._seedListScene.visible = true;
  }
  //点击列表项
  private itemSelectHandler(index: number) {
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

  //先初始化层
  private initSeedItem(itemObj) {
    itemObj.suo_div.visible = false;
    itemObj.gold.color = '#EDFF24';
    // itemObj.getChild('suo_div').visible = false;
    // itemObj.getChild('gold').asTextField.color = '#EDFF24';
  }
  /**
   * 添加施肥按钮
   */
  private addFertilizerItem(data) {
    for (var i in data) {
      // var _seedItem = fairygui.UIPackage.createObject('farm','item').asCom;
      // var _seedItem = this._seedItem; //
      // _seedItem.getChild('suo_div').visible = false;
      // _seedItem.name = 'fat_'+data[i].id;
      // _seedItem.getChild('seep_pic').asLoader.url = data[i].pic;
      // _seedItem.getChild('gold').asTextField.text = data[i].num;
      // var have_gold = dataGlobal.getInstance().userInfo.have_gold;
      // if(have_gold >= data[i].num){//够钱
      //     _seedItem.getChild('gold').asTextField.color = '#EDFF24';
      // }else{//不够钱
      //     _seedItem.getChild('gold').asTextField.color = '#FF3E24';
      // }
      // _seedItem.on(Laya.Event.CLICK,this,this.onFertilizer,[{'id':data[i].id,'num':data[i].num}]);
      // this._seed_list.addChild(_seedItem);
    }

  }
  /**
   * 设置施肥信息
   */
  private setFatItem() {
    var grade = dataGlobal.getInstance().userInfo.grade;//用户等级
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币
    var fat_arr = farmController.getInstance().model.fatData;//获取肥料信息
    for (var i in fat_arr) {
      // var _seedItem = this._seed_list.getChild('fat_'+fat_arr[i].id).asCom;
      // _seedItem.getChild('suo_div').visible = false;
      //  if(have_gold >= fat_arr[i].num){//够钱
      //     _seedItem.getChild('gold').asTextField.color = '#EDFF24';
      // }else{//不够钱
      //     _seedItem.getChild('gold').asTextField.color = '#FF3E24';
      // }
    }
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
