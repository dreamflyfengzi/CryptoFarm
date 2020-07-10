import dataGlobal from '../resconfig/dataGlobal'
import exchangeController from './rankController'
export default class exchangeNetwork {
  constructor() {
  }
  //获取市场的信息
  public MarketInfoBak(data) {
    console.log("exchangeNetwork",'获取市场的信息')
    data = {
      "ga":"market_info_bak",
      "code":1,
      "gd":{
        "store_id":"45",
        "num":"5",
        "data_info":[
          {
            "good_id":"bouquet3",
            "price":"1.884",
            "num":"105",
            'seller':'xsefrty',
            'good_name':'花卉',
            

          },
          {
            "good_id":"bouquet1",
            "price":"2.23421",
            "num":"145",
            'seller':'xsefrty',
            'good_name':'花卉',
            
          },
          {
            "good_id":"bouquet2",
            "price":"1.884",
            "num":"105",
            'seller':'xsefrty',
            'good_name':'花卉',
            
          },
          {
            "good_id":"bouquet5",
            "price":"2.23421",
            "num":"111",
            'seller':'xsefrty',
            'good_name':'花卉',
            
          },
          {
            "good_id":"bouquet4",
            "price":"14",
            "num":"1",
            'seller':'xsefrty',
            'good_name':'花卉',
            
          }
        ]
      }
    };
    //保存市场的信息
    data = data.gd;
    dataGlobal.getInstance().setMarketInfo(data);
    //保存一下物品
    var good_arr = [];
    for (var i in data.data_info) {
      var tmp_arr = { 
        'id': data.data_info[i].good_id, 
        'num': data.data_info[i].num ,
        'price': data.data_info[i].price ,
      };
      good_arr.push(tmp_arr);
    }
    dataGlobal.getInstance().setMarketInfo(good_arr);
    //设置市场的商品列表信息
    exchangeController.getInstance().initMarketGoodList();
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