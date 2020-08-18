// /**
//  * 田的资源
//  */
import { ui } from '../../ui/layaMaxUI'
import dataGlobal from '../resconfig/dataGlobal'
import dataJson from '../resconfig/dataJson'
import farmController from './farmController'
import globalFun from '../resconfig/globalFun'
import NETWORKEVENT from '../event/NETWORKEVENT'
import GAMEEVENT from '../event/GAMEEVENT'
import tipController from '../baseView/public/tip/tipController'
import webSocketJson from '../../net/webSocketJson'
import httpJson from '../../net/httpJson'
export default class farmLand extends ui.farm.farmLandUI {
  // private _farmland:fairygui.GComponent;//整块田的组件
  private _farmland: Laya.Sprite;//整块田的组件
  public _farmlandObject: Laya.Sprite;//整块田的显示列表
  // private _land:fairygui.GLoader;//田
  private _land: Laya.Sprite;//田
  public land_static: string;//点击花田的状态
  public land_id: string;//花田的ID
  static _timer: Laya.Timer;//定时器对象

  constructor() {
    super();
  }
  public init(data) {
    this.land_id = data.ff_id;
    this.initLand();
    this._farmland = this;
    this._farmland.x = data.x;//设置x坐标
    this._farmland.y = data.y;//设置y坐标
    this._farmland.zOrder = data.zOrder;
    this._farmland.name = data.ff_id;

    //设置定时器
    this.setTimer();
    //设置一下浇水和收获按钮的监听
    this.water_icon.on(Laya.Event.CLICK, this, this.onClickLand); //无法进行穿透
    this.harvest_icon.on(Laya.Event.CLICK, this, this.onClickLand);

    return this._farmland;
  }
  /**
   * 初始化田的所有
   */
  public initLand() {
    //隐藏掉所有的层
    this.initLandDiv();
    //设置状态
    this.initLandStatic();
  }
  /**
   * 隐藏不要的层
   */
  private initLandDiv() {
    //初始化状态
    this.flower.visible = false;
    this.extend_btn.visible = false;
    this.extend_kuan.visible = false;
    this.upgrade_kuan.visible = false;
    this.xuanzhong.visible = false;
    this.grow_kuan.visible = false;
    this.fertilizer_kuan.visible = false;
    this.harvest_icon.visible = false;
    this.water_icon.visible = false;

    //如果有选中的花田，就需要给他显示选中的花田框
    var landId = farmController.getInstance().model.landId;
    if (landId == this.land_id) {
      this.xuanzhong.visible = true;
    }

    //先设置一下点击监听
    this.land.mouseEnabled = false;
    this.flower.mouseEnabled = false;
    this.extend_btn.mouseEnabled = false;
    this.extend_gold.mouseEnabled = false;
    this.upgrade_gold.mouseEnabled = false;
    this.upgrade_level.mouseEnabled = false;
    this.upgrade_info.mouseEnabled = false;
    this.upgrade_progressbar.mouseEnabled = false;
    this.xuanzhong.mouseEnabled = false;
    this.extend_kuan.mouseEnabled = false;
    this.upgrade_kuan.mouseEnabled = false;
    this.grow_kuan.mouseEnabled = false;
    this.fertilizer_kuan.mouseEnabled = false;
    this.harvest_icon.mouseEnabled = false;
    this.water_icon.mouseEnabled = false;
  }
  //设置定时器
  public setTimer() {
    var data = dataGlobal.getInstance().farmInfo[this.land_id];
    if (data.seed_data.mature_time > 0 || data.fat_time > 0) {
      if (farmLand._timer) {
        farmLand._timer.clear(this, this.timerFun);//先清除定时器
      }
      //设置定时器
      farmLand._timer = new Laya.Timer();
      farmLand._timer.loop(1000, this, this.timerFun);
    }
  }
  /**
   * 定时器处理的内容
   */
  private timerFun() {
    var data = dataGlobal.getInstance().farmInfo[this.land_id];
    if (data.seed_data.mature_time == 0 && data.fat_time == 0) {
      farmLand._timer.clear(this, this.timerFun);
    }
    if (data.seed_data.mature_time && data.seed_data.mature_time > 0) {
      data.seed_data.mature_time --;//植物剩余的生长时间
      data.seed_data.next_mature_time--;//植物进入下个阶段的时间
      //判断是否可以浇水等
      if (data.seed_data.water_time && data.seed_data.water_time > 0) {
        data.seed_data.water_time--;//浇水时间
        this.isOperation(data); //浇水
      }

      this.grow_time.text = globalFun.getInstance().formatSeconds(data.seed_data.mature_time);
      this.grow_time_val.value = Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100) >= 100 ? 100 : Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100);
      if (data.seed_data.mature_time <= 0) {
        this.grow_kuan.visible = false;
      }
      if (data.seed_data.next_mature_time <= 0) {
        //试着进行websocke请求
        let tmp_websocket = webSocketJson.getInstance();
        let tmp_data = {
          'a': "init_grow_flower",
          'm': "init",
          'd': {
            'ff_id': this.land_id,
          },
          'code': 1
        };
        console.log("发送websocket数据", tmp_data);
        tmp_websocket.sendMessage(tmp_data);
        // Laya.stage.event(NETWORKEVENT.FARMINITGROWFLOWER, data);
      }
    }

    if (data.fat_time > 0) {
      // 每一級的有固定的肥力 要施肥材料可以加速生長 施肥操作增加肥力點數
      data.fat_time--;
      this.fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
      this.fertilizer_time_val.value = Math.floor((data.fat_time / data.fat_time_tol) * 100);
      //判断是否到时间了，如果到时见那么久应该发送肥力失效请求
      if (data.fat_time <= 0) {
        //这里隐藏掉肥力的框
        this.fertilizer_kuan.visible = false;
        //试着进行websocke请求
        let tmp_websocket = webSocketJson.getInstance();
        let tmp_data = {
          'a': "init_flower_fat",
          'm': "init",
          'd': {
            'ff_id': this.land_id,
          },
          'code': 1
        };
        tmp_websocket.sendMessage(tmp_data);
        // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFAT, data);
      }
    }


  }
  /**
   * 点击田操作
   */
  private onClickLand() {
    // 这里因为响应太快，可能会被误认为第二次点击，所以先清理一下状态先
    if (farmController.getInstance().model.clickLandStatic == 'harvest' || farmController.getInstance().model.clickLandStatic == 'water') {
      farmController.getInstance().model.setClickLandStatic('');
      return;
    }
    console.log('点击', '--', this.land_id, '--', this.land_static)
    farmController.getInstance().model.setLandId(this.land_id);
    farmController.getInstance().initLand();
    switch (this.land_static) {
      case 'unlock':
        this.onGradeExtend(2);
        break;
      case 'plant'://种植
      case 'fertilizer'://施肥
        farmController.getInstance().model.setClickLandStatic(this.land_static);
        farmController.getInstance().model.setLandId(this.land_id);
        farmController.getInstance().initLand();
        //调用列表
        farmController.getInstance().showSeepList();
        //显示一下加速还有施肥
        this.xuanzhong.visible = true;
        break;
      case 'upgrade'://升级
        farmController.getInstance().initLand();
        this.xuanzhong.visible = true;
        this.onGradeExtend(1);
        break;
      case 'harvest':
        //收获的接口
        farmController.getInstance().model.setClickLandStatic('harvest');
        farmController.getInstance().model.setLandId('');
        this.onHarvest();//花田收获
        break;
      case 'water'://浇水的接口
        farmController.getInstance().model.setClickLandStatic('water');
        farmController.getInstance().model.setLandId('');
        this.onWater();
        break;
    }
  }
  /**
   * 浇水的接口
   */
  private onWater() {
    //这里可以先判断一下
    var data = dataGlobal.getInstance().farmInfo[this.land_id];
    if (data.seed_data.id && typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0) {//可以浇水
      // 试着进行websocke请求
      let tmp_websocket = webSocketJson.getInstance();
      let tmp_data = {
        'a': "init_flower_water",
        'm': "init",
        'd': {
          'ff_id': this.land_id,
        },
        'code': 1
      };
      tmp_websocket.sendMessage(tmp_data);
      // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERWATER, data);
    }

  }
  /**
   * 收获
   */
  private onHarvest() {
    var data = dataGlobal.getInstance().farmInfo[this.land_id];
    //判断一下是否真的可以收获
    if (data.seed_data.id && data.seed_data.grow_static == 4) {//可以收获
      //试着进行websocke请求
      let tmp_websocket = webSocketJson.getInstance();
      let tmp_data = {
        'a': "init_collect_flower",
        'm': "init",
        'd': {
          'ff_id': this.land_id,
        },
        'code': 1
      };
      tmp_websocket.sendMessage(tmp_data);
      // Laya.stage.event(NETWORKEVENT.FARMINITCOLLECTFLOWER, data);
    } else {//花田不能收获
      Laya.stage.event(GAMEEVENT.TIPSKUAN, ['还不能收获', '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
    }
  }

  /**
   * 花田升级升级按钮
  */
  private onLandUpGrade(type) {
    var data = dataGlobal.getInstance().farmInfo[this.land_id];//获取用户这个花田的信息
    var landInfo = dataJson.getInstance().GET_SYS_FLOWER_FIELD()[this.land_id][data.ff_vip];//配置表花田的信息
    var str = '';
    var gold_str = '';
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币


    if (Math.floor(have_gold) < Math.floor(landInfo.num2)) {
      str = '宝石不足，不能升级';
      gold_str = "" + have_gold + "/" + data.next_ff_id_glod + "";
    } else {
      gold_str = "" + have_gold + "/" + data.next_ff_id_glod + "";
    }
    if (Math.floor(data.ff_exp) < Math.floor(landInfo.exp)) {//这个是不能升级的
      str = '花田经验不足，请多多种植吧';
    }

    var confirm_fun = function () {
      tipController.getInstance().close();
      if (str) {
        Laya.stage.event(GAMEEVENT.TIPSKUAN, [str]);
      } else {
        this.onGradeExtendAct(type);
      }
    }.bind(this);
    var cancel_fun = function () {
      tipController.getInstance().close();
    }

    Laya.stage.event(GAMEEVENT.GOLDTIP, ['升级', gold_str, '确定', '取消', confirm_fun, cancel_fun]);
  }
  /**
   * 扩建按钮
   * 1 升级
   * 2 解锁
   */
  private onGradeExtend(type) {
    tipController.getInstance()
    var data = dataGlobal.getInstance().farmInfo[this.land_id];// 先获取这个花田的信息
    var landInfo = dataJson.getInstance().GET_SYS_FLOWER_FIELD()[this.land_id][data.ff_vip];//配置表花田的信息
    var str = '';
    var gold_str = '';
    var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币
    var grade = dataGlobal.getInstance().userInfo.grade;//用户等级

    if (Math.floor(have_gold) < Math.floor(data.ff_id_unlocknum)) {
      str = '钻石不足，不能扩建';
    }

    // 检查用户的田块等级是否达到
    var member = dataJson.getInstance().GET_SYS_FLOWER_MEMBER(); //玩家初始数据
    var member_info = dataJson.getInstance().GET_SYS_FLOWER_MEMBER()[grade]; //当前用户等级对应的初始数据

    console.log("玩家初始数据", member)
    console.log("当前用户等级对应的初始数据", member_info)

    var userFarm = dataGlobal.getInstance().farmInfo; //当前用户花田数据
    var num = 0;
    for (var i in userFarm) {
      if (userFarm[i].ff_vip != 1) {
        num++;
      }
    }

    if (member_info.field <= num) {//这里是不能开花田的，需要查询一下下一级可以开的花田
      for (var q in member) {
        if (member[q].field > member_info.field) {
          console.log(member_info.field)
          str = '达到' + member[q].grade + '级可扩建该花田';
          break;
        }
      }
    }
    // gold_str = "<span style='color:#7D4815'>"+have_gold+"</span><span style='color:#7D4815'>/"+data.ff_id_unlocknum+"</span>";
    // gold_str = "" + have_gold + "/" + data.ff_id_unlocknum + "";
    console.log(data)
    gold_str = '是否消耗' + data.ff_id_unlocknum + '钻石解锁花田'
    if (type == 1) {
      gold_str = '是否消耗' + data.next_ff_id_glod + '钻石升级花田'
    }
    if (str) {
      // Laya.stage.event(GAMEEVENT.TXTTIP, [str]);
      Laya.stage.event(GAMEEVENT.TIPSKUAN, [str, '确定', '取消', function () {
        tipController.getInstance().close();
      }, function () {
        tipController.getInstance().close();
      }]);
      return;
    }
    //如果是符合升级和解锁经验的，那么就弹金币弹窗询问一下用户

    var confirm_fun = function () {
      this.onGradeExtendAct(type);
      tipController.getInstance().close();
    }.bind(this);
    var cancel_fun = function () {
      tipController.getInstance().close();
    }

    Laya.stage.event(GAMEEVENT.GOLDTIP, ['扩建', gold_str, '确定', '取消', confirm_fun, cancel_fun]);

  }
  /**
  * 花田扩建和升级
  */
  private onGradeExtendAct(type) {
    //试着进行websocke请求
    let tmp_websocket = webSocketJson.getInstance();
    let tmp_data = {
      'a': "init_flower_grade",
      'm': "init",
      'd': {
        'ff_id': this.land_id,
        'type': type
      },
      'code': 1
    };
    tmp_websocket.sendMessage(tmp_data);
    // var msg = {
    //   id: this.land_id,
    //   type: type
    // }
    // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERGRADE, msg);
  }
  /**
   * 设置状态
   */
  private initLandStatic() {
    // 先获取这个花田的信息
    var data = dataGlobal.getInstance().farmInfo[this.land_id];
    //设置土地的样式
    this.land.skin = "farm/land_" + data.ff_vip + ".png";
    //除掉事件
    this.land.off(Laya.Event.CLICK, this, this.onClickLand);
    this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
    //ff_vip为1 进行解锁操作
    if (data.ff_vip == 1) {//未解锁
      this.land_static = 'unlock';//解锁
      //这里判断是否可以扩建
      if (data.is_lock == 2) {
        return;
      }
      this.extend_kuan.visible = true;
      //显示扩建按钮
      this.extend_btn.visible = true;
      this.land.mouseEnabled = true;

      //设置升级需要的金币
      this.extend_gold.text = data.ff_id_unlocknum;
      this.extend_gold.visible = true;

      // 点击事件
      this.on(Laya.Event.CLICK, this, this.onClickLand);
      return;
    }

    //如果是在升级
    if (this.land_static == 'upgrade') {
      this.upgrade_kuan.visible = true;
      this.upgrade_kuan.mouseThrough = true
      //判断是否满级
      if (data.ff_vip >= data.max_grade) {//下一级的经验小于或者是等于这一级的经验时，就可以判断为满级
        this.upgrade_info.text = "满级";
        this.upgrade_info.visible = true;
        this.n17.visible = false;
        this.n18.visible = false;
        this.upgrade_gold.visible = false;
        this.upgrade_level.visible = false;
        this.upgrade_progressbar.visible = false;
        this.land.mouseEnabled = true;
        this.land.on(Laya.Event.CLICK, this, function () {
        });
      } else {
        //没有满级的需要显示一下
        // this.upgrade_info.text = "<span style='color:#ffffff'>加成:" + data.seed + "%+</span><span style='color:#96fa65'>" + data.next_seed + "%</span>";
        this.upgrade_info.text = "加速:" + data.seed + "%+" + data.next_seed + "%";
        this.upgrade_info.visible = true;
        this.upgrade_gold.text = data.next_ff_id_glod;
        this.upgrade_gold.visible = true;
        this.upgrade_level.text = 'lv:' + (data.ff_vip - 1);
        this.upgrade_level.visible = true;
        // this.upgrade_progressbar.value = Math.floor((data.ff_exp / data.next_exp) * 100) >= 100 ? 1 : Math.floor((data.ff_exp / data.next_exp));
        this.upgrade_progressbar.value = data.ff_exp / data.next_exp;
        this.upgrade_progressbar.visible = true;
        this.land.mouseEnabled = true;
        this.land.on(Laya.Event.CLICK, this, this.onClickLand);
      }
      return;
    }

    //如果是在施肥和种植状态就需要看看要不要显示施肥时间.
    if (this.land_static == 'fertilizer' || this.land_static == 'plant') {
      if (data.fat_time > 0 && farmController.getInstance().model.landId == this.land_id) {
        this.fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
        this.fertilizer_time_val.value = Math.floor((data.fat_time / data.fat_time_tol) * 100) >= 100 ? 100 : Math.floor((data.fat_time / data.fat_time_tol) * 100);
        //显示
        this.fertilizer_kuan.visible = true;
      }
    }

    //判断是否有花种
    if (data.seed_data.id) {//有花，可以施肥
      // 展示了花种
      let index = data.seed_data.pic.lastIndexOf("/");
      var _skin = data.seed_data.pic.substring(index + 1, data.seed_data.pic.length);
      console.log(data.ff_id,_skin,data.seed_data.id)
      console.log(data.seed_data.name)
      this.flower.skin = "main/" + _skin + ".png";
      console.log(this.flower.skin)
      this.flower.visible = true;
      //判断是否可以浇水等
      if (this.isOperation(data)) {
        return;
      }
      //如果是当前的土地就显示植物的成长时间
      if (farmController.getInstance().model.landId == this.land_id && data.seed_data.mature_time > 0) {
        this.grow_time.text = globalFun.getInstance().formatSeconds(data.seed_data.mature_time);
        this.grow_time_val.value = Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100) >= 100 ? 100 : Math.floor((data.seed_data.mature_time / data.seed_data.grow_time_tol) * 100);
        this.grow_kuan.visible = true;
      }
      //没有花需要监听一下点击事件
      this.land.on(Laya.Event.CLICK, this, this.onClickLand);
      this.land.mouseEnabled = true;
      this.land_static = 'fertilizer';//施肥
    } else {//种种子
      this.land.on(Laya.Event.CLICK, this, this.onClickLand);
      this.land.mouseEnabled = true;
      this.land_static = 'plant';//如果没有上面的，那么默认就是施肥和种植
    }

    this.land.visible = true;
  }
  /**
   * 判断是否浇水或者收获
   */
  private isOperation(data) {
    var data = dataGlobal.getInstance().farmInfo[this.land_id];
    var clickLandStatic = farmController.getInstance().model.clickLandStatic;
    if (clickLandStatic == '' || clickLandStatic == 'fertilizer') {
      if (data.seed_data.id && data.seed_data.grow_static == 4 && data.seed_data.mature_time <= 0) {
        //可以收获
        this.land_static = 'harvest';
        this.land.mouseEnabled = true;
        this.land.off(Laya.Event.CLICK, this, this.onClickLand);
        this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
        this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
        this.land.on(Laya.Event.CLICK, this, this.onClickLand);
        //显示可以收获的图标
        this.harvest_icon.mouseEnabled = true;
        this.harvest_icon.visible = true;
        return true;
      } else if (typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0) {//判断是否可以浇水
        //可以浇水
        this.land_static = 'water';
        this.land.mouseEnabled = true;
        this.land.off(Laya.Event.CLICK, this, this.onClickLand);
        this.land.off(Laya.Event.MOUSE_OUT, this, this.onClickLand);
        this.land.on(Laya.Event.MOUSE_OUT, this, this.onClickLand);
        //显示可以收获的图标
        this.water_icon.mouseEnabled = true;
        this.water_icon.visible = true;
        return true;
      }
    }
    return false
  }
}
