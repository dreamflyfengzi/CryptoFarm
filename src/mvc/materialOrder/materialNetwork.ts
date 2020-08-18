/**
* name 
*/
import materialController from './materialController'
import dataGlobal from '../resconfig/dataGlobal'
import infoController from '../info/infoController'
export default class orderNetwork {
  constructor() {
  }
  //获取当天订单列表的协议
  public MaterialInfoBak(data) {
    data = {
      "ga": "material_info_bak",
      "gd": [
        {
          "aterial_id": "material101",
          "task_uid": "456489646464",
          "task_uid_pic": "aaa",
          "type": "1",
          "is_ok": "1"
        },
        {
          "aterial_id": "material201",
          "task_uid": "456489646464",
          "task_uid_pic": "aaa",
          "type": "1",
          "is_ok": "1"
        },
        {
          "aterial_id": "material301",
          "task_uid": "456489646464",
          "task_uid_pic": "aaa",
          "type": "1",
          "is_ok": "1"
        },
      ],
      "code": 1
    };
    //初始化页面
    data = data.gd;
    //保存任务的配置
    dataGlobal.getInstance().setMaterialInfo(data, true);
    //查询物品信息
    materialController.getInstance().sendGood(data);
  }
  //获取到物品
  public SendGoodBak(data) {
    data = {
      "ga": "send_good_material_bak", "code": 1,
      "gd":
      {
        "hh6001": { "id": "hh6001", "num": 1 },
        "hh6002": { "id": "hh6002", "num": 10 }, 
        "hh6003": { "id": "hh6003", "num": 10 }, 
        "hh6004": { "id": "hh6004", "num": 10 }
      }
    };
    data = data.gd;
    //保存物品信息
    dataGlobal.getInstance().setUserGoodInfo(data);
    //设置定时器
    // materialController.getInstance().model.setOrderTimeout();
    //展示任务列表详情
    materialController.getInstance().setMaterialList();

  }
  //提交订单的协议
  public MaterialActBak(data) {
    // data = {"ga":"lottery_act_bak","gd":{"lottery_id":"rw002","task_uid":"5445646","task_uid_pic":"54545645646","type":"1","is_ok":"2","msg":"\u63d0\u4ea4\u8ba2\u5355\u6210\u529f"},"code":1};
    data = data.gd;
    //更新一下任务数据
    var tmp_arr = [];
    tmp_arr.push(data);
    dataGlobal.getInstance().setlotteryInfo(tmp_arr);
    //更新一下任务
    // materialController.getInstance().sendGood(tmp_arr);
    // materialController.getInstance().clickOrderItem(data.lottery_id);
    //更新用户信息
    infoController.getInstance().getUserInfo()
  }

}