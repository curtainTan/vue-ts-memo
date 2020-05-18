
import Category from "./cateEnums"

class ItemData{
    id!: number
    categoryId!: Category
    title!: string
    content!: string
    createTime!: string

    constructor( id:number=-1, categoryId:Category=-1, title:string="", content:string="" ){
        this.id = id
        // 需要只用 枚举 类型代表分类
        this.categoryId = categoryId
        this.title = title
        this.content = content
        this.createTime = this.toSelfDateStr( Date.now() )
    }

    toSelfDateStr( time:number ):string{
        // 1. 将事件戳 转为 日起对象
        // 2. 使用 日期对象 get 的方法获取 年月日 时分
        let date = new Date( time )
        let str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + 
                date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
        return str
    }
}

export default ItemData

