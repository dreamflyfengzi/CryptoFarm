/**
* name 
*/
import orderController from './orderController'
import dataGlobal from '../resconfig/dataGlobal'
export default class orderNetwork {
  constructor() {
  }
  //获取当天订单列表的协议
  public LotteryInfoBak(data) {
    console.log("获取当天订单列表的协议",data)
    console.log("获取当天订单列表的协议",data)
    console.log("获取当天订单列表的协议",data)
    console.log("获取当天订单列表的协议",data)
    console.log("获取当天订单列表的协议",data)
    // console.log(data);
    // data = {
    //   "ga":"lottery_info_bak",
    //   "gd":[
    //     {
    //       "lottery_id":"rw101",
    //       "task_uid":"456489646464",
    //       "task_uid_pic":"aaa",
    //       "type":"1",
    //       "is_ok":"1"
    //     },
    //     {
    //       "lottery_id":"rw201",
    //       "task_uid":"456489646464",
    //       "task_uid_pic":"aaa",
    //       "type":"1",
    //       "is_ok":"1"
    //     },
    //     {
    //       "lottery_id":"rw301",
    //       "task_uid":"456489646464",
    //       "task_uid_pic":"aaa",
    //       "type":"1",
    //       "is_ok":"1"
    //     },
    //   ],
    //   "code":1
    // };
    //初始化页面
    data = data.gd;
    //保存任务的配置
    dataGlobal.getInstance().setlotteryInfo(data, true);
    //查询物品信息
    orderController.getInstance().sendGood(data);
  }
  //获取到物品
  public SendGoodBak(data) {
    // data = {"ga":"send_good_bak","code":1,
    // "gd":
    // {"hh6001":
    // {"id":"hh6001","num":1},
    // "hh6002":{"id":"hh6002","num":10},"hh6003":{"id":"hh6003","num":10},"hh6004":{"id":"hh6004","num":10}}};
    data = data.gd;
    //保存物品信息
    dataGlobal.getInstance().setUserGoodInfo(data);
    //设置定时器
    orderController.getInstance().model.setOrderTimeout();
    //展示任务列表详情
    orderController.getInstance().setLotteryList();

  }
  //提交订单的协议
  public LotteryActBak(data) {
    // data = {"ga":"lottery_act_bak","gd":{"lottery_id":"rw002","task_uid":"5445646","task_uid_pic":"54545645646","type":"1","is_ok":"2","msg":"\u63d0\u4ea4\u8ba2\u5355\u6210\u529f"},"code":1};
    data = data.gd;
    //更新一下任务数据
    var tmp_arr = [];
    tmp_arr.push(data);
    dataGlobal.getInstance().setlotteryInfo(tmp_arr);
    //更新一下任务
    orderController.getInstance().sendGood(tmp_arr);
    orderController.getInstance().clickOrderItem(data.lottery_id);
  }

}
