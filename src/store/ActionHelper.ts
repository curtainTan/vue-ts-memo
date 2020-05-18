import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";
import Category from "../model/cateEnums";

class ActionHelper {
	// 1.负责数据处理
	dataHelper: DataHelper = new DataHelper("memoDate", "id");
	// 笔记数组
	memoList!: Array<ItemData>;

	constructor() {
		this.memoList = this.readData();
	}

	// 从本地读取数据，转成 ItemData 类型的数组
	readData(): Array<ItemData> {
		// 读取本地数据
		let arrObj = this.dataHelper.readData();
		// 转成 ItemData 数组
		let arrItem: Array<ItemData> = arrObj.map((ele: any) => {
			let item: ItemData = new ItemData();
			item.id = ele.id;
			item.categoryId = ele.categoryId;
			item.title = ele.title;
			item.content = ele.content;
			item.createTime = ele.createTime;
			return item;
		});
		return arrItem;
	}

	// 负责业务处理  ----------------------------
	// 2.1 新增笔记
	add(item: ItemData): number {
		item.id = this.dataHelper.addData(item);
		this.memoList.push(item);
		this.dataHelper.saveData(this.memoList);
		return item.id;
	}
	// 2.2 修改笔记
	edit(item: ItemData): void {
		// 找出 数组中 id 相等的对象
		let editItem: ItemData | undefined = this.memoList.find((ele) => {
			return ele.id === item.id;
		});
		if (editItem) {
			editItem.categoryId = item.categoryId;
			editItem.title = item.title;
			editItem.content = item.title;
			// 保存
			this.dataHelper.saveData(this.memoList);
		}
	}

	getCategoryName(cateId: Category): string {
		const arrNames = ["工作", "生活", "学习"];
		return arrNames[cateId];
	}

	// 2.3 删除笔记
	remove(id: number): void {
		// 找到删除 对象 的下标
		let index: number = this.memoList.findIndex((ele) => {
			return ele.id === id;
		});
		// 删除对象
		if (index > -1) {
			this.memoList.splice(index, 1);
			this.dataHelper.saveData(this.memoList);
		}
	}
}

export default ActionHelper;
