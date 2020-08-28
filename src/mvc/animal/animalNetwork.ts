/**
* name 
*/
import dataGlobal from '../resconfig/dataGlobal'
import animalController from './animalController'
import GAMEEVENT from '../event/GAMEEVENT'
export default class factoryNetwork {
  constructor() {
  }
  //获取工厂的信息
  public SendAnimalFactoryBak(data) {
    data = {
      "ga": "animal_product_info",
      "gd": {
        "type": "sheep",
        "slots": {
          "slot_1": {
            "id": "slot_1",
            "unlock": "1",//卡槽已开启 开启了就有动物
            "state": "0",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
            "time": "10000",//生产总时间
            "timepass": "200",//已生产时间
            "locknum": "100"
          },
          "slot_2": {
            "id": "slot_2",
            "unlock": "1",//卡槽已开启 开启了就有动物
            "state": "1",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
            "time": "10000",//生产总时间
            "timepass": "200",//已生产时间
            "locknum": "100"
          },
          "slot_3": {
            "id": "slot_3",
            "unlock": "1",//卡槽已开启 开启了就有动物
            "state": "2",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
            "time": "10000",//生产总时间
            "timepass": "200",//已生产时间
            "locknum": "100"
          },
          "slot_4": {
            "id": "slot_4",
            "unlock": "1",//卡槽已开启 开启了就有动物
            "state": "2",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
            "time": "10000",//生产总时间
            "timepass": "200",//已生产时间
            "locknum": "100"
          },
          "slot_5": {
            "id": "slot_5",
            "unlock": "0",//1卡槽已开启 开启了就有动物 0
            "state": "1",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
            "time": "10000",//生产总时间
            "timepass": "200",//已生产时间
            "locknum": "100"
          },
          "slot_6": {
            "id": "slot_6",
            "unlock": "0",//1卡槽已开启 开启了就有动物 0
            "state": "1",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
            "time": "10000",//生产总时间
            "timepass": "200",//已生产时间
            "locknum": "100"
          },
        }

      }, "code": 1
    };
    //保存动物生产的信息
    dataGlobal.getInstance().setAnimalProductInfo(data.gd);
    //展示工厂的信息
    animalController.getInstance().showAnimalFactory(data.ga);
    //开启定时器
    // factoryController.getInstance().model.setTimeout();
  }

  //收获动物产物
  public HarvestAnimalFactory(data) {
    data = {
      "ga": "animal_product_harvest",
      "gd": {
        "type": "sheep",
        "info": {
          "id": "slot_3",
          "unlock": "1",//卡槽已开启 开启了就有动物
          "state": "0",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
          "time": "10000",//生产总时间
          "timepass": "200",//已生产时间
          "locknum": "100"
        }
      },
      "code": 1
    }
    //保存动物生产的信息
    dataGlobal.getInstance().setAnimalProductInfo(data.gd);
    //展示动物工厂的信息
    animalController.getInstance().showAnimalFactory(data.ga);

  }

  public FeedAnimalFactory(data) {
    data = {
      "ga": "animal_product_feed",
      "gd": {
        "type": "sheep",
        "info": {
          "id": "slot_1",
          "unlock": "1",//卡槽已开启 开启了就有动物
          "state": "1",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
          "time": "10000",//生产总时间
          "timepass": "200",//已生产时间
          "locknum": "100"
        }
      },
      "code": 1
    }
    var tmp_arr = [{ 'id': "sheepfeed", 'num': '9' }];//从仓库拉
    dataGlobal.getInstance().setUserGoodInfo(tmp_arr);
    //保存动物生产的信息
    dataGlobal.getInstance().setAnimalProductInfo(data.gd);
    //展示动物工厂的信息
    animalController.getInstance().showAnimalFactory(data.ga);
  }

  //解锁卡槽
  public AnimalSlotLock(data) {
    data = {
      "ga": "animal_slot_lock",
      "gd": {
        "type": "sheep",
        "info": {
          "id": "slot_5",
          "unlock": "1",//卡槽已开启 开启了就有动物
          "state": "0",//动物状态 0饥饿（无饲料） 1生产中（eat有饲料） 2有产物）
          "time": "10000",//生产总时间
          "timepass": "200",//已生产时间
          "locknum": "100"
        }
      },
      "code": 1
    }
    //保存动物生产的信息
    dataGlobal.getInstance().setAnimalProductInfo(data.gd);
    //展示动物工厂的信息
    animalController.getInstance().showAnimalFactory(data.ga);
  }

}
  // //工厂建造的返回
  // public FactoryCreateBak(data) {
  //   // data = { "ga": "factory_create_bak", "gd": { "mf_id": "gc002", "grade": "1", "open_seat_num": "2", "being_goods":  { "id": "wp5041", "t": "1100" }, "queue_goods": [{ "id": "wp5041", "t": "600000", "t2": "5000000" }, { "id": "wp5042", "t": "600000", "t2": "5000000" }], "succ_goods": [] }, "code": 1 };
  //   //保存工厂信息
  //   data = data.gd;
  //   dataGlobal.getInstance().setFactory(data, data.mf_id);
  //   //展示工厂的信息
  //   factoryController.getInstance().showFactory();
  //   if (data.msg) {
  //     Laya.stage.event(GAMEEVENT.TXTTIP, [data.msg]);
  //   }
  //   //更新用户信息
  //   infoController.getInstance().getUserInfo()
  // }
  // //工厂生产产品完成后用户点击收获
  // public FactoryGoodSave(data) {
  //   // data = { "ga": "factory_create_bak", "gd": { "mf_id": "gc001", "grade": "1", "open_seat_num": "1", "being_goods": { "id": "wp5001", "t": "10" }, "queue_goods": [{ "id": "wp5002", "t": "600000", "t2": "5000000" }], "succ_goods": [] }, "code": 1 };
  //   data = data.gd;
  //   //保存工厂信息
  //   dataGlobal.getInstance().setFactory(data, data.mf_id);
  //   //展示工厂的信息
  //   factoryController.getInstance().showFactory();
  // }
  // //购买生产槽位
  // public FactoryOpenSeatNumBak(data) {
  //   // data = { "ga": "factory_open_seat_num_bak", "gd": { "mf_id": "gc001", "grade": 2, "open_seat_num": 2 }, "code": 1 };
  //   //保存一下工厂的信息
  //   data = data.gd;
  //   dataGlobal.getInstance().buySetFactory(data);
  //   //展示工厂的信息
  //   factoryController.getInstance().showFactory();
  //   //刷新页面的信息
  //   factoryController.getInstance().initProduction(data.mf_id);
  //   Laya.stage.event(GAMEEVENT.TXTTIP, ['成功购买队列']);
  //   //更新用户信息
  //   infoController.getInstance().getUserInfo()
  // }
  // //获取用户物品
  // public SendGoodBak(data) {
  //   data = { "ga": "send_good_bak", "gd": { "wp5041": { "id": "wp5041", "num": 8 }, "wp5042": { "id": "wp5042", "num": 10 }, "wp5043": { "id": "wp5043", "num": 8 }, "wp5044": { "id": "wp5044", "num": 10 }, "wp5045": { "id": "wp5045", "num": 8 } }, "code": 1 };
  //   //保存用户的物品
  //   data = data.gd;
  //   dataGlobal.getInstance().setUserGoodInfo(data);
  //   //展示工厂可生产列表物品信息
  //   factoryController.getInstance().initProductionGoodList();
  // }
  // //工厂生产产品协议
  // public FactoryAct(data) {
  //   // data = { "ga": "factory_act_bak", "gd": { "mf_id": "gc001", "grade": "2", "open_seat_num": "1", "being_goods": { "id": "wp5001", "t": "600000" }, "queue_goods": [{ "id": "wp5002", "t": "600000", "t2": "5000000" }], "succ_goods": [{ "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }] }, "code": 1 };
  //   //保存一下工厂的信息
  //   data = data.gd;
  //   dataGlobal.getInstance().setFactory(data, data.mf_id);
  //   //展示工厂的信息
  //   factoryController.getInstance().showFactory();
  //   //刷新页面的信息
  //   factoryController.getInstance().initFactoryInfo(data.mf_id);
  // }
  // //工厂升级的协议
  // public FactoryUpGrade(data) {
  //   if (!data) {
  //     return
  //   }
  //   // data = { "ga": "factory_up_grade_bak", "gd": { "mf_id": "gc001", "grade": "4", "open_seat_num": "1", "being_goods": { "id": "wp5001", "t": "600000" }, "queue_goods": [{ "id": "wp5002", "t": "600000", "t2": "5000000" }], "succ_goods": [{ "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }] }, "code": 1 };
  //   //保存一下工厂的信息
  //   data = data.gd;
  //   dataGlobal.getInstance().setFactory(data, data.mf_id);
  //   //展示工厂的信息
  //   factoryController.getInstance().showFactory();
  //   //刷新页面的信息
  //   factoryController.getInstance().initFactoryInfo(data.mf_id);
  //   //刷新一下升级弹窗的信息
  //   factoryController.getInstance().initFactoryGradeList();
  //   //更新用户信息
  //   infoController.getInstance().getUserInfo()
  // }
  // //工厂生产产品完成的协议
  // public FactoryGoodGet(data) {
  //   // data = { "ga": "factory_good_get_bak", "gd": { "mf_id": "gc001", "grade": "2", "open_seat_num": "1", "being_goods": { "id": "wp5001", "t": "10" }, "queue_goods": [{ "id": "wp5002", "t": "600000", "t2": "5000000" }], "succ_goods": [{ "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }, { "id": "wp5011", "t": "2012-10-10", "t2": "2012-10-11", "n": 1 }] }, "code": 1 };
  //   //保存一下工厂的信息
  //   data = data.gd;
  //   dataGlobal.getInstance().setFactory(data, data.mf_id);
  //   //展示工厂的信息
  //   factoryController.getInstance().showFactory();
  //   //刷新页面的信息
  //   //先对比一下是否在当前页面
  //   var id = factoryController.getInstance().model._mf_id;
  //   if (id == data.mf_id) {//如果当前在这间工厂，那么需要刷新一下工厂的信息
  //     factoryController.getInstance().initFactoryInfo(data.mf_id);
  //   }
  // }

// }
