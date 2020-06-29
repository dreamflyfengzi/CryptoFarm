/*
* 公共信息保存;
//用户自己的信息
userInfo = {
    'sid':"渠道ID",
    'sid2':"渠道ID2",
    'uid':"玩家uid",
    "name":"用户微信名称",
    "nickname":"用户呢称",
    "pic":"用户头像",
    "sex":"用户性别"
    "token":用户的登陆key(这个是登陆时添加的!)
}
//用户的基本属性
userProp = {
    'uid'=>用户ID
    'have_gold'=>可用金币数
    'used_gold'=>已用金币数
    'grade'=>当前等级
    'exp'=>当前等级经验
    'up_time'=>升级时间
}
//用户长连接地址
gameWS = "连的地址:端口";
*/
 /*农田信息
$return_init_field = array(
    "ga"=>"init_field",
    "gd"=>array(
        array(
            'ff_id'=>'花田编号',
            'max_grade'=>'花田的最高等级',//花田的最高等级
            'ff_vip'=>'花田等级',//1未开锁，2等级一，3等级二，4等级三
            'ff_exp'=>'花田当前的经验值',
            'seed'=>'花田生长加速百分比',
            'is_lock'=>'是否可以解锁花田',//1是2否
            'next_seed'=>'下一级花田生长加速百分比',
            'next_exp'=>'花田的升下一级经验值',
            'ff_id_unlocknum'=>'解锁所需金币',
            'next_ff_id_glod'=>'下一级升级所需金币',
            'pic'=>"huatianlv1",//'花田正常图片',
            'ain'=>"",//'花田正常动画',
            'fat_time'=>'当前施肥时间',
            'fat_time_tol'=>'施肥总时间',
            
            'seed_data'=>array(//花卉数据
                'grow_time_tol'=>'生长总时间',
                'mature_time'=>'当前成熟时间',
                'next_mature_time'=>'下一阶段成长时间',
                'grow_static'=>'当前生长状态',//1发芽期、2生长期、3花苞期、4成熟期
                'water_time'	=> '可以浇水时间', //
                'is_water'	=> '是否可以浇水', //是否可以浇水 1是2否
                'id'=>"hh01",//'花卉ID',
                'name'=>"红玫瑰",//'花卉名称',
                'grade'=>"1",//'花卉等级',
                'pic'=>"hmgseed",//'当前花卉图片',
                'ain'=>"",//'当前花卉动画',
            )
        ),
        
    ),
    "code"=>1
);*/
export default class dataGlobal{

  private static _instance:dataGlobal;

  public userInfo:any;//用户自己的信息
  public userProp:any;//用户的属性
  public gameWS:string;//用户长连接地址
  public farmInfo:any;//花田信息
  public factory:any;//工厂的信息
  public userGoodInfo:any;//用户物品信息
  public warehouseInfo:any;//仓库的信息
  public lotteryInfo:any;//订单任务
  public query={//推广的参数
      "uid":'',
      "sid":'',
      "sid2":'',
      "system":''
  };

  constructor(){
      this.query.system = this.get_sys();
      this.farmInfo = {};
      this.userInfo = {
        "grade":10,
        "have_gold":1000000
      };
      this.factory = {};
      this.userGoodInfo = {};
      this.warehouseInfo = {};
      this.lotteryInfo = {};
  }

  public static getInstance(){
      if(dataGlobal._instance == null){
          dataGlobal._instance = new dataGlobal();
      }
      return dataGlobal._instance;
  }

  //设置用户自己的信息
  /*
  data = {
      'sid':"渠道ID",
      'sid2':"渠道ID2",
      'uid':"玩家uid",
      "name":"用户微信名称",
      "nickname":"用户呢称",
      "pic":"用户头像",
      "sex":"用户性别"
      "token":用户的登陆key(这个是登陆时添加的!)
      "have_gold":可用的金币,
      "grade":等级,
      "exp":经验,
      "upgrade_exp":升级经验,
      'flower_num'=>'种植的花卉总数',
      'order_num'=>'完成的订单总数',
      'goods_num'=>'制造的商品总数',

  }
  */
  public setUserInfo(data:any){
      //用户自己的信息
      if(typeof data.sid != 'undefined'){ this.userInfo.sid = data.sid }
      if(typeof data.sid2 != 'undefined'){ this.userInfo.sid2 = data.sid2 }
      if(typeof data.uid != 'undefined'){  this.userInfo.uid = data.uid }
      if(typeof data.name != 'undefined'){ this.userInfo.name = data.name }
      if(typeof data.nickname != 'undefined'){ this.userInfo.nickname = data.nickname }
      if(typeof data.pic != 'undefined'){ this.userInfo.pic = data.pic }
      if(typeof data.sex != 'undefined'){ this.userInfo.sex = data.sex }
      if(typeof data.token != 'undefined'){ this.userInfo.token = data.token }
      if(typeof data.have_gold != 'undefined'){ this.userInfo.have_gold = data.have_gold }
      if(typeof data.grade != 'undefined'){ this.userInfo.grade = data.grade }
      if(typeof data.exp != 'undefined'){ this.userInfo.exp = data.exp }
      if(typeof data.flower_num != 'undefined'){ this.userInfo.flower_num = data.flower_num }
      if(typeof data.order_num != 'undefined'){ this.userInfo.order_num = data.order_num }
      if(typeof data.goods_num != 'undefined'){ this.userInfo.goods_num = data.goods_num }
      // if(data.upic){ this.userInfo.upic = data.upic }
      // if(data.uname){ this.userInfo.uname = data.uname }
      if(typeof data.upgrade_exp != 'undefined'){ this.userInfo.upgrade_exp = data.upgrade_exp }

      //设置推广参数
      if(typeof data.sid != 'undefined'){
          this.query.sid = data.sid;
      }
      if(typeof data.sid2 != 'undefined'){
          this.query.sid2 = data.sid2;
      }
      if(typeof data.sid2 != 'undefined'){
          this.query.uid = data.uid;
      }
  }
 
  //设置用户的属性
  /*
  data = {
      'uid'=>用户ID
      'have_gold'=>可用金币数
      'used_gold'=>已用金币数
      'grade'=>当前等级
      'exp'=>当前等级经验
      'up_time'=>升级时间
  }
  */
  public setUserProp(data:any){
      this.userProp = data;
  }

  //设置用户游戏长连接地址
  /*
  ws = "长连接地址:端口号"
  */
  public setGameWS(ws:string){
      this.gameWS = ws;
  }

  //获取某个范围的随机数据
  /*
  lowValue=>最小值,
  highValue=>最大值
  */
  public static getRound(lowValue,highValue){
      var choice=highValue-lowValue;
      return Math.floor(Math.random()*choice+lowValue);
  }

  //返回手机设备名
  public get_sys(){
      //Laya.Browser.onAndroid?1:(Laya.Browser.onIOS?2:3);
      let tmp_sys = Laya.Browser.userAgent;
      if(Laya.Browser.onAndroid){
          tmp_sys += ",Android";
      }
      if(Laya.Browser.onIOS){
          tmp_sys += ",ios";
      }
      if(Laya.Browser.onIPad){
          tmp_sys += ",ipad";
      }
      if(Laya.Browser.onIPhone){
          tmp_sys += ",iphone";
      }
      return tmp_sys;
  }
  /**
   * 保存农田的信息(以农田的id命名)
   * @param data 保存的字段
   * @param id 农田的id,如果有的话就是修改id的农田，没有的话就是修改所有的农田
   */
  public setFarmInfo(data:any,id?:string){
      if(id){
          this.farmInfo[id] = this.farmInfo[id]?this.farmInfo[id]:{};//
          for(var i in data){
              this.farmInfo[id][i] = (this.farmInfo[id][i] || this.farmInfo[id][i] == 0)?this.farmInfo[id][i]:(typeof data[i] =='object'?{}:'');
              if(typeof data[i] =='object'){
                  for(var y in data[i]){
                      this.farmInfo[id][i][y] = ( this.farmInfo[id][i][y] || this.farmInfo[id][i][y] == 0)?this.farmInfo[id][i][y]:'';
                      this.farmInfo[id][i][y] = data[i][y];
                  }
              }else{
                  this.farmInfo[id][i] = data[i];
              }
          }
      }else{
          for(var i in data){
              this.farmInfo[data[i].ff_id] = this.farmInfo[data[i].ff_id]?this.farmInfo[data[i].ff_id]:{};//
              for(var y in data[i]){
                  this.farmInfo[data[i].ff_id][y] = this.farmInfo[data[i].ff_id][y]?this.farmInfo[data[i].ff_id][y]:(typeof data[i][y] =='object'?{}:'');//
                  if(typeof data[i][y] =='object' ){
                      for(var q in data[i][y]){
                          this.farmInfo[data[i].ff_id][y][q] = data[i][y][q];
                      }
                  }else{
                      this.farmInfo[data[i].ff_id][y] = data[i][y];
                  }
              }
          }
          
      }
  }
  /**
   * 置空某个花田花的信息
   * id:花田ID
   */
  public setFlowerInfo(id){
      this.farmInfo[id].seed_data = {};
  }
  /**
   * array(
      '工厂id'=>array(
          'mf_id'=>'工厂ID',
          'grade'=>'工厂等级',
          'open_seat_num'=>'已经打开的栏位数量',
          'being_goods'=>array(//正在生产中的物品
              'id'=>'生产物品的ID',
              't'=>'还有多少秒生产完成'
          ),
          'queue_goods'=>array(//等待生产的物品
              array(
                  'id'=>'生产物品的ID',
                  't'=>'还有多少秒开始生产',
                  't2'=>'还有多少秒生产完成'
              )
          ),
          'succ_goods'=>array(//已经生产完成的物品
              array(
                  'id'=>'生产物品的ID',
                  't'=>'开始生产时间',
                  't2'=>'生产完成时间',
                  'n'=>'物品个数'
              )
          )
      )
  ),
   * 保存工厂的信息
   * @param data:工厂数据
   * @param id ：工厂的ID（如果有的话就是指定的工厂，没有就是保存全部）
   */
   public setFactory(data:any,id?:string){
      if(id){
          this.factory[id] = data;
          
      }else{
          this.factory = data?data:{};
      }
      
   }
   /**
   * 购买槽位后保存
   * @param data:工厂数据
   * @param id ：工厂的ID（如果有的话就是指定的工厂，没有就是保存全部）
   */
  public buySetFactory(data){
      if(data.mf_id){
          this.factory[data.mf_id].grade = data.grade;
          this.factory[data.mf_id].open_seat_num = data.open_seat_num;
      }
  }
  /**
   * 修改用户物品信息
   * array('物品id'=>array(
              'id'=>'物品ID',
              'num'=>'总数量'
          ),
          '物品id2'=>array(
              'id'=>'物品ID',
              'num'=>'总数量'
          )
      )
   */
  public setUserGoodInfo(data){
      for(var i in data){
          this.userGoodInfo[data[i].id] = data[i]
      }
  }
  /**
   * 保存仓库的信息
   * @param data 仓库信息
   * array(
      'store_id'=>'仓库系统ID',
      'grade'=>'仓库等级',
      'num'=>'仓库总大小',
      'num2'=>'仓库已使用数量',
      'num3'=>'每格的大小',
      'name'=>'仓库名称',
      'data_info'=>array(//要获取的物品信息
          array(
              'good_id'=>'物品ID',
              'pos'=>'仓库位置',
              'num'=>'物品数量',
          ),
      )
  ),
   */
  public setWarehouseInfo(data:any){
      if(typeof data.store_id != 'undefined'){ this.warehouseInfo.store_id = data.store_id }
      if(typeof data.grade != 'undefined'){ this.warehouseInfo.grade = data.grade }
      if(typeof data.num != 'undefined'){ this.warehouseInfo.num = data.num }
      if(typeof data.num2 != 'undefined'){ this.warehouseInfo.num2 = data.num2 }
      if(typeof data.num3 != 'undefined'){ this.warehouseInfo.num3 = data.num3 }
      if(typeof data.name != 'undefined'){ this.warehouseInfo.name = data.name }
      if(typeof data.data_info != 'undefined'){ this.warehouseInfo.data_info = data.data_info }
  }
  /**
   * 设置订单任务信息
   * @param data :任务数据
   * @param type :false:单条覆盖，true清除后再覆盖
   * array(
      array(
          'lottery_id'=>'任务ID',
          'task_uid'=>'分配任务用户id',
          'task_uid_pic'=>'分配任务用户头像',
          'type'=>'任务类型',
          'is_ok'=>'是否已完成任务',
      ),
      array(
          'lottery_id'=>'任务ID',
          'task_uid'=>'分配任务用户id',
          'task_uid_pic'=>'分配任务用户头像',
          'type'=>'任务类型',
          'is_ok'=>'是否已完成任务',
      )
  ),
   */
  public setlotteryInfo(data,type?:boolean){
      if(type){
          this.lotteryInfo = {};
      }
      for(var i in data){
          this.lotteryInfo[data[i].lottery_id] = data[i];
      }
  }

}