<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-07 14:45:13
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-07 14:51:55
 * @FilePath: /frontend/src/pages/index/components/tab/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <view class="tab">
        <view class="tab-item" v-for="(item,index) in tabList" :key="index">
            <image class="tab-item-img" :src="item.url"/>
            <view class="tab-item-title">{{ item.title }}</view>
        </view>
    </view>
</template>
<script setup>
import './index.scss'

const tabList = [
    { title: '壁纸', url: require('../../../../assets/images/yao.png')},
    { title: '头像', url: require('../../../../assets/images/yao.png')},
    { title: '表情包', url: require('../../../../assets/images/yao.png')},
]
</script>