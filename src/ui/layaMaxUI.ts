/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.farm {
    export class farmIndexUI extends Laya.Scene {
		public farmbg_1:Laya.Sprite;
		public farmbg_2:Laya.Sprite;
		public building:Laya.Button;
		public n40:Laya.Sprite;
		public order:Laya.Button;
		public email:Laya.Button;
		public upgrade:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("farm/farmIndex");
        }
    }
    REG("ui.farm.farmIndexUI",farmIndexUI);
}
export module ui.login {
    export class loginUI extends Laya.Scene {
		public n10:Laya.Sprite;
		public n11:Laya.Sprite;
		public loading_group:Laya.Box;
		public loading_icon:Laya.Sprite;
		public loading_txt:laya.display.Text;
		public login_group:Laya.Box;
		public login_check:Laya.Button;
		public n6:laya.display.Text;
		public login_btn:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("login/login");
        }
    }
    REG("ui.login.loginUI",loginUI);
}