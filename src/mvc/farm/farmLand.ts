// /**
//  * 田的资源
//  */

export default class farmLand{}
//         private _farmland:fairygui.GComponent;//整块田的组件
//         public _farmlandObject:Laya.Sprite;//整块田的显示列表
//         private _land:fairygui.GLoader;//田
//         private _flower:fairygui.GLoader;//花
//         private _extend_btn:fairygui.GLoader;//扩建按钮
//         private _extend_gold:fairygui.GTextField;//扩建需要的金币
//         private _upgrade_gold:fairygui.GTextField;//升级需要的金币
//         private _upgrade_info:fairygui.GRichTextField;//升级说明
//         private _upgrade_level:fairygui.GTextField;//农田等级
//         private _upgrade_progressbar:fairygui.GProgressBar;//升级进度条
//         private _xuanzhong:fairygui.GImage;//选中的图片
//         public land_static:string;//点击花田的状态
//         public land_id:string;//花田的ID
//         private _extend_kuan:fairygui.GGroup;//扩建框
//         private _upgrade_kuan:fairygui.GGroup;//升级框
//         private _grow_kuan:fairygui.GGroup;//生长框
//         private _fertilizer_kuan:fairygui.GGroup;//施肥框
//         private _grow_time:fairygui.GTextField;//生长时间
//         private _grow_time_val:fairygui.GProgressBar;//生长进度条
//         private _fertilizer_time:fairygui.GTextField;//施肥时间
//         private _fertilizer_time_val:fairygui.GProgressBar;//施肥进度条
//         private _timer:Laya.Timer;//定时器对象
//         private _harvest_icon:fairygui.GLoader;//收获图标
//         private _water_icon:fairygui.GLoader;//浇水图标
        
//         constructor(){
            
//         }
//         public init(data){
//             //先创建一下对象
//             this._farmland = fairygui.UIPackage.createObject('farm','farmLand').asCom;
//             //获取参数
//             this._land = this._farmland.getChild('land').asLoader;
//             this._flower = this._farmland.getChild('flower').asLoader;
//             this._extend_btn = this._farmland.getChild('extend_btn').asLoader;
//             this._extend_gold = this._farmland.getChild('extend_gold').asTextField;
//             this._upgrade_gold = this._farmland.getChild('upgrade_gold').asTextField;
//             this._upgrade_info = this._farmland.getChild('upgrade_info').asRichTextField;
//             this._upgrade_level = this._farmland.getChild('upgrade_level').asTextField;
//             this._upgrade_progressbar = this._farmland.getChild('upgrade_progressbar').asProgress;
//             this._xuanzhong = this._farmland.getChild('xuanzhong').asImage;
//             this._extend_kuan = this._farmland.getChild('extend_kuan').asGroup;
//             this._upgrade_kuan = this._farmland.getChild('upgrade_kuan').asGroup;
//             this._grow_kuan = this._farmland.getChild('grow_kuan').asGroup;
//             this._fertilizer_kuan = this._farmland.getChild('fertilizer_kuan').asGroup;
//             this._grow_time = this._farmland.getChild('grow_time').asTextField;
//             this._grow_time_val = this._farmland.getChild('grow_time_val').asProgress;
//             this._fertilizer_time = this._farmland.getChild('fertilizer_time').asTextField;
//             this._fertilizer_time_val = this._farmland.getChild('fertilizer_time_val').asProgress;
//             this._harvest_icon = this._farmland.getChild('harvest_icon').asLoader;
//             this._water_icon = this._farmland.getChild('water_icon').asLoader;
//             this.land_id = data.ff_id;
//             //设置定时器
//             this.setTimer();
//             //设置一下浇水和收获按钮的监听
//             this._water_icon.on(Laya.Event.MOUSE_OUT,this,this.onClickLand);
//             this._harvest_icon.on(Laya.Event.MOUSE_OUT,this,this.onClickLand);
            
//             this.initLand();
            
//             this._farmlandObject = this._farmland.displayObject;
//             this._farmlandObject.x = data.x;//设置x坐标
//             this._farmlandObject.y = data.y;//设置y坐标
//             this._farmlandObject.name = data.ff_id;
//             this._farmlandObject.zOrder = data.zOrder;
//             return this._farmlandObject;
//         }
//         /**
//          * 初始化田的所有
//          */
//         public initLand(){
//             //隐藏掉所有的层
//             this.initLandDiv();
//             //设置状态
//             this.initLandStatic();
//         }
//         /**
//          * 隐藏不要的层
//          */
//          private initLandDiv(){
//              //先隐藏掉不显示的层
//             this._flower.visible = false;
//             this._extend_btn.visible = false;
//             this._extend_kuan.visible = false;
//             this._upgrade_kuan.visible = false;
//             this._xuanzhong.visible = false;
//             this._grow_kuan.visible = false;
//             this._fertilizer_kuan.visible = false;
//             this._harvest_icon.visible = false;
//             this._water_icon.visible = false;

//             //如果有选中的花田，就需要给他显示选中的花田框
//             var landId = farmController.getInstance().model.landId;
//             if(landId == this.land_id){
//                 this._xuanzhong.visible = true;
//             }

//             //先设置一下点击监听
//             this._land.touchable = false;
//             this._flower.touchable = false;
//             this._extend_btn.touchable = false;
//             this._extend_gold.touchable = false;
//             this._upgrade_gold.touchable = false;
//             this._upgrade_level.touchable = false;
//             this._upgrade_info.touchable = false;
//             this._upgrade_progressbar.touchable = false;
//             this._xuanzhong.touchable = false;
//             this._extend_kuan.touchable = false;
//             this._upgrade_kuan.touchable = false;
//             this._grow_kuan.touchable = false;
//             this._fertilizer_kuan.touchable = false;
//             this._harvest_icon.touchable = false;
//             this._water_icon.touchable = false;
//          }
//         //设置定时器
//         public setTimer(){
//             // var data = dataGlobal.getInstance().farmInfo[this.land_id];
//             if(data.seed_data.mature_time > 0 || data.fat_time > 0){
//                 if(this._timer){
//                     this._timer.clear(this,this.timerFun);//先清除定时器
//                 }
//                 //设置定时器
//                 this._timer = new Laya.Timer();
//                 this._timer.loop(1000,this,this.timerFun);
//             }
//         }
//         /**
//          * 定时器处理的内容
//          */
//         private timerFun(){
//             // console.log('定时器',this.land_id);
//             // var data = dataGlobal.getInstance().farmInfo[this.land_id];
            
//             // console.log(data.seed_data.mature_time,data.fat_time);
//             if( data.seed_data.mature_time == 0 && data.fat_time == 0){
//                 this._timer.clear(this,this.timerFun);
//             }
//             if(data.seed_data.mature_time && data.seed_data.mature_time > 0){
//                 data.seed_data.mature_time--;//植物剩余的生长时间
//                 data.seed_data.next_mature_time--;//植物进入下个阶段的时间
//                 //判断是否可以浇水等
//                 if(data.seed_data.water_time && data.seed_data.water_time>0){
//                     data.seed_data.water_time--;//浇水时间
//                     this.isOperation(data);
//                 }
//                 this._grow_time.text = globalFun.getInstance().formatSeconds(data.seed_data.mature_time);
//                 this._grow_time_val.value = Math.floor((data.seed_data.mature_time/data.seed_data.grow_time_tol)*100)>=100?100:Math.floor((data.seed_data.mature_time/data.seed_data.grow_time_tol)*100);
//                 if(data.seed_data.mature_time <= 0){
//                     this._grow_kuan.visible = false;
//                 }
//                 //判断是否到时间了，如果到时见那么久应该发送成长请求
//                 if(data.seed_data.next_mature_time <= 0){
//                     //试着进行websocke请求
//                     let tmp_websocket = net.webSocketJson.getInstance();
//                     let tmp_data = {
//                         'a':"init_grow_flower",
//                         'm':"init",
//                         'd':{
//                             'ff_id':this.land_id,
//                         },
//                         'code':1
//                     };
//                     console.log("发送websocket数据",tmp_data);
//                     tmp_websocket.sendMessage(tmp_data);
//                     // Laya.stage.event(NETWORKEVENT.FARMINITGROWFLOWER);
//                 }
//             }
//             if(data.fat_time > 0){
//                 data.fat_time--;
//                 this._fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
//                 this._fertilizer_time_val.value = Math.floor((data.fat_time/data.fat_time_tol)*100);
//                 //判断是否到时间了，如果到时见那么久应该发送肥力失效请求
//                 if(data.fat_time <= 0){
//                     //这里隐藏掉肥力的框
//                     this._fertilizer_kuan.visible = false;
//                     //试着进行websocke请求
//                     let tmp_websocket = net.webSocketJson.getInstance();
//                     let tmp_data = {
//                         'a':"init_flower_fat",
//                         'm':"init",
//                         'd':{
//                             'ff_id':this.land_id,
//                         },
//                         'code':1
//                     };
//                     tmp_websocket.sendMessage(tmp_data);
//                     // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFAT);
//                 }
//             }
            
            
//         }
//         /**
//          * 点击田操作
//          */
//         private onClickLand(){
//             //这里因为响应太快，可能会被误认为第二次点击，所以先清理一下状态先
//             // if(farmController.getInstance().model.clickLandStatic == 'harvest' || farmController.getInstance().model.clickLandStatic == 'water'){
//             //     farmController.getInstance().model.setClickLandStatic('');
//                 // return;
//             // }
//             switch(this.land_static){
//                 case 'unlock':
//                     this.onGradeExtend(2);
//                     break;
//                 case 'plant'://种植
//                 case 'fertilizer'://施肥
//                     farmController.getInstance().model.setClickLandStatic(this.land_static);
//                     farmController.getInstance().model.setLandId(this.land_id);
//                     farmController.getInstance().initLand();
//                     //调用列表
//                     farmController.getInstance().showSeepList();
//                     //显示一下加速还有施肥
//                     this._xuanzhong.visible = true;
//                     break;
//                 case 'upgrade'://升级
//                     farmController.getInstance().initLand();
//                     this._xuanzhong.visible = true;
//                     this.onGradeExtend(1);
//                     break;
//                 case 'harvest':
//                     //收获的接口
//                     // farmController.getInstance().model.setClickLandStatic('harvest');
//                     farmController.getInstance().model.setLandId('');
//                     this.onHarvest();//花田收获
//                     break;
//                 case 'water'://浇水的接口
//                     // farmController.getInstance().model.setClickLandStatic('water');
//                     farmController.getInstance().model.setLandId('');
//                     this.onWater();
//                     break;

//             }
//         }
//         /**
//          * 浇水的接口
//          */
//         private onWater(){
//             //这里可以先判断一下
//             var data = dataGlobal.getInstance().farmInfo[this.land_id];
//             if(data.seed_data.id && typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0){//可以浇水
//                 //试着进行websocke请求
//                 let tmp_websocket = net.webSocketJson.getInstance();
//                 let tmp_data = {
//                     'a':"init_flower_water",
//                     'm':"init",
//                     'd':{
//                         'ff_id':this.land_id,
//                     },
//                     'code':1
//                 };
//                 tmp_websocket.sendMessage(tmp_data);
//                 // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERWATER);
//             }
            
//         }
//         /**
//          * 收获
//          */
//         private onHarvest(){
//             var data = dataGlobal.getInstance().farmInfo[this.land_id];
//             //判断一下是否真的可以收获
//             if(data.seed_data.id && data.seed_data.grow_static == 4){//可以收获
//                 //试着进行websocke请求
//                 let tmp_websocket = net.webSocketJson.getInstance();
//                 let tmp_data = {
//                     'a':"init_collect_flower",
//                     'm':"init",
//                     'd':{
//                         'ff_id':this.land_id,
//                     },
//                     'code':1
//                 };
//                 tmp_websocket.sendMessage(tmp_data);
//                 // Laya.stage.event(NETWORKEVENT.FARMINITCOLLECTFLOWER);
//             }else{//花田不能收获
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,['还不能收获','确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);

//             }
//         }
//         /**
//          * 扩建按钮
//          */
//         private onGradeExtend(type){
//             //先获取这个花田的信息
//             var data = dataGlobal.getInstance().farmInfo[this.land_id];
//             var str = '';
//             //判断是否可以升级
//             var have_gold = dataGlobal.getInstance().userInfo.have_gold;
//             if(type == 1){
//                  if(Math.floor(data.ff_exp) < Math.floor(data.next_exp)){//这个是不能升级的
//                     str = '经验不够，不能升级';
//                 }
                
//                 if(have_gold < data.next_ff_id_glod ){
//                     str = '金币不够，不能升级';
//                 }
//             }else if(type == 2){
//                 if(have_gold < data.ff_id_unlocknum ){
//                     str = '金币不够，不能升级';
//                 }
//             }
//             if(str){
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,[str,'确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);
//                 return;
//             }
//             //试着进行websocke请求
// 			let tmp_websocket = net.webSocketJson.getInstance();
// 			let tmp_data = {
// 				'a':"init_flower_grade",
// 				'm':"init",
// 				'd':{
//                     'ff_id':this.land_id,
//                     'type':type
//                 },
// 				'code':1
// 			};
// 			tmp_websocket.sendMessage(tmp_data);
// 			// Laya.stage.event(NETWORKEVENT.FARMINITFLOWERGRADE);
//         }
//         /**
//          * 设置状态
//          */
//         private initLandStatic(){
//             //先获取这个花田的信息
//             var data = dataGlobal.getInstance().farmInfo[this.land_id];
//             //设置田的样式
//             this._land.url = data.pic;
//             this._land.visible = true;
//             //先去除掉田的事件
//             this._land.displayObject.off(Laya.Event.CLICK,this,this.onClickLand);
//             this._land.displayObject.off(Laya.Event.MOUSE_OUT,this,this.onClickLand);
            
//             //看看是否解锁
//             if(data.ff_vip == 1){//未解锁
//                 this.land_static = 'unlock';//解锁
//                 //这里判断是否可以扩建
//                 if(data.is_lock == 2){
//                     return;
//                 }
//                 this._extend_kuan.visible = true;
//                 //显示扩建按钮
//                 this._extend_btn.visible = true;
//                 this._land.touchable = true;
                
//                 this._land.displayObject.on(Laya.Event.CLICK,this,this.onClickLand);
//                 //设置升级需要的金币
//                 this._extend_gold.text = data.ff_id_unlocknum;
//                 this._extend_gold.visible = true;
//                 return;
//             }
//             //如果是在升级
//             if(this.land_static == 'upgrade'){
//                 this._upgrade_kuan.visible = true;
//                 //判断是否满级
//                 if(data.ff_vip >= data.max_grade){//下一级的经验小于或者是等于这一级的经验时，就可以判断为满级
//                     this._upgrade_info.text = "<span style='color:#ffffff'>满级</span>";
//                     this._upgrade_info.visible = true;
//                     this._land.touchable = true;
//                     this._land.displayObject.on(Laya.Event.CLICK,this,function(){
//                     });
//                 }else{
//                     //没有满级的需要显示一下
//                     this._upgrade_info.text = "<span style='color:#ffffff'>加成:"+data.seed+"%+</span><span style='color:#96fa65'>"+data.next_seed+"%</span>";
//                     this._upgrade_info.visible = true;
//                     this._upgrade_gold.text = data.next_ff_id_glod;
//                     this._upgrade_gold.visible = true;
//                     this._upgrade_level.text = 'lv:'+(data.ff_vip-1);
//                     this._upgrade_level.visible = true;
//                     this._upgrade_progressbar.value = Math.floor((data.ff_exp/data.next_exp)*100)>=100?100:Math.floor((data.ff_exp/data.next_exp)*100);
//                     this._upgrade_progressbar.visible = true;
//                     this._land.touchable = true;
//                     this._land.displayObject.on(Laya.Event.CLICK,this,this.onClickLand);
//                 }
//                 return;
//             }
//             //如果是在施肥和种植状态就需要看看要不要显示施肥时间.
//             if(this.land_static == 'fertilizer' || this.land_static == 'plant'){
//                 if(data.fat_time>0 && farmController.getInstance().model.landId == this.land_id){
//                     this._fertilizer_time.text = globalFun.getInstance().formatSeconds(data.fat_time);
//                     this._fertilizer_time_val.value = Math.floor((data.fat_time/data.fat_time_tol)*100)>=100?100:Math.floor((data.fat_time/data.fat_time_tol)*100);
//                     //显示
//                     this._fertilizer_kuan.visible = true;
//                 }
//             }
//             //判断是否有花种
//             if(data.seed_data.id){//有花，可以施肥
//                 this._flower.url = data.seed_data.pic;
//                 this._flower.visible = true;
//                 //判断是否可以浇水等
//                 if(this.isOperation(data)){
//                     return;
//                 }
//                 //如果是当前的土地就显示植物的成长时间
//                 if(farmController.getInstance().model.landId == this.land_id && data.seed_data.mature_time > 0){
//                     this._grow_time.text = globalFun.getInstance().formatSeconds(data.seed_data.mature_time);
//                     this._grow_time_val.value = Math.floor((data.seed_data.mature_time/data.seed_data.grow_time_tol)*100)>=100?100:Math.floor((data.seed_data.mature_time/data.seed_data.grow_time_tol)*100);
//                     this._grow_kuan.visible = true;
//                 }
//                 //没有花需要监听一下点击事件
//                 this._land.displayObject.on(Laya.Event.CLICK,this,this.onClickLand);
//                 this._land.touchable = true;
//                 this.land_static = 'fertilizer';//施肥
//             }else{//种种子
//                 this._land.displayObject.on(Laya.Event.CLICK,this,this.onClickLand);
//                 this._land.touchable = true;
//                 this.land_static = 'plant';//如果没有上面的，那么默认就是施肥和种植
//             }
//         }
//         /**
//          * 判断是否浇水或者收获
//          */
//         private isOperation(data){
//             // var data = dataGlobal.getInstance().farmInfo[this.land_id];
//             var clickLandStatic = farmController.getInstance().model.clickLandStatic;
//             // if(clickLandStatic == '' || clickLandStatic == 'harvest' || clickLandStatic == 'water'){
//             if(clickLandStatic == ''){
//                 if(data.seed_data.id && data.seed_data.grow_static == 4 && data.seed_data.mature_time <= 0){
//                     //可以收获
//                     this.land_static = 'harvest';
//                     this._land.touchable = true;
//                     this._land.displayObject.off(Laya.Event.CLICK,this,this.onClickLand);
//                     this._land.displayObject.off(Laya.Event.MOUSE_OUT,this,this.onClickLand);
//                     this._land.displayObject.on(Laya.Event.MOUSE_OUT,this,this.onClickLand);
//                     //显示可以收获的图标
//                     this._harvest_icon.touchable = true;
//                     this._harvest_icon.visible = true;
//                     return true;
//                 }else if(typeof data.seed_data.water_time == 'number' && data.seed_data.water_time <= 0){//判断是否可以浇水
//                     //可以浇水
//                     this.land_static = 'water';
//                     this._land.touchable = true;
//                     this._land.displayObject.off(Laya.Event.CLICK,this,this.onClickLand);
//                     this._land.displayObject.off(Laya.Event.MOUSE_OUT,this,this.onClickLand);
//                     this._land.displayObject.on(Laya.Event.MOUSE_OUT,this,this.onClickLand);
//                     //显示可以收获的图标
//                     this._water_icon.touchable = true;
//                     this._water_icon.visible = true;
//                     return true;
//                 }
//             }
//         }
//     }
