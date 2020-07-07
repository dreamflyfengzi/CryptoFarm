/**
* name 
*/
import dataGlobal from '../resconfig/dataGlobal'
import factoryController from './factoryController'
import GAMEEVENT from '../event/GAMEEVENT'
	export default class factoryNetwork{
		constructor(){
		}
		//获取工厂的信息
		public SendFactoryBak(data){
			data = {
        "ga":"send_factory_bak",
        "gd":{
          "gc001":
          {
            "mf_id":"gc001","grade":"2","open_seat_num":"1","being_goods":{"id":"wp5001","t":"600000"},"queue_goods":[{"id":"wp5002","t":"600000","t2":"5000000"}],"succ_goods":[{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1}]}},"code":1};
			//保存工厂的信息
			dataGlobal.getInstance().setFactory(data.gd);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
			//开启定时器
			factoryController.getInstance().model.setTimeout();
		}
		//工厂建造的返回
		public FactoryCreateBak(data){
			data = {"ga":"factory_create_bak","gd":{"mf_id":"gc002","grade":"1","open_seat_num":"1","being_goods":[],"queue_goods":[{"id":"wp5011","t":"600000","t2":"5000000"},{"id":"wp5012","t":"600000","t2":"5000000"}],"succ_goods":[]},"code":1};
			//保存工厂信息
			data = data.gd;
			dataGlobal.getInstance().setFactory(data,data.mf_id);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
			if(data.msg){
        console.log('重置工厂的信息')
        Laya.stage.event(GAMEEVENT.TXTTIP,[data.msg]);
			}
		}
		//工厂生产产品完成后用户点击收获
		public FactoryGoodSave(data){
			data = {"ga":"factory_create_bak","gd":{"mf_id":"gc001","grade":"1","open_seat_num":"1","being_goods":{"id":"wp5001","t":"10"},"queue_goods":[{"id":"wp5002","t":"600000","t2":"5000000"}],"succ_goods":[]},"code":1};
			data = data.gd;
			//保存工厂信息
			dataGlobal.getInstance().setFactory(data,data.mf_id);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
		}
		//购买生产槽位
		public FactoryOpenSeatNumBak(data){
			data = {"ga":"factory_open_seat_num_bak","gd":{"mf_id":"gc001","grade":2,"open_seat_num":2},"code":1};
			//保存一下工厂的信息
			data = data.gd;
			dataGlobal.getInstance().buySetFactory(data);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
			//刷新页面的信息
			factoryController.getInstance().initProduction(data.mf_id);
			Laya.stage.event(GAMEEVENT.TXTTIP,['成功购买队列']);
		}
		//获取用户物品
		public SendGoodBak(data){
			data = {"ga":"send_good_bak","gd":{"hh6001":{"id":"hh6001","num":8},"hh6002":{"id":"hh6002","num":10},"hh6003":{"id":"hh6003","num":8},"hh6006":{"id":"hh6006","num":10},"hh6007":{"id":"hh6007","num":8},"hh6004":{"id":"hh6004","num":10},"hh6008":{"id":"hh6008","num":10},"hh6009":{"id":"hh6009","num":8},"hh6010":{"id":"hh6010","num":10},"wp5001":{"id":"wp5001","num":10},"wp5002":{"id":"wp5002","num":10},"wp5011":{"id":"wp5011","num":10},"wp5004":{"id":"wp5004","num":10},"wp5005":{"id":"wp5005","num":10}},"code":1};
			//保存用户的物品
			data = data.gd;
			dataGlobal.getInstance().setUserGoodInfo(data);
			//展示工厂可生产列表物品信息
			factoryController.getInstance().initProductionGoodList();
		}
		//工厂生产产品协议
		public FactoryAct(data){
			data = {"ga":"factory_act_bak","gd":{"mf_id":"gc001","grade":"2","open_seat_num":"1","being_goods":{"id":"wp5001","t":"600000"},"queue_goods":[{"id":"wp5002","t":"600000","t2":"5000000"}],"succ_goods":[{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1}]},"code":1};
			//保存一下工厂的信息
			data = data.gd;
			dataGlobal.getInstance().setFactory(data,data.mf_id);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
			//刷新页面的信息
			factoryController.getInstance().initFactoryInfo(data.mf_id);
		}
		//工厂升级的协议
		public FactoryUpGrade(data){
			data = {"ga":"factory_up_grade_bak","gd":{"mf_id":"gc001","grade":"4","open_seat_num":"1","being_goods":{"id":"wp5001","t":"600000"},"queue_goods":[{"id":"wp5002","t":"600000","t2":"5000000"}],"succ_goods":[{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1}]},"code":1};
			//保存一下工厂的信息
			data = data.gd;
			dataGlobal.getInstance().setFactory(data,data.mf_id);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
			//刷新页面的信息
			factoryController.getInstance().initFactoryInfo(data.mf_id);
			//刷新一下升级弹窗的信息
			factoryController.getInstance().initFactoryGradeList();
		}
		//工厂生产产品完成的协议
		public FactoryGoodGet(data){
			data = {"ga":"factory_good_get_bak","gd":{"mf_id":"gc001","grade":"2","open_seat_num":"1","being_goods":{"id":"wp5001","t":"10"},"queue_goods":[{"id":"wp5002","t":"600000","t2":"5000000"}],"succ_goods":[{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1},{"id":"wp5011","t":"2012-10-10","t2":"2012-10-11","n":1}]},"code":1};
			//保存一下工厂的信息
			data = data.gd;
			dataGlobal.getInstance().setFactory(data,data.mf_id);
			//展示工厂的信息
			factoryController.getInstance().showFactory();
			//刷新页面的信息
			//先对比一下是否在当前页面
			var id = factoryController.getInstance().model._mf_id;
			if(id == data.mf_id){//如果当前在这间工厂，那么需要刷新一下工厂的信息
				factoryController.getInstance().initFactoryInfo(data.mf_id);
			}
		}

	}
