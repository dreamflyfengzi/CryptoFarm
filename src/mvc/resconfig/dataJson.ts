﻿﻿export default class dataJson {

  private static _instance: dataJson;

  public static getInstance() {
    if (dataJson._instance == null) {
      dataJson._instance = new dataJson();
    }
    return dataJson._instance;
  }
  constructor() {
    this.init();
  }
  private SYS_STORE_INFO: any;//仓库配置
  private SYS_FACTORY_INFO: any;//工厂数据
  private SYS_FLOWER_PLANTS: any;//花卉数据
  private SYS_FLOWER_FIELD: any;//花田数据
  private SYS_FLOWER_WATER: any;//浇水数据
  private SYS_FLOWER_LOTTERY: any;//任务数据z
  private SYS_MATERIAL_INFO: any;//材料订单配置
  private SYS_MATERIAL_ORDER: any;//材料订单数据
  private SYS_FACTORY_GOOD: any;//工厂可生产的物品数据(这里的物品都会在 物品数据 里有配置的)
  private SYS_FLOWER_COMPOSTED: any;//施肥数据
  private SYS_FLOWER_MEMBER: any;//玩家初始数据
  private SYS_GOOD_INFO: any;//物品数据
  // private 

  // 种子配置
  private FARM_SEED_CONFIG:any;//种子的信息
  
  /**种子配置 */
  public GET_FARM_SEED_CONFIG(){
    return this.FARM_SEED_CONFIG;
  }

  
  /*** 仓库配置*/
  public GET_SYS_STORE_INFO() {
    return this.SYS_STORE_INFO;
  }
  /***材料订单配置*/
  public GET_SYS_MATERIAL_INFO() {
    return this.SYS_MATERIAL_INFO;
  }
  /**材料订单数据 */
  public GET_SYS_MATERIAL_ORDERLIST(){
     return this.SYS_MATERIAL_ORDER;
  }
  /*** 工厂数据*/
  public GET_SYS_FACTORY_INFO() {
    return this.SYS_FACTORY_INFO;
  }
  /*** 花卉数据*/
  public GET_SYS_FLOWER_PLANTS() {
    return this.SYS_FLOWER_PLANTS;
  }
  /*** 花田数据*/
  public GET_SYS_FLOWER_FIELD() {
    return this.SYS_FLOWER_FIELD;
  }
  /*** 浇水数据*/
  public GET_SYS_FLOWER_WATER() {
    return this.SYS_FLOWER_WATER;
  }
  /*** 任务数据*/
  public GET_SYS_FLOWER_LOTTERY() {
    return this.SYS_FLOWER_LOTTERY;
  }
  /*** 材料订单数据*/
  public GET_SYS_FLOWER_MATERIAL() {
    return this.SYS_MATERIAL_INFO;
  }
  /*** 工厂可生产的物品数据(这里的物品都会在 物品数据 里有配置的)*/
  public GET_SYS_FACTORY_GOOD() {
    return this.SYS_FACTORY_GOOD;
  }
  /*** 施肥数据*/
  public GET_SYS_FLOWER_COMPOSTED() {
    return this.SYS_FLOWER_COMPOSTED;
  }

  public GET_SYS_FLOWER_MEMBER() {
    return this.SYS_FLOWER_MEMBER;
  }
  /*** 物品数据*/
  public GET_SYS_GOOD_INFO() {
    return this.SYS_GOOD_INFO;
  }
  private init() {
    this.SYS_STORE_INFO = {
      "1": {
        "grade": "1",
        "grade2": "1",
        "num": "50",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "250"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "2": {
        "grade": "2",
        "grade2": "1",
        "num": "50",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "300"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "3": {
        "grade": "3",
        "grade2": "1",
        "num": "60",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "350"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "4": {
        "grade": "4",
        "grade2": "1",
        "num": "70",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "400"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "5": {
        "grade": "5",
        "grade2": "1",
        "num": "80",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "450"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "6": {
        "grade": "6",
        "grade2": "1",
        "num": "90",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "500"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "7": {
        "grade": "7",
        "grade2": "1",
        "num": "100",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "550"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "8": {
        "grade": "8",
        "grade2": "1",
        "num": "110",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "600"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "9": {
        "grade": "9",
        "grade2": "1",
        "num": "120",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "650"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      },
      "10": {
        "grade": "10",
        "grade2": "1",
        "num": "130",
        "num2": "999",
        "good": [
          {
            "id": "g001",
            "tools": [
              {
                "id": "tool001", //工具ID
                "num": "10" //需要工具数量
              },
              {
                "id": "tool002", //工具ID
                "num": "3" //需要工具数量
              },
              {
                "id": "tool004", //工具ID
                "num": "6" //需要工具数量
              }
            ],
            "num": "700"
          }
        ],
        "pic": "",
        "pic2": "",
        "ain": ""
      }
    }
    this.SYS_FACTORY_INFO = {
      "gc001": {
        "1": {
          "id": "gc001",
          "name": "工艺花坊",
          "grade": "1",
          "goods":{
            
          },
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "200",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "200",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory1",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "gc001",
          "name": "工艺花坊",
          "grade": "2",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "2",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory1",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "gc001",
          "name": "工艺花坊",
          "grade": "3",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "5",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory1",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "gc001",
          "name": "工艺花坊",
          "grade": "4",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "8",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory1",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "gc001",
          "name": "工艺花坊",
          "grade": "5",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "12",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory1",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        }
      },
      "gc002": {
        "1": {
          "id": "gc002",
          "name": "花样美食",
          "grade": "1",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "200",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "200",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "gc002",
          "name": "花样美食",
          "grade": "2",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "2",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "gc002",
          "name": "花样美食",
          "grade": "3",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "5",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "gc002",
          "name": "花样美食",
          "grade": "4",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "8",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "gc002",
          "name": "花样美食",
          "grade": "5",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "12",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        }
      },
      "gc003": {
        "1": {
          "id": "gc003",
          "name": "精油工坊",
          "grade": "1",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "200",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "200",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory3",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "gc003",
          "name": "精油工坊",
          "grade": "2",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "2",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory3",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "gc003",
          "name": "精油工坊",
          "grade": "3",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "5",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory3",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "gc003",
          "name": "精油工坊",
          "grade": "4",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "8",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory3",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "gc003",
          "name": "精油工坊",
          "grade": "5",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "12",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory3",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        }
      },
      "gc004": {
        "1": {
          "id": "gc004",
          "name": "清香花茶",
          "grade": "1",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "200",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "200",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "gc004",
          "name": "清香花茶",
          "grade": "2",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "2",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "gc004",
          "name": "清香花茶",
          "grade": "3",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "5",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "gc004",
          "name": "清香花茶",
          "grade": "4",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "8",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "gc004",
          "name": "清香花茶",
          "grade": "5",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "12",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        }
      },
      "gc005": {
        "1": {
          "id": "gc005",
          "name": "清香阁",
          "grade": "1",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "200",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "200",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "gc005",
          "name": "清香阁",
          "grade": "2",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "2",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "gc005",
          "name": "清香阁",
          "grade": "3",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "5",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "gc005",
          "name": "清香阁",
          "grade": "4",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "8",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "gc005",
          "name": "清香阁",
          "grade": "5",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "12",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        }
      },
      "gc006": {
        "1": {
          "id": "gc006",
          "name": "染料工坊",
          "grade": "1",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "200",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "200",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "gc006",
          "name": "染料工坊",
          "grade": "2",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "2",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "gc006",
          "name": "染料工坊",
          "grade": "3",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "5",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "gc006",
          "name": "染料工坊",
          "grade": "4",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "8",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "gc006",
          "name": "染料工坊",
          "grade": "5",
          "grade_up": "5",
          "grade2": "3",
          "exp": "0",
          "exp2": "300",
          "num": "0",
          "speed": "12",
          "num2": "300",
          "unlocknum": "0",
          "buy_num": "10",
          "buy_num2": "20",
          "act_num": "1",
          "all_num": "3",
          "pic": "factory/pic_factory2",
          "ain": "",
          "pic2": "",
          "ain2": "",
          "pic3": "",
          "ain3": "",
          "pic4": "",
          "ain4": ""
        }
      }
    }
    // 花卉数据
    this.SYS_FLOWER_PLANTS = {
      // '花卉ID' => array(
      //   '花卉等级' => array(
      //     'id'=>'花卉ID',
      //   'name'=>'花卉名称',
      //   'grade'=>'花卉等级',
      //   'grade2'=>'要求用户最底等级',
      //   'grade3'=>'要求用户最高等级',
      //   'num'=>'花卉正常产量',
      //   'num2'=>'浇水减少生长时间',
      //   't'=>'花卉正常生长时长',
      //   'speed'=>'正常生长速度',
      //   'exp'=>'增加花田经验数',
      //   'exp2'=>'增加玩家经验数',
      //   'pic'=>'花卉种子图片',
      //   'ain'=>'花卉种子动画',
      //   'time'=>'种子时长',
      //   'pic2'=>'花卉发芽期图片',
      //   'ain2'=>'花卉发芽期动画',
      //   'time2'=>'花卉发芽期时长',
      //   'pic3'=>'花卉生长期图片',
      //   'ain3'=>'花卉生长期动画',
      //   'time3'=>'花卉发芽期时长',
      //   'pic4'=>'花卉花苞期图片',
      //   'ain4'=>'花卉花苞期动画',
      //   'time4'=>'花卉发芽期时长',
      //   'pic5'=>'花卉成熟期图片',
      //   'ain5'=>'花卉成熟期动画',
      //   'time5'=>'花卉发芽期时长',
      //   'pic6'=>'花卉收获时图片',
      //   'ain6'=>'花卉收获时动画',
      //   'pic7'=>'花卉在仓库时图片',
      //   'ain7'=>'花卉在仓库时动画',
      //   ),
      // ),
      "hh6001": {
        "1": {
          "id": "hh6001",
          "name": "红玫瑰",
          "grade": "1",
          "grade2": "1",
          "grade3": "100",
          "gold": "0",
          "num": "1",
          "num2": "10",
          "t": "30000",
          "speed": "100",
          "exp": "50",
          "exp2": "50",
          "pic": "ui://base/pic_3_5",
          "ain": "",
          "time": "0",
          "pic2": "ui://base/pic_3_1",
          "ain2": "",
          "time2": "10000",
          "pic3": "ui://base/pic_3_3",
          "ain3": "",
          "time3": "10000",
          "pic4": "ui://base/pic_3_3",
          "ain4": "",
          "time4": "10000",
          "pic5": "ui://base/pic_3_4",
          "ain5": "",
          "time5": "0",
          "pic6": "ui://base/pic_3_6",
          "ain6": "",
          "pic7": "ui://base/pic_3_6",
          "ain7": ""
        }
      },
      // "hh6002": {
      //   "1": {
      //     "id": "hh6002",
      //     "name": "勿忘我",
      //     "grade": "1",
      //     "grade2": "1",
      //     "grade3": "100",
      //     "gold": "10",
      //     "num": "1",
      //     "num2": "15",
      //     "t": "60000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_4_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_4_1",
      //     "ain2": "",
      //     "time2": "20000",
      //     "pic3": "ui://base/pic_4_2",
      //     "ain3": "",
      //     "time3": "20000",
      //     "pic4": "ui://base/pic_4_3",
      //     "ain4": "",
      //     "time4": "20000",
      //     "pic5": "ui://base/pic_4_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_4_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_4_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6003": {
      //   "1": {
      //     "id": "hh6003",
      //     "name": "百合",
      //     "grade": "1",
      //     "grade2": "3",
      //     "grade3": "100",
      //     "gold": "20",
      //     "num": "5",
      //     "num2": "20",
      //     "t": "72000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_2_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_2_1",
      //     "ain2": "",
      //     "time2": "24000",
      //     "pic3": "ui://base/pic_2_2",
      //     "ain3": "",
      //     "time3": "24000",
      //     "pic4": "ui://base/pic_2_3",
      //     "ain4": "",
      //     "time4": "24000",
      //     "pic5": "ui://base/pic_2_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_2_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_2_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6004": {
      //   "1": {
      //     "id": "hh6004",
      //     "name": "紫罗兰",
      //     "grade": "1",
      //     "grade2": "3",
      //     "grade3": "100",
      //     "gold": "30",
      //     "num": "1",
      //     "num2": "20",
      //     "t": "75000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_5_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_5_1",
      //     "ain2": "",
      //     "time2": "25000",
      //     "pic3": "ui://base/pic_5_2",
      //     "ain3": "",
      //     "time3": "25000",
      //     "pic4": "ui://base/pic_5_3",
      //     "ain4": "",
      //     "time4": "25000",
      //     "pic5": "ui://base/pic_5_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_5_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_5_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6005": {
      //   "1": {
      //     "id": "hh6005",
      //     "name": "红花",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_6_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_6_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_6_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_6_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_6_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_6_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_6_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6006": {
      //   "1": {
      //     "id": "hh6006",
      //     "name": "澳洲腊梅",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_10_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_6_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_6_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_6_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_6_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_10_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_10_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6007": {
      //   "1": {
      //     "id": "hh6007",
      //     "name": "粉玫瑰",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_6_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_6_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_6_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_6_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_6_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_8_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_8_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6008": {
      //   "1": {
      //     "id": "hh6008",
      //     "name": "向日葵",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_1_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_1_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_1_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_1_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_1_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_1_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_1_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6009": {
      //   "1": {
      //     "id": "hh6009",
      //     "name": "雏菊",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_9_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_6_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_6_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_6_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_6_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_9_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_9_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6010": {
      //   "1": {
      //     "id": "hh6010",
      //     "name": "白桔梗",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_11_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_6_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_6_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_6_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_6_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_11_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_11_6",
      //     "ain7": ""
      //   }
      // },
      // "hh6011": {
      //   "1": {
      //     "id": "hh6011",
      //     "name": "香槟玫瑰",
      //     "grade": "1",
      //     "grade2": "4",
      //     "grade3": "100",
      //     "gold": "40",
      //     "num": "1",
      //     "num2": "30",
      //     "t": "90000",
      //     "speed": "100",
      //     "exp": "100",
      //     "exp2": "100",
      //     "pic": "ui://base/pic_7_5",
      //     "ain": "",
      //     "time": "0",
      //     "pic2": "ui://base/pic_6_1",
      //     "ain2": "",
      //     "time2": "30000",
      //     "pic3": "ui://base/pic_6_2",
      //     "ain3": "",
      //     "time3": "30000",
      //     "pic4": "ui://base/pic_6_3",
      //     "ain4": "",
      //     "time4": "30000",
      //     "pic5": "ui://base/pic_6_4",
      //     "ain5": "",
      //     "time5": "0",
      //     "pic6": "ui://base/pic_7_6",
      //     "ain6": "",
      //     "pic7": "ui://base/pic_7_6",
      //     "ain7": ""
      //   }
      // }
    }
    this.SYS_FLOWER_FIELD = {
      // '花田ID' => array(
      //   '花田等级' => array(
      //     'id'=>'花田ID',
      //     'name'=>'花田名称',
      //     'grade'=>'花田等级',
      //     'exp'=>'等级要求经验',
      //     'exp2'=>'升级时增加玩家经验数',
      //     'num'=>'花田正常产量加成百分比',
      //       'speed'=>'生长加速百分比',
      //       'num2'=>'升级要求的金币数',
      //       'unlocknum'=>'解锁消耗金币数'
      //       'pic'=>'花田正常图片',
      //     'ain'=>'花田正常动画',
      //     'pic2'=>'花田浇水图片',
      //     'ain2'=>'花田浇水动画',
      //     'pic3'=>'花田施肥图片',
      //     'ain3'=>'花田施肥动画',
      //     'pic4'=>'花田升级图片',
      //     'ain4'=>'花田升级动画'
      //   ),
      // ),
      "ht01": {
        "1": {
          "id": "ht01",
          "name": "花田1",
          "grade": "1",
          "exp": "0",
          "exp2": "0",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "0",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht01",
          "name": "花田1",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht01",
          "name": "花田1",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht01",
          "name": "花田1",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht01",
          "name": "花田1",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht01",
          "name": "花田1",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht02": {
        "1": {
          "id": "ht02",
          "name": "花田2",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "500",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht02",
          "name": "花田2",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht02",
          "name": "花田2",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht02",
          "name": "花田2",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht02",
          "name": "花田2",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht02",
          "name": "花田2",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht03": {
        "1": {
          "id": "ht03",
          "name": "花田3",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "1000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht03",
          "name": "花田3",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht03",
          "name": "花田3",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht03",
          "name": "花田3",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht03",
          "name": "花田3",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht03",
          "name": "花田3",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht04": {
        "1": {
          "id": "ht04",
          "name": "花田4",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "2000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht04",
          "name": "花田4",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht04",
          "name": "花田4",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht04",
          "name": "花田4",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht04",
          "name": "花田4",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht04",
          "name": "花田4",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht05": {
        "1": {
          "id": "ht05",
          "name": "花田5",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "3000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht05",
          "name": "花田5",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht05",
          "name": "花田5",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht05",
          "name": "花田5",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht05",
          "name": "花田5",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht05",
          "name": "花田5",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht06": {
        "1": {
          "id": "ht06",
          "name": "花田6",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "4000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht06",
          "name": "花田6",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht06",
          "name": "花田6",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht06",
          "name": "花田6",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht06",
          "name": "花田6",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht06",
          "name": "花田6",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht07": {
        "1": {
          "id": "ht07",
          "name": "花田7",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "5000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht07",
          "name": "花田7",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht07",
          "name": "花田7",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht07",
          "name": "花田7",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht07",
          "name": "花田7",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht07",
          "name": "花田7",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht08": {
        "1": {
          "id": "ht08",
          "name": "花田8",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "6000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht08",
          "name": "花田8",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht08",
          "name": "花田8",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht08",
          "name": "花田8",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht08",
          "name": "花田8",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht08",
          "name": "花田8",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      },
      "ht09": {
        "1": {
          "id": "ht09",
          "name": "花田9",
          "grade": "1",
          "exp": "0",
          "exp2": "10",
          "num": "0",
          "speed": "0",
          "num2": "0",
          "unlocknum": "10000",
          "pic": "ui://base/pic_lvdi",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "2": {
          "id": "ht09",
          "name": "花田9",
          "grade": "2",
          "exp": "300",
          "exp2": "30",
          "num": "0",
          "speed": "2",
          "num2": "1000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni1",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "3": {
          "id": "ht09",
          "name": "花田9",
          "grade": "3",
          "exp": "600",
          "exp2": "60",
          "num": "0",
          "speed": "4",
          "num2": "2000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni2",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "4": {
          "id": "ht09",
          "name": "花田9",
          "grade": "4",
          "exp": "1000",
          "exp2": "100",
          "num": "0",
          "speed": "6",
          "num2": "5000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni3",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "5": {
          "id": "ht09",
          "name": "花田9",
          "grade": "5",
          "exp": "2000",
          "exp2": "200",
          "num": "0",
          "speed": "8",
          "num2": "10000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni4",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        },
        "6": {
          "id": "ht09",
          "name": "花田9",
          "grade": "6",
          "exp": "5000",
          "exp2": "500",
          "num": "0",
          "speed": "10",
          "num2": "20000",
          "unlocknum": "0",
          "pic": "ui://base/pic_ni5",
          "ain": "",
          "pic2": "",
          "ain2": "jiaoshui",
          "pic3": "",
          "ain3": "shifei",
          "pic4": "",
          "ain4": ""
        }
      }
    }
    //浇水数据
    this.SYS_FLOWER_WATER = {
      // '浇水ID' => array(
      //   '浇水等级' => array(
      //     'id'=>'浇水ID',
      //     'name'=>'浇水名称',
      //     'grade'=>"浇水等级",
      //     'exp'=>'增加花田经验数',
      //     'exp2'=>'增加玩家经验数',
      //     't'=>'浇水有效时长'
      //   )
      // ),
      "js01": {
        "1": {
          "id": "js01",
          "name": "普通浇水",
          "pic": "",
          "ain": "",
          "num": "0",
          "grade": "1",
          "exp": "20",
          "exp2": "2",
          "t": "0"
        }
      }
    }
    //任务数据
    this.SYS_FLOWER_LOTTERY = {
      // '任务ID' => array(
      //   'id'=>'任务ID',
      //   'name'=>'任务名称',
      //   'type'=>'任务类型',
      //   "status"=>"1正常进行 2等待中",
      //   'await'=>'等待时间',
      //   'pic'=>'任务小图标',
      //   'pic2'=>'任务大图标',
      //   'ain'=>'接任务时动画',
      //   'ain2'=>'任务完成时提示动画',
      //   'ain3'=>'任务完成提交时动画',
      //   'grade'=>'要求用户最底等级',
      //   'grade2'=>'要求用户最高等级',
      //   'goods'=>array(//任务要求物品情况
      //     array('gooid'=>'要求物品ID', 'num'=>'要求物品数量'),
      //     array('gooid'=>'要求物品ID', 'num'=>'要求物品数量')
      //   ),
      //   'goods2'=>array(//一定要有某些物品才能接这个任务（接任务的限制）
      //     array('gooid'=>'物品ID', 'num'=>'物品数量'),
      //     array('gooid'=>'物品ID', 'num'=>'物品数量')
      //   ),
      //   'goods3'=>array(//任务奖励物品情况
      //     array('gooid'=>'物品ID', 'num'=>'物品数量'),
      //     array('gooid'=>'物品ID', 'num'=>'物品数量')
      //   ),
      //   'num'=>'每人接任务次数',
      //   't'=>'任务间隔(如果可以接多次的任务，则输入连接任务的时间间隔)',
      // ),
      "rw101": {
        "id": "rw101",
        "name": "酒店装饰",
        "status": "2",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "1",
        "grade2": "1",
        "goods": [

        ],
        "goods2": [

        ],
        "goods3": [

        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw201": {
        "id": "rw201",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "2",
        "grade2": "2",
        "goods": [
          {
            "id": "hh6001",
            "num": "1"
          },
          {
            "id": "hh6002",
            "num": "1"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "300"
          },
          {
            "id": "exp001",
            "num": "200"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw301": {
        "id": "rw301",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "3",
        "grade2": "3",
        "goods": [
          {
            "id": "hh6001",
            "num": "1"
          },
          {
            "id": "hh6002",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "400"
          },
          {
            "id": "exp001",
            "num": "300"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw302": {
        "id": "rw302",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "3",
        "grade2": "3",
        "goods": [
          {
            "id": "hh6002",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "500"
          },
          {
            "id": "exp001",
            "num": "400"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw401": {
        "id": "rw401",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "4",
        "grade2": "4",
        "goods": [
          {
            "id": "hh6003",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "600"
          },
          {
            "id": "exp001",
            "num": "500"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw402": {
        "id": "rw402",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "4",
        "grade2": "4",
        "goods": [
          {
            "id": "hh6001",
            "num": "2"
          },
          {
            "id": "hh6003",
            "num": "1"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "700"
          },
          {
            "id": "exp001",
            "num": "600"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw403": {
        "id": "rw403",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "4",
        "grade2": "4",
        "goods": [
          {
            "id": "hh6001",
            "num": "2"
          },
          {
            "id": "hh6003",
            "num": "1"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "800"
          },
          {
            "id": "exp001",
            "num": "700"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw501": {
        "id": "rw501",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "5",
        "grade2": "5",
        "goods": [
          {
            "id": "hh6003",
            "num": "2"
          },
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "hh6005",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "900"
          },
          {
            "id": "exp001",
            "num": "800"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw502": {
        "id": "rw502",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "5",
        "grade2": "5",
        "goods": [
          {
            "id": "wp5011",
            "num": "1"
          },
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "hh6005",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw503": {
        "id": "rw503",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "5",
        "grade2": "5",
        "goods": [
          {
            "id": "wp5011",
            "num": "1"
          },
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "hh6005",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw504": {
        "id": "rw504",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "5",
        "grade2": "5",
        "goods": [
          {
            "id": "wp5011",
            "num": "1"
          },
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "hh6005",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw601": {
        "id": "rw601",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "6",
        "grade2": "6",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw602": {
        "id": "rw602",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "6",
        "grade2": "6",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw603": {
        "id": "rw603",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "6",
        "grade2": "6",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw604": {
        "id": "rw604",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "6",
        "grade2": "6",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw605": {
        "id": "rw605",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "6",
        "grade2": "6",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw701": {
        "id": "rw701",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "7",
        "grade2": "7",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw702": {
        "id": "rw702",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "7",
        "grade2": "7",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw703": {
        "id": "rw703",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "7",
        "grade2": "7",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw704": {
        "id": "rw704",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "7",
        "grade2": "7",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw705": {
        "id": "rw705",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "7",
        "grade2": "7",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw801": {
        "id": "rw801",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "8",
        "grade2": "8",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw802": {
        "id": "rw802",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "8",
        "grade2": "8",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw803": {
        "id": "rw803",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "8",
        "grade2": "8",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw804": {
        "id": "rw804",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "8",
        "grade2": "8",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw805": {
        "id": "rw805",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "8",
        "grade2": "8",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw901": {
        "id": "rw901",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "9",
        "grade2": "9",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw902": {
        "id": "rw902",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "9",
        "grade2": "9",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw903": {
        "id": "rw903",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "9",
        "grade2": "9",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw904": {
        "id": "rw904",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "9",
        "grade2": "9",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw905": {
        "id": "rw905",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "9",
        "grade2": "9",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1001": {
        "id": "rw1001",
        "name": "艺术摄影",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "10",
        "grade2": "10",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1002": {
        "id": "rw1002",
        "name": "酒店装饰",
        "status": "1",
        "await": "1000",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "10",
        "grade2": "10",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1003": {
        "id": "rw1003",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "10",
        "grade2": "10",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1004": {
        "id": "rw1004",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "10",
        "grade2": "10",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1005": {
        "id": "rw1005",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "10",
        "grade2": "10",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1101": {
        "id": "rw1101",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "11",
        "grade2": "11",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1102": {
        "id": "rw1102",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "11",
        "grade2": "11",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1103": {
        "id": "rw1103",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "11",
        "grade2": "11",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1104": {
        "id": "rw1104",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "11",
        "grade2": "11",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1105": {
        "id": "rw1105",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "11",
        "grade2": "11",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1201": {
        "id": "rw1201",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "12",
        "grade2": "12",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1202": {
        "id": "rw1202",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "12",
        "grade2": "12",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1203": {
        "id": "rw1203",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "12",
        "grade2": "12",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1204": {
        "id": "rw1204",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "12",
        "grade2": "12",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1205": {
        "id": "rw1205",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "12",
        "grade2": "12",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1301": {
        "id": "rw1301",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "13",
        "grade2": "13",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1302": {
        "id": "rw1302",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "13",
        "grade2": "13",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1303": {
        "id": "rw1303",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "13",
        "grade2": "13",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1304": {
        "id": "rw1304",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "13",
        "grade2": "13",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1305": {
        "id": "rw1305",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "13",
        "grade2": "13",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1401": {
        "id": "rw1401",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "14",
        "grade2": "14",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1402": {
        "id": "rw1402",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "14",
        "grade2": "14",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1403": {
        "id": "rw1403",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "14",
        "grade2": "14",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1404": {
        "id": "rw1404",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "14",
        "grade2": "14",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1405": {
        "id": "rw1405",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "14",
        "grade2": "14",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1501": {
        "id": "rw1501",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "15",
        "grade2": "15",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1502": {
        "id": "rw1502",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "15",
        "grade2": "15",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1503": {
        "id": "rw1503",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "15",
        "grade2": "15",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1504": {
        "id": "rw1504",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "15",
        "grade2": "15",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1505": {
        "id": "rw1505",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "15",
        "grade2": "15",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1601": {
        "id": "rw1601",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "16",
        "grade2": "16",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1602": {
        "id": "rw1602",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "16",
        "grade2": "16",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1603": {
        "id": "rw1603",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "16",
        "grade2": "16",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1604": {
        "id": "rw1604",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "16",
        "grade2": "16",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1605": {
        "id": "rw1605",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "16",
        "grade2": "16",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1701": {
        "id": "rw1701",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "17",
        "grade2": "17",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1702": {
        "id": "rw1702",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "17",
        "grade2": "17",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1703": {
        "id": "rw1703",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "17",
        "grade2": "17",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1704": {
        "id": "rw1704",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "17",
        "grade2": "17",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1705": {
        "id": "rw1705",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "17",
        "grade2": "17",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1801": {
        "id": "rw1801",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "18",
        "grade2": "18",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1802": {
        "id": "rw1802",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "18",
        "grade2": "18",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1803": {
        "id": "rw1803",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "18",
        "grade2": "18",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1804": {
        "id": "rw1804",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "18",
        "grade2": "18",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1805": {
        "id": "rw1805",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "18",
        "grade2": "18",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1901": {
        "id": "rw1901",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "19",
        "grade2": "19",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1902": {
        "id": "rw1902",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "19",
        "grade2": "19",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1903": {
        "id": "rw1903",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "19",
        "grade2": "19",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1904": {
        "id": "rw1904",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "19",
        "grade2": "19",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw1905": {
        "id": "rw1905",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "19",
        "grade2": "19",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw2001": {
        "id": "rw2001",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "20",
        "grade2": "20",
        "goods": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw2002": {
        "id": "rw2002",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "20",
        "grade2": "20",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw2003": {
        "id": "rw2003",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "20",
        "grade2": "20",
        "goods": [
          {
            "id": "hh6002",
            "num": "1"
          },
          {
            "id": "wp5012",
            "num": "2"
          },
          {
            "id": "wp5014",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw2004": {
        "id": "rw2004",
        "name": "酒店装饰",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "20",
        "grade2": "20",
        "goods": [
          {
            "id": "hh6004",
            "num": "1"
          },
          {
            "id": "wp5011",
            "num": "2"
          },
          {
            "id": "wp5015",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      },
      "rw2005": {
        "id": "rw2005",
        "name": "艺术摄影",
        "type": "1",
        "pic": "",
        "pic2": "",
        "ain": "",
        "ain2": "",
        "ain3": "",
        "grade": "20",
        "grade2": "20",
        "goods": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "2"
          },
          {
            "id": "wp5012",
            "num": "2"
          }
        ],
        "goods2": [

        ],
        "goods3": [
          {
            "id": "g001",
            "num": "1000"
          },
          {
            "id": "exp001",
            "num": "900"
          }
        ],
        "num": "1",
        "t": "28800",
        "weight": "100"
      }
    }
    //材料订单配置
    this.SYS_MATERIAL_INFO = {
      "MATERIAL301": {
        "grade":"3",//解锁要求等级
        "gold":'100',//解锁金额
        "is_lock":"1",//1 已解锁 2 未解锁
        "lock_num":"200",//解锁钻石
        "get_num":'20',
        "t":0
      },
      "MATERIAL302": {
        "grade":"3",//解锁要求等级
        "gold":'100',//解锁金额
        "is_lock":"1",//1 已解锁 2 未解锁
        "lock_num":"200",//解锁钻石
        "get_num":'20',
        "t":2999
      },
      "MATERIAL303": {
        "grade":"8",//解锁要求等级
        "gold":'500',//解锁金额
        "is_lock":"2",//1 已解锁 2 未解锁
        "lock_num":"200",//解锁钻石
        "get_num":'20',
        "t":0
      },
    }
    //材料订单数据
    this.SYS_MATERIAL_ORDER = {
      "MATERIAL301": {
          "id":"od1301",
          "status":"0",//0正常 1返回的
          "t":"1000",
          "goods": [
            {
              "id": "product01",
              "num": "10",
              "status":"1"//已装载
            },
            {
              "id": "product02",
              "num": "1",
              "status":"0"//未装载
            },
            {
              "id": "product01",
              "num": "1",
              "status":"0"//未装载
            },
            {
              "id": "product02",
              "num": "3",
              "status":"0"//未装载
            },
            {
              "id": "product01",
              "num": "8",
              "status":"0"//未装载
            }
          ],
          "reback":[
            {
              "id": "tool001",
              "num": "1"
            },
            {
              "id": "tool001",
              "num": "1"
            }
          ],
        
      },
      "MATERIAL302":{
        "id":"od1301",
        "status":"1",//0正常 1返回的
        "t":"1000",
        "goods": [
          {
            "id": "hh6001",
            "num": "1"
          },
          {
            "id": "hh6002",
            "num": "1"
          }
        ],
        "reback":[
          {
            "id": "tool001",
            "num": "1"
          },
          {
            "id": "tool001",
            "num": "1"
          }
        ],
      },
      "MATERIAL303":{

      }
    }
    this.SYS_FACTORY_GOOD = {
      "gc001": {
        "wp5011": {
          "id": "wp5011",
          "name": "一心一意",
          "grade": "1",
          "grade2": "1",
          "speed": "100",
          "t": "10000",
          "good": [
            {
              "id": "hh6001",
              "num": "3"
            },
            {
              "id": "hh6002",
              "num": "1"
            }
          ]
        },
        "wp5012": {
          "id": "wp5012",
          "name": "青青子吟",
          "grade": "1",
          "grade2": "2",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6003",
              "num": "6"
            },
            {
              "id": "hh6006",
              "num": "2"
            }
          ]
        },
        "wp5013": {
          "id": "wp5013",
          "name": "幸福约定",
          "grade": "1",
          "grade2": "4",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6007",
              "num": "12"
            },
            {
              "id": "hh6004",
              "num": "5"
            }
          ]
        },
        "wp5014": {
          "id": "wp5014",
          "name": "情意暖暖",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6008",
              "num": "3"
            },
            {
              "id": "hh6009",
              "num": "2"
            },
            {
              "id": "hh6010",
              "num": "5"
            }
          ]
        },
        "wp5015": {
          "id": "wp5015",
          "name": "连连深情",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        }
      },
      "gc002": {
        "wp5041": {
          "id": "wp5041",
          "name": "鲜花饼",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "10000",
          "good": [
            {
              "id": "hh6001",
              "num": "5"
            },
            {
              "id": "hh6002",
              "num": "2"
            }
          ]
        },
        "wp5042": {
          "id": "wp5042",
          "name": "槐花酱",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6003",
              "num": "6"
            },
            {
              "id": "hh6006",
              "num": "2"
            }
          ]
        },
        "wp5043": {
          "id": "wp5043",
          "name": "桂花酱",
          "grade": "1",
          "grade2": "4",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6007",
              "num": "12"
            },
            {
              "id": "hh6004",
              "num": "5"
            }
          ]
        },
        "wp5044": {
          "id": "wp5044",
          "name": "玫瑰酱",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6008",
              "num": "3"
            },
            {
              "id": "hh6009",
              "num": "2"
            },
            {
              "id": "hh6010",
              "num": "5"
            }
          ]
        },
        "wp5045": {
          "id": "wp5045",
          "name": "鲜花养颜羹",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        }
      },
      "gc003": {
        "wp5051": {
          "id": "wp5051",
          "name": "香橙花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "10000",
          "good": [
            {
              "id": "hh6001",
              "num": "2"
            },
            {
              "id": "hh6002",
              "num": "2"
            }
          ]
        },
        "wp5052": {
          "id": "wp5052",
          "name": "合欢花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6003",
              "num": "4"
            },
            {
              "id": "hh6006",
              "num": "2"
            }
          ]
        },
        "wp5053": {
          "id": "wp5053",
          "name": "玫瑰花精油",
          "grade": "1",
          "grade2": "4",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6007",
              "num": "3"
            },
            {
              "id": "hh6004",
              "num": "5"
            }
          ]
        },
        "wp5054": {
          "id": "wp5054",
          "name": "茉莉花精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6008",
              "num": "3"
            },
            {
              "id": "hh6009",
              "num": "2"
            },
            {
              "id": "hh6010",
              "num": "5"
            }
          ]
        },
        "wp5055": {
          "id": "wp5055",
          "name": "薰衣草精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        },
        "wp5056": {
          "id": "wp5056",
          "name": "栀子花精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "2"
            },
            {
              "id": "hh6003",
              "num": "1"
            }
          ]
        },
        "wp5057": {
          "id": "wp5057",
          "name": "紫罗兰精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "2"
            },
            {
              "id": "hh6003",
              "num": "1"
            }
          ]
        }
      },
      "gc004": {
        "wp5051": {
          "id": "wp5051",
          "name": "香橙花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "10000",
          "good": [
            {
              "id": "hh6001",
              "num": "5"
            },
            {
              "id": "hh6002",
              "num": "2"
            }
          ]
        },
        "wp5052": {
          "id": "wp5052",
          "name": "合欢花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6003",
              "num": "6"
            },
            {
              "id": "hh6006",
              "num": "2"
            }
          ]
        },
        "wp5053": {
          "id": "wp5053",
          "name": "玫瑰花精油",
          "grade": "1",
          "grade2": "4",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6007",
              "num": "12"
            },
            {
              "id": "hh6004",
              "num": "5"
            }
          ]
        },
        "wp5054": {
          "id": "wp5054",
          "name": "茉莉花精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6008",
              "num": "3"
            },
            {
              "id": "hh6009",
              "num": "2"
            },
            {
              "id": "hh6010",
              "num": "5"
            }
          ]
        },
        "wp5055": {
          "id": "wp5055",
          "name": "薰衣草精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        },
        "wp5056": {
          "id": "wp5056",
          "name": "紫罗兰精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        }
      },
      "gc005": {
        "wp5051": {
          "id": "wp5051",
          "name": "香橙花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "10000",
          "good": [
            {
              "id": "hh6001",
              "num": "5"
            },
            {
              "id": "hh6002",
              "num": "2"
            }
          ]
        },
        "wp5052": {
          "id": "wp5052",
          "name": "合欢花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6003",
              "num": "6"
            },
            {
              "id": "hh6006",
              "num": "2"
            }
          ]
        },
        "wp5053": {
          "id": "wp5053",
          "name": "玫瑰花精油",
          "grade": "1",
          "grade2": "4",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6007",
              "num": "12"
            },
            {
              "id": "hh6004",
              "num": "5"
            }
          ]
        },
        "wp5054": {
          "id": "wp5054",
          "name": "茉莉花精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6008",
              "num": "3"
            },
            {
              "id": "hh6009",
              "num": "2"
            },
            {
              "id": "hh6010",
              "num": "5"
            }
          ]
        },
        "wp5055": {
          "id": "wp5055",
          "name": "薰衣草精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        },
        "wp5056": {
          "id": "wp5056",
          "name": "紫罗兰精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        }
      },
      "gc006": {
        "wp5051": {
          "id": "wp5051",
          "name": "香橙花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "10000",
          "good": [
            {
              "id": "hh6001",
              "num": "5"
            },
            {
              "id": "hh6002",
              "num": "2"
            }
          ]
        },
        "wp5052": {
          "id": "wp5052",
          "name": "合欢花精油",
          "grade": "1",
          "grade2": "3",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6003",
              "num": "6"
            },
            {
              "id": "hh6006",
              "num": "2"
            }
          ]
        },
        "wp5053": {
          "id": "wp5053",
          "name": "玫瑰花精油",
          "grade": "1",
          "grade2": "4",
          "speed": "100",
          "t": "12000",
          "good": [
            {
              "id": "hh6007",
              "num": "12"
            },
            {
              "id": "hh6004",
              "num": "5"
            }
          ]
        },
        "wp5054": {
          "id": "wp5054",
          "name": "茉莉花精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6008",
              "num": "3"
            },
            {
              "id": "hh6009",
              "num": "2"
            },
            {
              "id": "hh6010",
              "num": "5"
            }
          ]
        },
        "wp5055": {
          "id": "wp5055",
          "name": "薰衣草精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        },
        "wp5056": {
          "id": "wp5056",
          "name": "紫罗兰精油",
          "grade": "1",
          "grade2": "5",
          "speed": "100",
          "t": "14000",
          "good": [
            {
              "id": "hh6011",
              "num": "10"
            },
            {
              "id": "hh6003",
              "num": "3"
            }
          ]
        }
      }
    }
    //  施肥数据
    this.SYS_FLOWER_COMPOSTED = {
      // '施肥ID' => array(
      //   '施肥等级' => array(
      //      'id'=>'施肥ID',
      //     'name'=>'施肥名称',
      //     'grade'=>'施肥等级',
      //     'num'=>'施肥增加产量',
      //     'num2'=>'施肥加快生长时间百份比',
      //     'exp'=>'增加花田经验数',
      //     'exp2'=>'增加玩家经验数',
      //     't'=>'施肥有效时长'
      //   ),
      // ),
      "sf01": {
        "1": {
          "id": "sf01",
          "name": "普通施肥",
          "pic": "",
          "ain": "",
          "grade": "1",
          "num": "0",
          "num2": "5",
          "num3": "10",
          "exp": "100",
          "exp2": "10",
          "t": "7200"
        }
      }
    }
    this.SYS_FLOWER_MEMBER = {
      // '玩家等级' => array(
      //   'grade'=>'玩家等级',
      //   'num'=>'玩家增加金币数量',
      //   'field'=>'玩家可开花田数',
      //   'store'=>'玩家仓库大小',
      //   'store_num'=>'仓库每格可放物品的数量'
      // ),
      "1": {
        "grade": "1",
        "num": "10000",
        "field": "2",
        "store": "10",
        "lottery_num": "1",
        "store_num": "1000",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6001",
            "num": "1"
          },
          {
            "id": "hh6002",
            "num": "1"
          }
        ]
      },
      "2": {
        "grade": "2",
        "num": "0",
        "field": "3",
        "store": "0",
        "lottery_num": "2",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5011",
            "num": "1"
          },
          {
            "id": "hh6003",
            "num": "2"
          }
        ]
      },
      "3": {
        "grade": "3",
        "num": "0",
        "field": "4",
        "store": "0",
        "lottery_num": "2",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5012",
            "num": "1"
          },
          {
            "id": "wp5013",
            "num": "1"
          }
        ]
      },
      "4": {
        "grade": "4",
        "num": "0",
        "field": "5",
        "store": "0",
        "lottery_num": "3",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5013",
            "num": "1"
          },
          {
            "id": "hh6004",
            "num": "1"
          }
        ]
      },
      "5": {
        "grade": "5",
        "num": "0",
        "field": "6",
        "store": "0",
        "lottery_num": "3",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6005",
            "num": "2"
          }
        ]
      },
      "6": {
        "grade": "6",
        "num": "0",
        "field": "7",
        "store": "0",
        "lottery_num": "4",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5014",
            "num": "1"
          }
        ]
      },
      "7": {
        "grade": "7",
        "num": "0",
        "field": "8",
        "store": "0",
        "lottery_num": "4",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5015",
            "num": "1"
          }
        ]
      },
      "8": {
        "grade": "8",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "4",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "hh6007",
            "num": "1"
          }
        ]
      },
      "9": {
        "grade": "9",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "4",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6006",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "1"
          }
        ]
      },
      "10": {
        "grade": "10",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5013",
            "num": "1"
          },
          {
            "id": "hh6009",
            "num": "1"
          }
        ]
      },
      "11": {
        "grade": "11",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6010",
            "num": "1"
          },
          {
            "id": "wp5014",
            "num": "1"
          }
        ]
      },
      "12": {
        "grade": "12",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6012",
            "num": "1"
          },
          {
            "id": "wp5015",
            "num": "1"
          }
        ]
      },
      "13": {
        "grade": "13",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6013",
            "num": "1"
          },
          {
            "id": "hh6014",
            "num": "1"
          }
        ]
      },
      "14": {
        "grade": "14",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6015",
            "num": "1"
          },
          {
            "id": "hh6016",
            "num": "1"
          }
        ]
      },
      "15": {
        "grade": "15",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5041",
            "num": "1"
          },
          {
            "id": "wp5042",
            "num": "1"
          }
        ]
      },
      "16": {
        "grade": "16",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5045",
            "num": "2"
          },
          {
            "id": "wp5041",
            "num": "1"
          }
        ]
      },
      "17": {
        "grade": "17",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5042",
            "num": "2"
          },
          {
            "id": "wp5043",
            "num": "1"
          }
        ]
      },
      "18": {
        "grade": "18",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5044",
            "num": "1"
          },
          {
            "id": "wp5045",
            "num": "1"
          }
        ]
      },
      "19": {
        "grade": "19",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "wp5051",
            "num": "2"
          },
          {
            "id": "hh6007",
            "num": "1"
          }
        ]
      },
      "20": {
        "grade": "20",
        "num": "0",
        "field": "9",
        "store": "0",
        "lottery_num": "5",
        "store_num": "0",
        "next_exp": "100",
        "up_data": [
          {
            "id": "hh6006",
            "num": "2"
          },
          {
            "id": "wp5052",
            "num": "1"
          }
        ]
      }
    }
    this.SYS_GOOD_INFO = {
      "g001": {
        "id": "g001",
        "name": "金币",
        "type": "1",
        "grade": "0",
        "grade2": "100",
        "pic": "ui://base/pic_zuanshi",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "1",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "0",
        "exp2": "0",
        "t": "0",
        "info": "这是金币"
      },
      "exp001": {
        "id": "exp001",
        "name": "玩家经验",
        "type": "2",
        "grade": "0",
        "grade2": "100",
        "pic": "ui://base/pic_jingyan",
        "pic2": "",
        "ain": "",
        "num": "0",
        "num2": "0",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "1",
        "exp2": "0",
        "t": "0",
        "info": "玩家经验"
      },
      "htexp001": {
        "id": "htexp001",
        "name": "花田经验",
        "type": "3",
        "grade": "0",
        "grade2": "100",
        "pic": "ui://base/pic_exp",
        "pic2": "",
        "ain": "",
        "num": "0",
        "num2": "0",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "0",
        "exp2": "1",
        "t": "0",
        "info": "花田经验"
      },
      "js01": {
        "id": "js01",
        "name": "浇水",
        "type": "3",
        "grade": "0",
        "grade2": "100",
        "pic": "ui://base/pic_jiaoshui",
        "pic2": "",
        "ain": "",
        "num": "0",
        "num2": "0",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "20",
        "exp2": "2",
        "t": "0",
        "info": "浇水"
      },
      "sf01": {
        "id": "sf01",
        "name": "施肥",
        "type": "4",
        "grade": "0",
        "grade2": "100",
        "pic": "ui://base/pic_shifei",
        "pic2": "",
        "ain": "",
        "num": "10",
        "num2": "10",
        "speed": "5",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "10",
        "t": "7200",
        "info": "施肥"
      },
      "wp5011": {
        "id": "wp5011",
        "name": "一心一意",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet1",
        "pic2": "ui://base/pic_bouquet1",
        "ain": "",
        "num": "1",
        "num2": "20",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "30",
        "exp2": "0",
        "t": "0",
        "info": "漂亮的花束"
      },
      "wp5012": {
        "id": "wp5012",
        "name": "亲亲子吟",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet2",
        "pic2": "ui://base/pic_bouquet2",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "漂亮的花束"
      },
      "wp5013": {
        "id": "wp5013",
        "name": "幸福约定",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet3",
        "pic2": "ui://base/pic_bouquet3",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "漂亮的花束"
      },
      "wp5014": {
        "id": "wp5014",
        "name": "情谊暖暖",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet4",
        "pic2": "ui://base/pic_bouquet4",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "漂亮的花束"
      },
      "wp5015": {
        "id": "wp5015",
        "name": "连连深情",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "漂亮的花束"
      },
      "wp5041": {
        "id": "wp5041",
        "name": "鲜花饼",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花一样的美食"
      },
      "wp5042": {
        "id": "wp5042",
        "name": "槐花酱",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花一样的美食"
      },
      "wp5043": {
        "id": "wp5043",
        "name": "桂花酱",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花一样的美食"
      },
      "wp5044": {
        "id": "wp5044",
        "name": "玫瑰酱",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花一样的美食"
      },
      "wp5045": {
        "id": "wp5045",
        "name": "鲜花养颜羹",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花一样的美食"
      },
      "wp5051": {
        "id": "wp5051",
        "name": "香橙花精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "wp5052": {
        "id": "wp5052",
        "name": "合欢花精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "wp5053": {
        "id": "wp5053",
        "name": "玫瑰花精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "wp5054": {
        "id": "wp5054",
        "name": "茉莉花精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "wp5055": {
        "id": "wp5055",
        "name": "薰衣草精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "wp5056": {
        "id": "wp5056",
        "name": "栀子花精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "wp5057": {
        "id": "wp5057",
        "name": "紫罗兰精油",
        "type": "5",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_bouquet5",
        "pic2": "ui://base/pic_bouquet5",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "40",
        "exp2": "0",
        "t": "0",
        "info": "花卉的精华"
      },
      "hh6001": {
        "id": "hh6001",
        "name": "红玫瑰",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_3_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "50",
        "exp2": "50",
        "t": "0",
        "info": "花卉"
      },
      "hh6002": {
        "id": "hh6002",
        "name": "勿忘我",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_4_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6003": {
        "id": "hh6003",
        "name": "百合",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_2_6",
        "pic2": "",
        "ain": "",
        "num": "5",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "漂花卉"
      },
      "hh6004": {
        "id": "hh6004",
        "name": "紫罗兰",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_5_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6005": {
        "id": "hh6005",
        "name": "红花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_6_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6006": {
        "id": "hh6006",
        "name": "澳洲腊梅",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_10_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6007": {
        "id": "hh6007",
        "name": "粉玫瑰",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_8_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6008": {
        "id": "hh6008",
        "name": "向日葵",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_1_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6009": {
        "id": "hh6009",
        "name": "雏菊",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_9_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6010": {
        "id": "hh6010",
        "name": "白桔梗",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_11_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6011": {
        "id": "hh6011",
        "name": "香槟玫瑰",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6012": {
        "id": "hh6012",
        "name": "玉兰",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6013": {
        "id": "hh6013",
        "name": "槐花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6014": {
        "id": "hh6014",
        "name": "桂花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6015": {
        "id": "hh6015",
        "name": "康乃馨",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6016": {
        "id": "hh6016",
        "name": "香橙花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6017": {
        "id": "hh6017",
        "name": "合欢花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6018": {
        "id": "hh6018",
        "name": "茉莉花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6019": {
        "id": "hh6019",
        "name": "薰衣草",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      },
      "hh6020": {
        "id": "hh6020",
        "name": "栀子花",
        "type": "6",
        "grade": "1",
        "grade2": "100",
        "pic": "ui://base/pic_7_6",
        "pic2": "",
        "ain": "",
        "num": "1",
        "num2": "30",
        "speed": "0",
        "speed2": "0",
        "speed_num": "0",
        "speed2_num": "0",
        "exp": "100",
        "exp2": "100",
        "t": "0",
        "info": "花卉"
      }
    }
    
    //种子数据
    this.FARM_SEED_CONFIG = {
      "wheat":{
        "id":"Wheat",
        "name":"小麦",
        "lowestgrade":"1",
        "t":"120",
        "speed":"0",
        "exp":"3",
        "pic":"",
        "price":"20",
        "instage":"0"//生长阶段
      },
      "corn":{},
      "sugarcane":{},
      "soybean":{},
      "rice":{},
      "carrot":{},
      "potato":{},
      "tomato":{},
      "vegetables":{},
      "pepper":{},
      "strawberry":{},
      "cotton":{},
      "coffee":{},
      "cocoa":{},
      "lily":{},
      "peony":{}
    }
  }
}