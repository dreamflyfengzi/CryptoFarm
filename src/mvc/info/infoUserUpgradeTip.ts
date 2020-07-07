/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
export class infoUserUpgradeTip extends baseTips{
		
  // private _userInfoTip:fairygui.GComponent;//顶层对象
  // //用户的信息
  
  // private new_grade:fairygui.GTextField;//用户等级
  // private add_gold:fairygui.GTextField;//增加金币
  // private good_list:fairygui.GList;//物品列表
  // private good_div:fairygui.GGroup;//物品层
  
  // private y_btn:fairygui.GLoader;//确定按钮
  constructor(){
    super();
  }
  /** */
  public infoUserUpgradeTip(data){
    // this._userInfoTip = fairygui.UIPackage.createObject('base','upgrade_tip').asCom;
    // this.setScale(this._userInfoTip.displayObject);
    // this._userInfoTip.displayObject.pivotX = 0.5*this._userInfoTip.displayObject.width;
    // this._userInfoTip.displayObject.pivotY = 0.5*this._userInfoTip.displayObject.height;
    // this.addChild(this._userInfoTip.displayObject);
    // this.tweenShow();
    // //赋值
    // this.y_btn = this._userInfoTip.getChild('y_btn').asLoader;
    // this.add_gold = this._userInfoTip.getChild('add_gold').asTextField;
    // this.new_grade = this._userInfoTip.getChild('new_grade').asTextField;
    // this.good_list = this._userInfoTip.getChild('good_list').asList;
    // this.good_div = this._userInfoTip.getChild('good_div').asGroup;

    // this.y_btn.on(Laya.Event.CLICK,this,this.closeUserUpgradeTip);
    // //获取用户的信息
    // this.new_grade.text = 'LV'+data.grade2;
    // this.add_gold.text = '+'+(data.num?data.num:0);
    // var good_list = data.up_data;
    
    // if(good_list){
    //   for(var i in good_list){
    //     //查一下物品表
    //     var thisList = fairygui.UIPackage.createObject('base','goods_item').asCom;
    //     //获取图片
    //     var pic = thisList.getChild('gicon').asLoader;
    //     var gname = thisList.getChild('gname').asTextField;
    //     //查物品表
    //     var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[good_list[i].id];
    //     if(good_info){
    //       pic.url = good_info.pic;
    //       gname.text = good_info.name;
    //       this.good_list.addChild(thisList);
    //     }
    //   }
    //   if(this.good_list.numChildren > 0){
    //     this.good_div.visible = true;
    //   }else{
    //     this.good_div.visible = false;
    //   }
    // }
  }
  private closeUserUpgradeTip(){
    this.tweenHide();
  }
  
  
}