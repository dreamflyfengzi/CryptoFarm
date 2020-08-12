/*
* name;
*/
export default class GAMEEVENT{
  /**加载提示 */
  public static ONPROGRESSLOADING:string = 'ONPROGRESSLOADING';
  public static ONLOADCOMPLETE:string = 'onloadcomplete';
  public static ONPROGRESSFONT:string = 'ONPROGRESSFONT';
  public static ONLOADFONTCOMPLETE:string = 'onloadfontcomplete';
  /*登录*/
  public static ONRESPROGRESSLOGIN:string = 'ONPROGRESSLOGIN';
  public static ONRESCOMPLETELOGIN:string = 'ONRESCOMPLETELOGIN';
  
  /**窗口变动 */
  public static ONRESIZE:string = 'ONRESIZE';
  /**游戏事件 */
  public static GAMESTART:string = 'GAMESTART';
  /**
   * 游戏弹框
   */
  public static TIPSKUAN:string = 'TIPSKUAN';//游戏的弹窗
  public static TXTTIP:string = 'TXTTIP';//飘字提醒
  public static GOLDTIP:string = 'GOLDTIP';//金币提醒弹窗
  public static BASETIPS:string = 'BASETIPS'; //弹窗
  /**农场 */
  public static FARM:string = 'FARM';//打开农场
  public static ONPROGRESSFARM:string = 'ONPROGRESSFARM';//加载农场
  public static ONLOADCOMPLETEFARM:string = 'ONLOADCOMPLETEFARM';//加载农场成功
  public static LOGIN_FARM:string = 'LOGIN_FARM';//监听登录的时候websocket连接成功后通知执行打开农场的事件
  /**用户信息模块 */
  public static GETINITINFO:string = 'GETINITINFO';//获取用户信息
  public static BOTTOMBTN:string = 'BOTTOMBTN';//底部按钮
  public static HIDEINFODIV:string = 'HIDEINFODIV';//隐藏用户信息层
  public static SHOWINFODIV:string = 'SHOWINFODIV';//显示用户信息层

  // 开发测试
  public static TEST_LOGIN_FARM:string = 'FARM';//打开农场

  //加载动物
  public static ONPROGRESSANIMAL:string = 'ONPROGRESSANIMAL';//加载动物
  public static ONLOADCOMPLETEANIMAL:string = 'ONLOADCOMPLETEANIMAL';//加载动物成功
}