import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aHelper: new ActionHelper(),
    // 控制显示 编辑器框
    showEditor: false,
    // 传递数据的桥梁
    transMemo: null,
    // 赛选分类 id
    filterCateId: -1
  },
  mutations: {
    showEditorMemo( state:any, editorMemo:any ){
      console.log( "触发事件了--", editorMemo )
      // 1. 将传递来的 editorMemo 设置给 tansMemo
      state.transMemo = editorMemo
      // 2. 显示编辑框
      state.showEditor = true
    }
  },
  actions: {
  },
  modules: {
  }
})
