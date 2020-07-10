/**
* name 
*/
 import loginController from "./loginController"
  export default class loginNetwork {


    constructor() {
    }

    //登陆成功的回调
    public onLoginOK(data) {
      if (!data) {
        //初始化websocket网络(一定要在登陆成功之后初始化网络连接，否则无法用websocket)
        // net.webSocketJson.getInstance();
        return
      }

      console.log("onLoginOK的数据是：", data);
      //登陆主控制器
      let _loginC = loginController.getInstance();

      //存用户的基本资料
      _loginC.model.setUserInfo(data.gd.info);
      //存长连接的地址
      // _loginC.model.setGameWS(data.gd.ws.ws.ws)

      //初始化websocket网络(一定要在登陆成功之后初始化网络连接，否则无法用websocket)
      // net.webSocketJson.getInstance();

    }
    //登陆失败的回调
    public onLoginErr(data) {
      console.log("登陆出错的数据是：", data);
    }

  }
