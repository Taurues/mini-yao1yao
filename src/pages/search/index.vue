<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-04 18:35:12
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-03 16:42:50
 * @FilePath: /frontend/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="search">
    <view class="search-box">
      <input 
        v-model="searchValue"
        class="search-box-input" 
        placeholder="请输入关键词" 
      />
      <image class="search-box-img" src="../../assets/images/search.png"/>
      <image 
        v-if="isShowClear"
        class="search-box-clear" 
        src="../../assets/images/clear.png"
        @click="clearSearch" 
      />
    </view>
    <view class="serach-record"></view>
  </view>
</template>
<script setup>
import './index.scss'

import { ref, computed } from 'vue'

const searchValue = ref('')

// 监听是否展示清空标签
const isShowClear = computed(() => {
  return searchValue.value.length > 0
})

// 清除
const clearSearch = () => {
  searchValue.value = ''
}
</script>


