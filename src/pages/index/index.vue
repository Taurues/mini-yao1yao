<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-04 18:35:12
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-07 15:01:25
 * @FilePath: /frontend/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>
import mySwiper from './components/swiper/index.vue'
import myTab from './components/tab/index.vue'
import myTips from './components/tips/index.vue'
import myList from './components/list/index.vue'
</script>

<template>
  <view class="index">
    <my-swiper></my-swiper>
    <view class="pl-15 pr-15 border-box">
      <my-tab></my-tab>
      <my-tips></my-tips>
      <my-list></my-list>
    </view>
  </view>
</template>


