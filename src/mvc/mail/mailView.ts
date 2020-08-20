import mailIndex from './mailIndex'
export default class mailView {
  private _mailCom: mailIndex;
  constructor() {
  }

  public onShowMail(){
    if (this._mailCom == null) {
      this._mailCom = new mailIndex;
    }
    this._mailCom.onShowMail();
  }

    /**
   * 初始化邮箱list
   */
  public initMailList(){
    this._mailCom.initMailList();
  }
}