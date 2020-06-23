export default class staticData {
  private static _instance: staticData;
  public constructor() {
  }
  public static getInstance() {
    if (staticData._instance == null) {
      staticData._instance = new staticData();
    }
    return staticData._instance;
  }
  // 用户数据
  public static userInfo: any = {
    'sid': "渠道ID",
    'sid2': "渠道ID2",
    'uid': "uuu",
    "name": "JIN",
    "nickname": "赤脚大仙",
    "pic": "用户头像",
    "sex": "用户性别",
    "token": "用户的登陆key(这个是登陆时添加的!)"
  }
  // 用户的基本属性
  public static userProp = {
    // 'uid'=>用户ID
    // 'have_gold'=>可用金币数
    // 'used_gold'=>已用金币数
    // 'grade'=>当前等级
    // 'exp'=>当前等级经验
    // 'up_time'=>升级时间
  }

  // 农田数据
  public static INDEX_DATA = [
    // 'ff_id'=>'花田编号',
    // 'max_grade'=>'花田的最高等级',//花田的最高等级
    // 'ff_vip'=>'花田等级',//1未开锁，2等级一，3等级二，4等级三
    // 'ff_exp'=>'花田当前的经验值',
    // 'seed'=>'花田生长加速百分比',
    // 'is_lock'=>'是否可以解锁花田',//1是2否
    // 'next_seed'=>'下一级花田生长加速百分比',
    // 'next_exp'=>'花田的升下一级经验值',
    // 'ff_id_unlocknum'=>'解锁所需金币',
    // 'next_ff_id_glod'=>'下一级升级所需金币',
    // 'pic'=>"huatianlv1",//'花田图片',
    // 'ain'=>"",//'花田正常动画',
    // 'fat_time'=>'当前施肥剩余时间',
    // 'fat_time_tol'=>'施肥总时间',
    //   'seed_data'=>array(//花卉数据
    //     'grow_time_tol'=>'生长总时间',
    //     'mature_time'=>'当前成熟时间',
    //     'next_mature_time'=>'下一阶段成长时间',
    //     'grow_static'=>'当前生长状态',//1发芽期、2生长期、3花苞期、4成熟期
    //     'water_time'	=> '可以浇水时间', //
    //     'is_water'	=> '是否可以浇水', //是否可以浇水 1是2否
    //     'id'=>"hh01",//'花卉ID', // 区分是哪种花卉
    //     'name'=>"红玫瑰",//'花卉名称',
    //     'grade'=>"1",//'花卉等级',四个状态
    //     'pic'=>"hmgseed",//'当前花卉图片',
    //     'ain'=>"",//'当前花卉动画',
    // )
    // 01
    {
      "ff_id": "ht01",
      "ff_vip": 1,
      "ff_exp": 0,
      "ff_id_unlocknum": 50,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
    },
    // 02
    {
      "ff_id": "ht02",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 100,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 2,
      // "ff_exp": 1001,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_3",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "hh02",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 1,
      //   "pic": "",
      //   "ain": "",
      //   "water": 2
      // }
    },
    // 03
    {
      "ff_id": "ht03",
      "ff_vip": 1,
      "ff_exp": 200,
      "ff_id_unlocknum": 200,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 2,
      // "ff_exp": 500,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_1",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "hh03",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 1,
      //   "pic": "",
      //   "ain": ""
      // }
    },
    // 04
    {
      "ff_id": "ht04",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 300,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 2,
      // "ff_exp": 500,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_2",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 4,
      //   "pic": "",
      //   "ain": ""
      // }
    },
    // 05
    {
      "ff_id": "ht05",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 400,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 1,
      // "ff_exp": 500,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_2",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 4,
      //   "pic": "",
      //   "ain": ""
      // }
    },
    // 06
    {
      "ff_id": "ht06",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 500,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 1,
      // "ff_exp": 500,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_2",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 4,
      //   "pic": "",
      //   "ain": ""
      // }
    },
    // 07
    {
      "ff_id": "ht07",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 600,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 1,
      // "ff_exp": 500,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_2",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 4,
      //   "pic": "",
      //   "ain": ""
      // }
    },
    // 08
    {
      "ff_id": "ht08",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 700,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 1,
      // "ff_exp": 500,
      // "ff_id_unlocknum": 500,
      // "next_ff_id_glod": 100,
      // "next_exp": 1000,
      // "pic": "land_2",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 500,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "",
      //   "name": "\u7ea2\u73ab\u7470",
      //   "grade": 4,
      //   "pic": "",
      //   "ain": ""
      // }
    },
    //09 
    {
      "ff_id": "ht09",
      "ff_vip": 1,
      "ff_exp": 100,
      "ff_id_unlocknum": 800,
      "next_ff_id_glod": 0,
      "next_exp": 0,
      "pic": "land_1",
      "ain": "",
      "fat_time": 0,
      "fat_time_tol": 0,
      "seed_data": {
        "mature_time": 100,
        "next_mature_time": 499,
        "grow_time_tol": 9000,
        "grow_static": 2,
        "id": "",
        "name": "",
        "grade": "",
        "pic": "",
        "ain": ""
      }
      // "ff_vip": 3,
      // "ff_exp": 100,
      // "ff_id_unlocknum": 50,
      // "next_ff_id_glod": 0,
      // "next_exp": 0,
      // "pic": "land_1",
      // "ain": "",
      // "fat_time": 0,
      // "fat_time_tol": 0,
      // "seed_data": {
      //   "mature_time": 100,
      //   "next_mature_time":499,
      //   "grow_time_tol": 9000,
      //   "grow_static": 2,
      //   "id": "hh03",
      //   "name": "",
      //   "grade": 2,
      //   "pic": "",
      //   "ain": ""
      // }
    },
  ]



  public getFarmInitField() {
    return {
      "ga": "init_field",
      "gd": staticData.INDEX_DATA,
      "code": 1
    }
  }

  public getFarmInitFlowerGrade(id) {
    for (var i in staticData.INDEX_DATA) {
      if (staticData.INDEX_DATA[i].ff_id == id) {
        staticData.INDEX_DATA[i].ff_vip = 2;
        return {
          "ga": "init_flower_grade",
          "gd": staticData.INDEX_DATA[i],
          "code": 1
        }
      }
    }
    
  }


}