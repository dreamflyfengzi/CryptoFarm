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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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
      "msg": "",
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

  // 种子数据
  public static SEED_LIST = [
    {
      "id": "hh02",
      "name": "\u7ea2\u73ab\u7470",
      "grade": "1",
      "grade2": "1",
      "grade3": "100",
      "pic": "ui:\/\/farm\/hh02_1",
      "ain": "",
      "gold": 100
    },
    {
      "id": "hh02",
      "name": "\u9ed1\u73ab\u7470",
      "grade": "1",
      "grade2": "1",
      "grade3": "100",
      "pic": "ui:\/\/farm\/hh01_2",
      "ain": "",
      "gold": 100
    },
    {
      "id": "hh03",
      "name": "\u9ec4\u73ab\u7470",
      "grade": "1",
      "grade2": "1",
      "grade3": "500",
      "pic": "ui:\/\/farm\/hh01_3",
      "ain": "",
      "gold": 100
    },
    {
      "id": "hh04",
      "name": "\u9752\u73ab\u7470",
      "grade": "1",
      "grade2": "1",
      "grade3": "400",
      "pic": "ui:\/\/farm\/hh01_4",
      "ain": "",
      "gold": 150
    },
    {
      "id": "hh05",
      "name": "\u9752\u73ab\u7470",
      "grade": "1",
      "grade2": "1",
      "grade3": "300",
      "pic": "ui:\/\/farm\/hh02_1",
      "ain": "",
      "gold": 200
    },
    {
      "id": "hh06",
      "name": "\u9752\u73ab\u7470",
      "grade": "1",
      "grade2": "20",
      "grade3": "200",
      "pic": "ui:\/\/farm\/hh02_2",
      "ain": "",
      "gold": 300
    }
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

  public getFarmInitSeedList() {
    return {
      "ga": "init_seed_list",
      "gd": staticData.SEED_LIST,
      "code": 1
    }
  }

  public farmInitPlantFlower(id, hhid) {

    for (var i in staticData.INDEX_DATA) {
      if (staticData.INDEX_DATA[i].ff_id == id) {
        console.log(staticData.INDEX_DATA[i])
        staticData.INDEX_DATA[i].seed_data = {
          "grow_time_tol": 5000,
          "next_mature_time": 1000,
          "mature_time": 500,
          "grow_static": 1,
          "id": hhid,
          "name": "\u7ea2\u73ab\u7470",
          "grade": "3",
          "pic": "hh01_1",
          "ain": ""
        }
        staticData.INDEX_DATA[i].msg = "\u79cd\u690d\u6210\u529f";
        return {
          "ga": "init_plant_flower",
          "gd": staticData.INDEX_DATA[i],
          "code": 1
        }
      }
    }

  }

  // 花卉数据
  //  {
  // $SYS_FLOWER_PLANTS = array(
  // 	'hh6001' => array(
  // 		'1' => array(
  // 			'id'=>"hh6001",//'花卉ID',
  // 			'name'=>"红玫瑰",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"1",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"0",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"10",//'浇水减少生长时间',
  // 			't'=>"30000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"30",//'增加花田经验数',
  // 			'exp2'=>"20",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_3_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_3_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"10000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_3_3",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"10000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_3_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"10000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_3_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_3_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_3_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6002' => array(
  // 		'1' => array(
  // 			'id'=>"hh6002",//'花卉ID',
  // 			'name'=>"勿忘我",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"1",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"10",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"15",//'浇水减少生长时间',
  // 			't'=>"60000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"30",//'增加花田经验数',
  // 			'exp2'=>"25",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_4_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_4_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"20000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_4_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"20000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_4_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"20000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_4_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_4_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_4_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6003' => array(
  // 		'1' => array(
  // 			'id'=>"hh6003",//'花卉ID',
  // 			'name'=>"百合",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"3",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"20",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"20",//'浇水减少生长时间',
  // 			't'=>"72000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"50",//'增加花田经验数',
  // 			'exp2'=>"30",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_2_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_2_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"24000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_2_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"24000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_2_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"24000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_2_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_2_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_2_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6004' => array(
  // 		'1' => array(
  // 			'id'=>"hh6004",//'花卉ID',
  // 			'name'=>"紫罗兰",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"3",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"30",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"20",//'浇水减少生长时间',
  // 			't'=>"75000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"50",//'增加花田经验数',
  // 			'exp2'=>"35",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_5_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_5_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"25000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_5_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"25000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_5_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"25000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_5_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_5_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_5_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6005' => array(
  // 		'1' => array(
  // 			'id'=>"hh6005",//'花卉ID',
  // 			'name'=>"红花",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"70",//'增加花田经验数',
  // 			'exp2'=>"40",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_6_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_6_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_6_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_6_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_6_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_6_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_6_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6006' => array(
  // 		'1' => array(
  // 			'id'=>"hh6006",//'花卉ID',
  // 			'name'=>"澳洲腊梅",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"70",//'增加花田经验数',
  // 			'exp2'=>"45",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_10_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_6_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_6_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_6_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_6_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_10_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_10_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6007' => array(
  // 		'1' => array(
  // 			'id'=>"hh6007",//'花卉ID',
  // 			'name'=>"粉玫瑰",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"90",//'增加花田经验数',
  // 			'exp2'=>"50",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_6_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_6_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_6_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_6_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_6_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_8_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_8_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6008' => array(
  // 		'1' => array(
  // 			'id'=>"hh6008",//'花卉ID',
  // 			'name'=>"向日葵",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"90",//'增加花田经验数',
  // 			'exp2'=>"55",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_1_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_1_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_1_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_1_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_1_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_1_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_1_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6009' => array(
  // 		'1' => array(
  // 			'id'=>"hh6009",//'花卉ID',
  // 			'name'=>"雏菊",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"110",//'增加花田经验数',
  // 			'exp2'=>"60",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_9_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_6_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_6_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_6_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_6_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_9_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_9_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6010' => array(
  // 		'1' => array(
  // 			'id'=>"hh6010",//'花卉ID',
  // 			'name'=>"白桔梗",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"110",//'增加花田经验数',
  // 			'exp2'=>"65",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_11_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_6_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_6_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_6_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_6_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_11_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_11_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // 	'hh6011' => array(
  // 		'1' => array(
  // 			'id'=>"hh6011",//'花卉ID',
  // 			'name'=>"香槟玫瑰",//'花卉名称',
  // 			'grade'=>"1",//'花卉等级',
  // 			'grade2'=>"4",//'要求用户最底等级',
  // 			'grade3'=>"100",//'要求用户最高等级',
  // 			'gold'=>"40",//'种子价格',
  // 			'num'=>"1",//'花卉正常产量',
  // 			'num2'=>"30",//'浇水减少生长时间',
  // 			't'=>"90000",//'花卉正常生长时长',
  // 			'speed'=>"100",//'正常生长速度',
  // 			'exp'=>"130",//'增加花田经验数',
  // 			'exp2'=>"70",//'增加玩家经验数',
  // 			'pic'=>"ui://base/pic_7_5",//'花卉种子图片',
  // 			'ain'=>"",//'花卉种子动画',
  // 			'time'=>"0",//'种子时长',
  // 			'pic2'=>"ui://base/pic_6_1",//'花卉发芽期图片',
  // 			'ain2'=>"",//'花卉发芽期动画',
  // 			'time2'=>"30000",//'花卉发芽期时长',
  // 			'pic3'=>"ui://base/pic_6_2",//'花卉生长期图片',
  // 			'ain3'=>"",//'花卉生长期动画',
  // 			'time3'=>"30000",//'花卉发芽期时长',
  // 			'pic4'=>"ui://base/pic_6_3",//'花卉花苞期图片',
  // 			'ain4'=>"",//'花卉花苞期动画',
  // 			'time4'=>"30000",//'花卉发芽期时长',
  // 			'pic5'=>"ui://base/pic_6_4",//'花卉成熟期图片',
  // 			'ain5'=>"",//'花卉成熟期动画',
  // 			'time5'=>"0",//'花卉成熟期时长',
  // 			'pic6'=>"ui://base/pic_7_6",//'花卉收获时图片',
  // 			'ain6'=>"",//'花卉收获时动画',
  // 			'pic7'=>"ui://base/pic_7_6",//'花卉在仓库时图片',
  // 			'ain7'=>"",//'花卉在仓库时动画',
  // 		),
  // 	),
  // );
  //  //花卉数据
  // }



  // 
}



