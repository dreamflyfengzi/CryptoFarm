// /*
// * 种子的类
// */

export default class farmSeedList{}
//         constructor(){

//         }
//         private _seedList:fairygui.GComponent;//列表的组件
//         private _seedListObj:Laya.Sprite;//列表的对象
//         private _seed_list:fairygui.GList;
//         public init(){
//             this._seedList = fairygui.UIPackage.createObject('farm','seedList').asCom;
//             this._seed_list = this._seedList.getChild('seed_list').asList;
//             this._seed_list.foldInvisibleItems = true;//自动排列位置
//             this._seedListObj = this._seedList.displayObject;
//             // this._seed_list.itemRenderer = Laya.Handler.create(this, this.RenderListItem, null, false);//当虚拟列表渲染的时候调用
//             // this._seed_list.numItems = 5;//这个是虚拟列表的时候才用到的（目前选项不多，后期选项多的时候可以用虚拟列表）
            
//             this._seedList.visible =false;
//             return this._seedListObj;
//         }
//         //虚拟列表渲染调用的函数
//         // private RenderListItem( index:number,obj:fairygui.GObject){
//         //     console.log(index,obj)
//         // }
//         //设置一下种子（data = {'seed_data':种子信息,'fat_data':肥料信息}）
//         public addSeedListItem(data){
//             //添加种子选项
//             var seed_data = data.seed_data;
//             this.addSeedItem(seed_data);
//             //添加肥料选项
//             var fat_data = data.fat_data;
//             this.addFertilizerItem(fat_data);
//         }
//         //设置施肥信息
//         public setSeedListItem(){
//             this.setSeedItem();//设置种子信息
//             this.setFatItem();//设置施肥信息
//         }
//         //添加种子选项
//         private addSeedItem(data){
//             for(var i in data ){
//                 var _seedItem = fairygui.UIPackage.createObject('farm','item').asCom;
//                 _seedItem.name = 'seed_'+data[i].id;
//                 _seedItem.getChild('seep_pic').asLoader.url = data[i].pic;
//                 _seedItem.getChild('gold').asTextField.text = data[i].gold;
//                 this.initSeedItem(_seedItem);
//                 this._seed_list.addChild(_seedItem);
//             }
//         }
//         //设置种子的信息
//         public setSeedItem(){
//             var grade = dataGlobal.getInstance().userInfo.grade;
//             var have_gold = dataGlobal.getInstance().userInfo.have_gold;
//             //获取种子信息
//             var seed_arr = farmController.getInstance().model.seedData;
//             for(var i in seed_arr){
//                 var _seedItem = this._seed_list.getChild('seed_'+seed_arr[i].id).asCom;
//                 this.initSeedItem(_seedItem);
//                 _seedItem.off(Laya.Event.CLICK,this,this.onClick);
//                 if( grade >= seed_arr[i].grade2 && grade <= seed_arr[i].grade3){
//                     //可以解锁
//                     if(have_gold >= seed_arr[i].gold){//够钱
//                         _seedItem.getChild('gold').asTextField.color = '#EDFF24';
//                         _seedItem.on(Laya.Event.CLICK,this,this.onClick,['buy',{'id':seed_arr[i].id}]);
//                     }else{//不够钱
//                         _seedItem.getChild('gold').asTextField.color = '#FF3E24';
//                         _seedItem.on(Laya.Event.CLICK,this,this.onClick,['noMoney',{'gold':seed_arr[i].gold}]);
//                     }
//                 }else{
//                     //不可以解锁
//                     _seedItem.getChild('suo_div').visible = true;
//                     _seedItem.getChild('gold').asTextField.color = '#274200';
//                     _seedItem.on(Laya.Event.CLICK,this,this.onClick,['lock',{'grade':seed_arr[i].grade2}]);
//                 }
//             }
//             this._seedList.visible =true;

//         }
//         //先初始化层
//         private initSeedItem(itemObj){
//             itemObj.getChild('suo_div').visible = false;
//             itemObj.getChild('gold').asTextField.color = '#EDFF24';
//         }
//         /**
//          * 添加施肥按钮
//          */
//         private addFertilizerItem(data){
//             for(var i in data){
//                 var _seedItem = fairygui.UIPackage.createObject('farm','item').asCom;
//                 _seedItem.getChild('suo_div').visible = false;
//                 _seedItem.name = 'fat_'+data[i].id;
//                 _seedItem.getChild('seep_pic').asLoader.url = data[i].pic;
//                 _seedItem.getChild('gold').asTextField.text = data[i].num;
//                 var have_gold = dataGlobal.getInstance().userInfo.have_gold;
//                 if(have_gold >= data[i].num){//够钱
//                     _seedItem.getChild('gold').asTextField.color = '#EDFF24';
//                 }else{//不够钱
//                     _seedItem.getChild('gold').asTextField.color = '#FF3E24';
//                 }
//                 _seedItem.on(Laya.Event.CLICK,this,this.onFertilizer,[{'id':data[i].id,'num':data[i].num}]);
//                 this._seed_list.addChild(_seedItem);
//             }
            
//         }
//         /**
//          * 设置施肥信息
//          */
//         private setFatItem(){
//             var grade = dataGlobal.getInstance().userInfo.grade;//用户等级
//             var have_gold = dataGlobal.getInstance().userInfo.have_gold;//用户金币
//             var fat_arr = farmController.getInstance().model.fatData;//获取肥料信息
//             for(var i in fat_arr){
//                 var _seedItem = this._seed_list.getChild('fat_'+fat_arr[i].id).asCom;
//                 _seedItem.getChild('suo_div').visible = false;
//                  if(have_gold >= fat_arr[i].num){//够钱
//                     _seedItem.getChild('gold').asTextField.color = '#EDFF24';
//                 }else{//不够钱
//                     _seedItem.getChild('gold').asTextField.color = '#FF3E24';
//                 }
//             }
//             this._seedList.visible =true;
//         }
//         /**
//          * 隐藏
//          */
//         public hide(){
//             this._seedList.visible =false;
//         }
//         /**
//          * 点击选项
//          * itemStatic:种子的状态
//          * arr:种子的数据（id：种子的id，gold:所需的金币，grade:所需要的级别）
//          */
        
//         private onClick(itemStatic:string,arr:any){
//             if(itemStatic == 'buy'){//等级够了，钱也够
//                 var landId = farmController.getInstance().model.landId;
//                 this.onPlant(landId,arr.id);
//             }else if(itemStatic == 'noMoney'){//等级够了，钱不够
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,['种植该种子需要'+arr.gold+'金币','确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);
//             }else if(itemStatic == 'lock'){//等级不够
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,['种植该种子需要'+arr.grade+'级','确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);
//             }
//         }
//         /**
//          * 种植操作
//          * @param landId ：种植田的ID
//          * @param id ：种子的ID
//          */
//         private onPlant(landId,id){
//             //判断一下田是否有种了，如果有的话就不能再种
//             var landData = dataGlobal.getInstance().farmInfo[landId];
//             if(landData.seed_data.id){
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,['该田已经种植了','确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);
//                 return;
//             }
//             //试着进行websocke请求
//             let tmp_websocket = net.webSocketJson.getInstance();
//             let tmp_data = {
//                 'a':"init_plant_flower",
//                 'm':"init",
//                 'd':{
//                     'ff_id':landId,
//                     'seed_num':id
//                 },
//                 'code':1
//             };
//             console.log("发送websocket数据",tmp_data);
//             tmp_websocket.sendMessage(tmp_data);
//             // Laya.stage.event(NETWORKEVENT.FARMINITPLANTFLOWER);
//         }
//         /**
//          * 点击施肥
//          */
//         private onFertilizer(data){
//             var landId = farmController.getInstance().model.landId;
//             var landData = dataGlobal.getInstance().farmInfo[landId];
//             //判断是否可以施肥
//             if(landData.fat_time > 0 ){
//                 //不可以施肥
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,['该田已经施过肥了','确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);
//             }
//             var have_gold = dataGlobal.getInstance().userInfo.have_gold;
//             if(have_gold<data.num){
//                 Laya.stage.event(GAMEEVENT.TIPSKUAN,['施肥种子需要'+data.num+'金币','确定','取消',function(){
//                     tipController.getInstance().close();
//                 },function(){
//                     tipController.getInstance().close();
//                 }]);
//                 return;
//             }
//             //试着进行websocke请求
//             let tmp_websocket = net.webSocketJson.getInstance();
//             let tmp_data = {
//                 'a':"init_flower_fertilize",
//                 'm':"init",
//                 'd':{
//                     'ff_id':landId,
//                     'fat_id':data.id
//                 },
//                 'code':1
//             };
//             console.log("发送websocket数据",tmp_data);
//             tmp_websocket.sendMessage(tmp_data);
//             // Laya.stage.event(NETWORKEVENT.FARMINITFLOWERFERTILIZE);
//         }


//     }
