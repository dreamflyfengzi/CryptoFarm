import dataGlobal from '../resconfig/dataGlobal'
import exchangeController from './exchangeController'
export default class exchangeNetwork {
  constructor() {
  }
  //获取市场的信息
  public ExchangeInfoBak(data) {
    data = {
      "ga":"exchange_info_bak",
      "code":1,
      "gd":{
        "type":"crops",
        "data_info":[
          {
            "id":"bouquet3",
            "price":"1.884"
          },
          {
            "id":"bouquet3",
            "price":"1.884"
          },
        ]
      }
    };
    //保存市场的信息
    data = data.gd;
    dataGlobal.getInstance().setExchangeInfo(data);
    //保存一下物品
    var good_arr = [];
    for (var i in data.data_info) {
      var tmp_arr = { 
        'id': data.data_info[i].id, 
        'price': data.data_info[i].price 
      };
      good_arr.push(tmp_arr);
    }
    dataGlobal.getInstance().setMarketInfo(good_arr);
    //设置市场的商品列表信息
    exchangeController.getInstance().initExchangeList();
  }
  // public StoreUpGread(data){
  //   //保存仓库的信息
  //   data = data.gd;
  //   dataGlobal.getInstance().setexchangeInfo(data);
  //   //设置仓库的基本信息
  //   exchangeController.getInstance().initexchangeInfo();
  // }
  // public StoreGoodDel(data){
  //   //保存仓库的信息
  //   data = data.gd;
  //   var tmp_arr = [{'id':data.good_id,'num':data.num}];
  //   dataGlobal.getInstance().setUserGoodInfo(tmp_arr);
  //   //设置仓库的基本信息
  //   exchangeController.getInstance().initexchangeInfo();
  //   //设置仓库的商品列表信息
  //   exchangeController.getInstance().initexchangeGoodList();

  // }
}