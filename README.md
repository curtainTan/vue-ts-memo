# vue-ts-memo

使用 vue + vuex + ts 构建的记事本项目

**[预览](https://curtaintan.github.io/vue-ts-memo/dist/index.html)**

项目目录：

    |-public        存放静态资源
    |-src           vue代码
    |----assets     项目内引用资源
    |----components 组件
    |----model      数据模型
    |----store      vuex
    |-tsconfig.json ts 配置文件
    |-package.json

项目 vuex 模型设计：

![](https://s1.ax1x.com/2020/05/18/YhLrJe.png)

## 总结

使用 ts + vue，代码提示仍然不完善， `store.state` 下的属性没有提示

组件必须使用 `@Component` 装饰，否则无法获取绑定在 实例上的属性

自己数据结构的设计仍然不足，以后需要多练习。
