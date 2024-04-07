<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-03 16:46:34
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-07 14:42:55
 * @FilePath: /frontend/src/pages/index/components/swiper/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
   <swiper
    class='swiper-box'
    indicator-color='#999'
    indicator-active-color='#333'
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item v-for="item in swiperList" :key="item.id">
      <image
        class="swiper-box-item-img"
        :src="item.src"
        mode="aspectFill"
      />
    </swiper-item>
  </swiper>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import './index.scss'

  const msg = ref("heoowp")

  const swiperList = reactive(Array.from({ length: 3 }).fill(1).map((t, i) => {
    return {
       id: i,
       src: require('../../../../assets/images/swiper1.jpg')
    }    
  } ))

</script>