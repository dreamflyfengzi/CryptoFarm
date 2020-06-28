/**
* name 
*/
import dataGlobal from '../resconfig/dataGlobal'
import warehouseController from './warehouseController'
export default class warehouseNetwork {
  constructor() {
  }
  //获取工厂的信息
  public StoreInfoBak(data) {
    data = {"ga":"store_info_bak","code":1,"gd":{"store_id":"45","grade":"1","num":"10","num2":"0","num3":"99","name":"1","data_info":[{"good_id":"hh6003","pos":"1","num":"105"},{"good_id":"hh6006","pos":"2","num":"1"}]}};

    //保存仓库的信息
    data = data.gd;
    dataGlobal.getInstance().setWarehouseInfo(data);
    //保存一下物品
    var good_arr = [];
    for (var i in data.data_info) {
      var tmp_arr = { 'id': data.data_info[i].good_id, 'num': data.data_info[i].num };
      good_arr.push(tmp_arr);
    }
    dataGlobal.getInstance().setUserGoodInfo(good_arr);
    //设置仓库的基本信息
    warehouseController.getInstance().initWarehouseInfo();
    //设置仓库的商品列表信息
    warehouseController.getInstance().initWarehouseGoodList();


  }
  public StoreUpGread(data) {
    //保存仓库的信息
    data = data.gd;
    dataGlobal.getInstance().setWarehouseInfo(data);
    //设置仓库的基本信息
    warehouseController.getInstance().initWarehouseInfo();
  }
  public StoreGoodDel(data) {
    //保存仓库的信息
    data = data.gd;
    var tmp_arr = [{ 'id': data.good_id, 'num': data.num }];
    dataGlobal.getInstance().setUserGoodInfo(tmp_arr);
    //设置仓库的基本信息
    warehouseController.getInstance().initWarehouseInfo();
    //设置仓库的商品列表信息
    warehouseController.getInstance().initWarehouseGoodList();

  }
}
