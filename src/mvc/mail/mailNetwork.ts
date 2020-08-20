/**
* name 
*/
import mailController from './mailController'
import dataGlobal from '../resconfig/dataGlobal'
import infoController from '../info/infoController'
export default class orderNetwork {
  constructor() {
  }
  //获取当天订单列表的协议
  public MailInfoBak(data) {
    data = {
      "ga": "mail_info_bak",
      "gd": [
        {
          "mail_id": "ml01",
          "type": "1",//1交易成功卖出 2
          "text":"交易达成！",
          "is_harvest": "0",//未收
          "return": [
            {
              "type":"diamond",
              "num":"300"
            },
            {
              "type":"exp",
              "num":"300"
            }
          ]
        },
        {
          "mail_id": "ml02",
          "type": "1",//1交易成功卖出 2
          "text":"交易达成！",
          "is_harvest": "1",//未收 1已经收获
          "return": [
            {
              "type":"exp",
              "num":"300"
            },
            {
              "type":"diamond",
              "num":"300"
            }
          ]
        },
      ],
      "code": 1
    };
    //初始化页面
    data = data.gd;
    //保存任务的配置
    dataGlobal.getInstance().setMailInfo(data);
    //显示物品信息
    mailController.getInstance().initMailList();
  }

  //收获操作
  public MailOperate(data) {
    // 更新个人信息
    // 更新邮件列表
  }

  
}
