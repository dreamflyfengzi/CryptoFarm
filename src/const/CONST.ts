/*
* name;
*/
export default class CONST{
  public static STAGEHEIGHT   = Laya.Browser.clientHeight;
  public static STAGEWIDTH    = Laya.Browser.clientWidth;

  public static DESIGNSTAGEHEIGHT   = 2688;//设计图的高
  public static DESIGNSTAGEWIDTH    = 1242;//设计图的宽

  public static DEBUGMODE     =1;//是否打开bug调试
  public static HEART_TIME    =20000;//心跳间隔为10000毫秒
  public static IS_TB         =2;//是否淘宝登陆(1淘宝登陆,2不是淘宝登陆)

  // public static LOGIN_URL     ="http://192.168.0.226/index.php";//游戏地址
  public static LOGIN_URL     ="https://farmapi.ones.games/index.php";//游戏地址
  public static SRC_URL       ="http://192.168.0.226/pic/";//额外图片的地址
  public static ADAPTION      = (CONST.DESIGNSTAGEHEIGHT-CONST.STAGEHEIGHT/(CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH))/2;// 设计图y移动的距离 = (设计图的高-舞台的高/比例)/2;   (舞台的高/比例)：换算成设计图应该移动的高
  public static STAGEADAPTION = (CONST.DESIGNSTAGEHEIGHT*CONST.STAGEWIDTH/CONST.DESIGNSTAGEWIDTH-CONST.STAGEHEIGHT)/2;//真实舞台x移动的距离 = (设计图的高*缩放比例-真实舞台的高)/2

}