/**
* name 
*/
import dataGlobal from '../resconfig/dataGlobal'
import infoController from './infoController'
	export default class infoNetwork{
		constructor(){
		}
		public InitInfo(data){
			// data = {"ga":"init_info","gd":{"have_gold":150,"grade":15,"exp":10,"upic":"http:\/\/wx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eoVFQnibybEpePL9Lj2y1jfiabSf5fhZMM5cyhAPJnYKibprjL14ZcKxt4gSre02FuMia02Iz6Wh6pdiaA\/0","uname":"\u6211\u3001\u975e\u5356\u54c1","upgrade_exp":400,"sex":1},"code":1};
			dataGlobal.getInstance().setUserInfo(data.gd);//保存用户信息
			// 展示用户的信息
			// infoController.getInstance().onShowUserInfo();

		}
		//每当用户经验到达可升级时，给客户端推送用户升级提示信息：
		public SendUserGradeUp(data){
			// data = {"ga":"send_user_grade_up","gd":{"grade":"10","grade2":"11","num":"689","up_data":[{"id":"wp5005","num":"1"},{"id":"wp5004","num":"2"},{"id":"wp5004","num":"3"},{"id":"wp5004","num":"4"}],"msg":"\u5347\u7ea7\u8bf4\u660e\u6587\u5b57"},"code":1};
			data = data.gd;
			// infoController.getInstance().infoUserUpgradeTip(data);
		}
		//玩家信息框获取的协议
		public UserCountInfo(data){
			data = data.gd;
			dataGlobal.getInstance().setUserInfo(data);//保存用户信息
			//打开用户信息的弹窗
			// infoController.getInstance().showUserInfoTip();
		}
		
	}
