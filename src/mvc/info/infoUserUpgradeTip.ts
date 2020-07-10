/**
* name 
*/
import baseTips from '../baseView/component/baseTips'
import { ui } from '../../ui/layaMaxUI';
import dataJson from '../resconfig/dataJson'
export class infoUserUpgradeTip extends baseTips{
		
  private _userInfoTip:Laya.Sprite;//顶层对象
  // private new_grade:fairygui.GTextField;//用户等级
  // private add_gold:fairygui.GTextField;//增加金币
  private good_list:Laya.List;//物品列表
  // private good_div:fairygui.GGroup;//物品层
  
  // private y_btn:fairygui.GLoader;//确定按钮
  constructor(){
    super();
  }
  /** */
  public infoUserUpgradeTip(data){
    this._userInfoTip = new ui.base.tip.upgrade_tipUI;
    // this.setScale(this._userInfoTip.displayObject);
    this._userInfoTip.pivotX = 0.5*this._userInfoTip.width;
    this._userInfoTip.pivotY = 0.5*this._userInfoTip.height;
    this.addChild(this._userInfoTip);
    this.tweenShow();
    this._userInfoTip.scene.y_btn.on(Laya.Event.CLICK,this,this.closeUserUpgradeTip);
    this.good_list = this._userInfoTip.scene.good_div.getChildByName('good_list')
    console.log( this.good_list)
    //获取用户的信息
    this._userInfoTip.scene.new_grade.text = 'LV'+data.grade2;
    this._userInfoTip.scene.add_gold.text = '+'+(data.num?data.num:0);
    var good_list = data.up_data;
    this.good_list.dataSource = []
    if(good_list){
      for(var i in good_list){
        //查一下物品表
         var thisList = {
           gicon:{
             skin:''
           },
           gname:{
             text:""
           }
         };
        // 查物品表
        var good_info = dataJson.getInstance().GET_SYS_GOOD_INFO()[good_list[i].id];
       
        if(good_info){
          let index = good_info.pic.lastIndexOf("/");
          var _skin = good_info.pic.substring(index + 1, good_info.pic.length);
          thisList.gicon.skin = "factory/"+_skin+'.png';
          thisList.gname.text = good_info.name;

          this.good_list.addItem(thisList);
          // console.log(this.good_list.cells.length )
        }
      }
      if(this.good_list.cells.length > 0){
        this._userInfoTip.scene.good_div.visible = true;
        this._userInfoTip.scene.n10.visible = true;
        this._userInfoTip.scene.n11.visible = true;
        this._userInfoTip.scene.t9.visible = true;
      }else{
        this._userInfoTip.scene.good_div.visible = false;
        this._userInfoTip.scene.n10.visible = false;
        this._userInfoTip.scene.n11.visible = false;
        this._userInfoTip.scene.t9.visible = false;
      }
    }
    console.log(this.good_list.cells,this._userInfoTip.scene.n10)
  }
  private closeUserUpgradeTip(){
    this.tweenHide();
  }
  
  
}