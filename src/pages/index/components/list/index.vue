<script setup>
import './index.scss'
const list = Array.from({ length: 50 }).fill(1).map((t,i) => {
    return {
        id: i,
        url: require('../../../../assets/images/item.png')
    }
})
</script>

<template>
    <view class="list-box">
        <view class="list-box-item" v-for="item in list" :key="item.id">
            <image class="list-box-item-img" :src="item.url" mode="aspectFillß" />
        </view>
    </view>
</template>