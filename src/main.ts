import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ActionHelper from './store/ActionHelper';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


// 测试新增
let ah = new ActionHelper()
// let newItem = new ItemData( -1, CateEnum.Life, "goooooooo-----", "vue-ts" )
// newItem.id = ah.add( newItem )


// 测试修改
// let newItem = new ItemData( 1, CateEnum.Life, "嘻嘻--", "冲冲冲" )
// ah.edit( newItem )
// console.log( ah.memoList )

// // 测试删除
// ah.remove( 2 )
// console.log( ah.memoList )

