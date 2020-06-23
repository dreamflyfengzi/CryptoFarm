// /**
// * name 
// */
import farmController from './farmController'
import dataGlobal from '../resconfig/dataGlobal'
import staticData from '../resconfig/staticData'
export default class farmNetwork {
  private _farmController: farmController;
  constructor() {
  }
  /**
   * 
   * 获取农田信息
   */
  public FarmInitField(data) {
    // data = { "ga": "init_field", "gd": [{ "ff_id": "ht01", "ff_vip": 1, "ff_exp": 0, "ff_id_unlocknum": 50, "next_ff_id_glod": 0, "next_exp": 0, "pic": "land_1", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 0, "grow_time_tol": 9000, "grow_static": 0, "id": 0, "name": "", "grade": "", "pic": "", "ain": "" } }, { "ff_id": "ht02", "ff_vip": 2, "ff_exp": 1001, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_3", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh02", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "", "water": 2 } }, { "ff_id": "ht03", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_1", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht04", "ff_vip": 1, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "", "name": "\u7ea2\u73ab\u7470", "grade": 4, "pic": "", "ain": "" } }, { "ff_id": "ht05", "ff_vip": 1, "ff_exp": 1001, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_4", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": 3, "pic": "", "ain": "" } }, { "ff_id": "ht06", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh02", "name": "\u7ea2\u73ab\u7470", "grade": 4, "pic": "", "ain": "" } }, { "ff_id": "ht07", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_6", "ain": "", "fat_time_tol": 0, "fat_time": 0, "seed_data": { "mature_time": 500, "grow_time_tol": 9000, "grow_static": 2, "id": "hh03", "name": "\u7ea2\u73ab\u7470", "grade": 3, "pic": "", "ain": "" } }, { "ff_id": "ht08", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_3", "ain": "", "fat_time": 0, "fat_time_tol": 0, "seed_data": { "mature_time": 10, "grow_time_tol": 9000, "grow_static": 2, "id": "hh04", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }, { "ff_id": "ht09", "ff_vip": 2, "ff_exp": 500, "ff_id_unlocknum": 500, "next_ff_id_glod": 100, "next_exp": 1000, "pic": "land_2", "ain": "", "fat_time": 20, "fat_time_tol": 50000, "seed_data": { "mature_time": 10, "grow_time_tol": 9000000, "grow_static": 2, "id": "hh05", "name": "\u7ea2\u73ab\u7470", "grade": 1, "pic": "", "ain": "" } }], "code": 1 };
    data = staticData.getInstance().getFarmInitField();
    dataGlobal.getInstance().setFarmInfo(data.gd);//保存农田信息
    //展示农田信息
    farmController.getInstance().onShowFarmInitField(data.gd);
  }
  /**
   * 获取种子列表
   */
  public FarmInitSeedList(data) {
    data = { "ga": "init_seed_list", "gd": [{ "id": "hh02", "name": "\u7ea2\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "100", "pic": "ui:\/\/farm\/hh02_1", "ain": "", "gold": 100 }, { "id": "hh02", "name": "\u9ed1\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "100", "pic": "ui:\/\/farm\/hh01_2", "ain": "", "gold": 100 }, { "id": "hh03", "name": "\u9ec4\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "500", "pic": "ui:\/\/farm\/hh01_3", "ain": "", "gold": 100 }, { "id": "hh04", "name": "\u9752\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "400", "pic": "ui:\/\/farm\/hh01_4", "ain": "", "gold": 150 }, { "id": "hh05", "name": "\u9752\u73ab\u7470", "grade": "1", "grade2": "1", "grade3": "300", "pic": "ui:\/\/farm\/hh02_1", "ain": "", "gold": 200 }, { "id": "hh06", "name": "\u9752\u73ab\u7470", "grade": "1", "grade2": "20", "grade3": "200", "pic": "ui:\/\/farm\/hh02_2", "ain": "", "gold": 300 }], "code": 1 };
    //先存一份种子的数据
    farmController.getInstance().model.setFarmSeed(data.gd.seed_data);
    //保存一份肥料的数据
    farmController.getInstance().model.setFatData(data.gd.fat_data);
    //设置农田的信息
    farmController.getInstance().onFarmInitSeedList(data.gd);
  }
  /**
   * 农田的升级扩建
   */
  public FarmInitFlowerGrade(id) {
    console.log('扩建这块地',id)
    // data = { "ga": "init_flower_grade", "gd": { "type": 2, "ff_id": "ht01", "ff_vip": 3, "ff_exp": 10, "next_exp": 100, "ff_id_unlocknum": 0, "next_ff_id_glod": 110, "pic": "land_3", "ain": "", "msg": "\u5347\u7ea7\/\u89e3\u9501\u6210\u529f" }, "code": 1 };
    var data = staticData.getInstance().getFarmInitFlowerGrade(id);
    // console.log(data)
    var myData = data.gd;
    // // console.log(myData)
    var tmp_arr = {
      'ff_id':myData.ff_id,
      'ff_vip': myData.ff_vip,
      'ff_exp': myData.ff_exp,
      'next_exp': myData.next_exp,
      'ff_id_unlocknum': myData.ff_id_unlocknum,
      'next_ff_id_glod': myData.next_ff_id_glod,
      // "seed": myData.seed,
      // "next_seed": myData.next_seed,
      'pic': myData.pic,
    }

    // if (myData.type == 1) {//升级
    // if (myData.ff_vip == 1) {//扩建

    // // } else if (myData.type == 2) {//扩建
    // //   //修改单个农田的状态
    //   tmp_arr['is_lock'] = myData.is_lock;
    // //   var landStatic = farmController.getInstance().model.clickLandStatic;
    // //   if (myData.next_ht_lock) {
    // //     var next_arr = {
    // //       'is_lock': 1
    // //     }
    // //     dataGlobal.getInstance().setFarmInfo(next_arr, myData.next_ht_lock);//保存农田信息
    // //   }
    // }

    dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);//保存农田信息

    farmController.getInstance().initLand();//重置农田
  }
  /**
   * 请求种植操作
   */
  public FarmInitPlantFlower(data) {
    data = { "ga": "init_plant_flower", "gd": { "ff_id": "ht01", "fat_time": 0, "fat_time_tol": 0, "ff_exp": 500, "seed_data": { "grow_time_tol": 5000, "mature_time": 500, "grow_static": 1, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": "1", "pic": "hh01_1", "ain": "" }, "msg": "\u79cd\u690d\u6210\u529f" }, "code": 1 };
    var myData = data.gd;
    var tmp_arr = {
      // 'ff_id':myData.ff_id,
      'fat_time': myData.fat_time,
      'fat_time_tol': myData.fat_time_tol,
      'ff_exp': myData.ff_exp,
      'seed_data': myData.seed_data
    }
    dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);//保存农田信息
    farmController.getInstance().setThisLandTimer(myData.ff_id);//设置农田的定时器
    farmController.getInstance().initLand();//重置农田
    farmController.getInstance().setPlantFramLand();//看看是否还有空的农田可以种植


  }
  /**
   * 请求施肥
   */
  public FarmInitFlowerFertilize(data) {
    data = { "ga": "init_flower_fertilize", "gd": { "ff_id": "ht01", "fat_time": 500, "fat_time_tol": 5000, "ff_exp": 50, "seed_data": { "grow_time_tol": 5000, "mature_time": 300, "grow_static": 4, "id": "hh01", "name": "\u7ea2\u73ab\u7470", "grade": "1", "pic": "hh01_1", "ain": "" }, "exp_data": { "exp": "20", "exp2": "2", "t": "7200" }, "msg": "\u65bd\u80a5\u6210\u529f" }, "code": 1 };
    var myData = data.gd;
    var tmp_arr = {
      // 'ff_id':myData.ff_id,
      'fat_time': myData.fat_time,
      'fat_time_tol': myData.fat_time_tol,
      'ff_exp': myData.ff_exp,
      'seed_data': myData.seed_data
    }
    dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);//保存农田信息
    farmController.getInstance().setThisLandTimer(myData.ff_id);//设置农田的定时器
    farmController.getInstance().model.setClickLandStatic('fertilizer');
    farmController.getInstance().initLand();//重置农田

  }
  /**
   * 请求浇水操作
   */
  public FarmInitFlowerWater(data) {
    data = { "ga": "init_flower_water", "gd": { "ff_id": "ht02", "fat_time": 0, "fat_time_tol": 0, "ff_exp": 500, "seed_data": { "grow_time_tol": 5000, "mature_time": 900, "grow_static": 2, "id": "hh02", "name": "\u7ea2\u73ab\u7470", "grade": "1", "pic": "hh02_2", "ain": "" }, "exp_data": { "exp": "20", "exp2": "2", "t": "7200" }, "msg": "\u6d47\u6c34\u6210\u529f" }, "code": 1 };
    var myData = data.gd;
    var tmp_arr = {
      // 'ff_id':myData.ff_id,
      'fat_time': myData.fat_time,
      'fat_time_tol': myData.fat_time_tol,
      'ff_exp': myData.ff_exp,
      'seed_data': myData.seed_data
    }

    dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);//保存农田信息
    //处理花田浇水的
    farmController.getInstance().initLand();//重置农田

  }
  /**
   * 植物成长推送
   */
  public FarmInitGrowFlower(data) {
    var myData = data.gd;
    var tmp_arr = {
      'fat_time': myData.fat_time,
      'fat_time_tol': myData.fat_time_tol,
      'ff_exp': myData.ff_exp,
      'seed_data': myData.seed_data
    }
    dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);//保存农田信息
    console.log('成长了')
    farmController.getInstance().initLand();//重置农田
  }
  /**
   * 花田收获
   */
  public FarmCollectFlower(data) {
    data = { "ga": "init_collect_flower", "gd": { "ff_id": "ht01", "fat_time": 500, "fat_time_tol": 5000, "ff_exp": 1000, "seed_data": { "grow_time_tol": 0, "mature_time": 0, "grow_static": 0, "id": "", "name": "", "grade": 0, "pic": "", "ain": "" }, "exp_data": { "exp": null, "exp2": null, "t": 0 }, "msg": "\u6536\u83b7\u6210\u529f" }, "code": 1 };
    var myData = data.gd;
    var tmp_arr = {
      'fat_time': myData.fat_time,
      'fat_time_tol': myData.fat_time_tol,
      'ff_exp': myData.ff_exp
    }
    dataGlobal.getInstance().setFlowerInfo(myData.ff_id);//重置花的信息
    dataGlobal.getInstance().setFarmInfo(tmp_arr, myData.ff_id);//保存农田信息
    farmController.getInstance().initLand();//重置农田
  }
  /**
   * 肥力失效请求
   */
  public FarmInitFlowerFat(data) {
    var myData = data.gd;
    //修改存储的数据
    var tmp_arr = {
      'fat_time': myData.fat_time,
      'fat_time_tol': myData.fat_time_tol,
      'ff_exp': myData.ff_exp,
      'seed_data': myData.seed_data
    }
    // dataGlobal.getInstance().setFarmInfo(tmp_arr,myData.ff_id);//保存农田信息
    farmController.getInstance().initLand();//重置农田
  }
}
