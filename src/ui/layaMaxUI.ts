/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.login {
    export class loginUI extends Laya.Scene {
		public btn:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("login/login");
        }
    }
    REG("ui.login.loginUI",loginUI);
}