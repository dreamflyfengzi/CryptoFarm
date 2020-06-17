/**
* resManger
进行资源加载的控制
*/
import resConfig from "./resConfig"
export default class resManger {
  private static _instance: resManger;
  private loader: Laya.LoaderManager;
  // private scaledic: Dictionary<string, string>;//字典被去除
  private resaddrlist = [];

  public constructor() {
    this.resaddrlist = resConfig.farm;
  }

  public static getInstance() {
    if (resManger._instance == null) {
      resManger._instance = new resManger();
    }
    return resManger._instance;
  }

  /**
   * 添加加载资源
   * signname:资源列表对应资源标识
   */
  public addRes(signname: string) {
    var tmpurl = resConfig.getDynamicResUrl(signname, 1);
    if (tmpurl) {
      this.resaddrlist.push(tmpurl);
    }
  }
  /*
  *添加加载的组资源 
  *GroupRes：资源列表的资源对象
  */
  public addGroupRes(GroupRes: any) {
    this.resaddrlist = GroupRes;
  }
  /*
  *启动加载 
  * progress_event：加载过程中分发的事件
  * complete_event：加载完成中分发的事件
  * progress_data：加载过程中分发事件带的参数
  * complete_data：加载完成中分发事件带的参数
  */
  public startLoad(progress_event?: string, complete_event?: string, progress_data?: any, complete_data?: any) {
    if (this.loader == null) {
      //这里先加载loading的资源
      this.loader = new Laya.LoaderManager();
    }
    var tmparr = this.resaddrlist;
    progress_data = progress_data ? progress_data : '';
    complete_data = complete_data ? complete_data : '';
    this.loader.load(tmparr, Laya.Handler.create(this, this.onComplete, [complete_event, complete_data]), Laya.Handler.create(this, this.onProgress, [progress_event, progress_data], false));
  }

  /*
  *加载资源过程调用的函数
  *  progress_event ：加载过程中分发的事件
  *  progress_data ：加载过程中分发事件带的参数
  *  param：加载进度
  */
  private onProgress(progress_event: string, progress_data: any, param): void {
    var percent = Math.floor(param * 100);
    if (progress_event) {
      // ONPROGRESSLOGIN login加载
      Laya.stage.event(progress_event, [percent, progress_data]);
    }
  }

  /*
  *加载完成调用的函数
  *  complete_event ：加载完成中分发的事件
  *  complete_data ：加载完成中分发事件带的参数
  */
  private onComplete(complete_event: string, complete_data: any): void {
    if (complete_event) {
      Laya.stage.event(complete_event, complete_data); //加载完成，派发事件删除加载条
    }
    this.resaddrlist = [];
  }

  /**
   * 获取资源
   * name 资源标识 
   */
  public getRes(name: string) {
    var url = resConfig.getResUrl(name);
    if (url != 'null') {
      var texture = this.loader.getRes(url);
      if (this.scaledic[url] == null && texture && (texture.sourceWidth || texture.sourceHeight)) {
        this.scaledic[url] = { 'w': texture.sourceWidth, 'h': texture.sourceHeight };
      }
      if (texture && this.scaledic[url]) {
        texture.width = this.scaledic[url].w;
        texture.height = this.scaledic[url].h;
      }
      return texture;
    }
    return null;
  }
  // /**获取图集资源*/
  // public getAtlasRes(name:string){
  //     return this.loader.getRes(name);
  // }
}