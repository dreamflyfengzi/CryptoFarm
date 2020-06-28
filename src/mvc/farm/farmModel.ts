/**
* name 
*/

export default class farmModel{
		constructor(){
			this.clickLandStatic = '';
			this.landId = '';
		}
		
		public seedData:any;//种子信息
		public landId:string;//当前选中田的ID
		public clickLandStatic:string;//所有田的当前操作状态
		public fatData:any;//肥料信息
		/**
		 * 设置肥料的信息
		 */
		public setFatData(data:any){
			this.fatData = data;
		}
		/**
		 * 保存种子的数据
		 */
		public setFarmSeed(data){
      this.seedData = data;
      console.log(this.seedData)
		}
		/**
		 * 设置选中田的ID
		 * @param str ：田ID
		 */
		public setLandId(str:string){
			this.landId = str;
		}
		/**
		 * 设置选中田的状态
		 * @param str ：状态
		 */
		public setClickLandStatic(str:string){
      this.clickLandStatic = str;
		}
	}
	
