/*
* name;
*/
export default class NETWORKEVENT{
  
  public static CONNECTONOPEN:string = "pid_1000";//'websocket链接成功';
  public static CONNECTONCLOSE:string = "pid_1001";//"websocket断开链接";


  public static HTTP_LOGIN_OK:string = "HTTP_LOGIN_OK";//"用户登陆成功回调";
  public static HTTP_ERROR_BAK:string = "HTTP_ERROR_BAK";//"用户登陆失败回调";
  public static GAMEFAILTIP:string = "game_fail_tip";//'请求接口报错回调'

  // 基本信息相关
  public static USERNICKNAMECHANGE:string = "user_nickname_change";//修改昵称
  public static USERAVATARCHANGE:string = "user_avatar_change";//修改头像
  public static INITINFO:string = "init_info";//获取用户信息
  public static USERCOUNTINFO:string = 'user_count_info_bak';//玩家信息框获取的协议
  public static FARMINITFIELD:string = "init_field";//获取所有农田的信息
  public static FARMINITSEEDLIST:string = "init_seed_list";//获取所有农田的种子列表
  public static FARMINITFLOWERGRADE:string = 'init_flower_grade';//土地的扩建升级
  public static FARMINITPLANTFLOWER:string = 'init_plant_flower'//请求种植操作
  public static FARMINITFLOWERWATER:string = 'init_flower_water';//浇水操作
  public static FARMINITGROWFLOWER:string = 'init_grow_flower';//花田生长的操作
  public static FARMINITCOLLECTFLOWER:string = 'init_collect_flower';//花田收获
  
  public static FARMINITFLOWERFERTILIZE:string = 'init_flower_fertilize';//施肥操作
  public static FARMSENDFLOWERFATBAK:string = 'send_flower_fat_bak';//施肥通知
  public static FARMINITFLOWERFAT:string = 'init_flower_fat';//肥力失效
  
  public static SENDFACTORYBAK:string = 'send_factory_bak';//获取用户工厂信息
  public static FACTORYCREATEBAK:string = 'factory_create_bak';//工厂建造的协议
  public static FACTORYGOODSAVEBAK:string = 'factory_good_save_bak';//工厂生产产品完成后用户点击收获
  public static FACTORYOPENSEATNUMBAK:string = 'factory_open_seat_num_bak';//
  public static SENDGOODBAK:string = 'send_good_bak';//获取玩家某些物品数量的协议
  public static FACTORYACTBAK:string = 'factory_act_bak';//工厂生产产品协议
  public static FACTORYUPGRADEBAK:string = 'factory_up_grade_bak';//工厂升级的协议
  public static FACTORYGOODGETBAK:string = 'factory_good_get_bak';//工厂完成生产

  public static SENDUSERGRADEUP:string = 'send_user_grade_up';//每当用户经验到达可升级时，给客户端推送用户升级提示信息：

  public static STOREINFOBAK:string = 'store_info_bak';//获取仓库信息
  public static STOREUPGRADEBAK:string = 'store_up_gread_bak';//仓库出升级的协议
  public static STOREGOODDEL:string = 'store_good_del_bak';//从仓库出售物品的协议
  public static LOTTERYINFOBAK:string = 'lottery_info_bak';//获取等级订单列表的协议
  public static LOTTERYACTBAK:string = 'lottery_act_bak';//提交订单的协议
  public static SHOWSELLTIP:string = 'show_sell_tip';//暂时
  
  // 交易市场
  // public static MARKETINFOBAK:string = 'market_info_bak';//交易市场信息

  public static MATERIALINFOBAK:string = 'material_info';//材料订单
  public static SENDGOODMATERIALBAK:string = 'send_good_material_bak';//材料订单
 
  /**
   * 动物相关
   */
  public static ANIMALPRODUCTMATURE = "animal_product_mature";//动物产品成熟


  /**
   * Exchange
   * 交易市场部分
   */
  public static EXCHANGEINFOBAK:string = 'exchange_info_bak';//返回市场交易信息  市场   传递信息+筛选类型
  public static EXCHANGEMYMATERIAL:string = 'exchange_my_material' //返回我的可出售物品信息
  // public static 

  /**邮件相关 */
  public static MAILINFOBAK:string = 'mail_info_bak';//获取邮件
  public static MAILOPERATE:string = 'mail_operate';//收获返回物品
}