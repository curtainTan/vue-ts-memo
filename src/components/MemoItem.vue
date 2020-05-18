<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{ memo.title }}</h5>
        <ul class="tools">
          <li class="edit" @click="showEditor" ></li>
          <li class="delete" @click="doDel" ></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{ memo.createTime }}</span>
        <span class="category">分类: {{ $store.state.aHelper.getCategoryName( memo.categoryId ) }}</span>
      </h6>
      <div class="content">
        <div class="text">{{ memo.content }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator"
import ItemData from '../model/ItemData'

@Component
export default class MemoItemComp extends Vue {
    @Prop() memo!: ItemData;

    // 删除方法
    doDel(): void {
        // 1. 问一下是否确认删除
        if( !window.confirm(`确认要删除 ${ this.memo.title } 的笔记吗？`) ) return
        // 如果确认，则删除
        this.$store.state.aHelper.remove( this.memo.id )
    }
    showEditor(): void {
        // 创建副本
        var newMemo = JSON.parse( JSON.stringify( this.memo ) )
        // 传递 memo
        this.$store.commit( "showEditorMemo", newMemo )
    }
}

</script>


