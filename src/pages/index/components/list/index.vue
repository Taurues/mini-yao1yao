<script setup>
import './index.scss'
import Taro from '@tarojs/taro'

const list = Array.from({ length: 50 }).fill(1).map((t,i) => {
    return {
        id: i,
        url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.YB4eUk55EoIK1mQdgxKNuwHaNL?w=187&h=395&c=7&r=0&o=5&dpr=2&pid=1.7",
        defaultUrl: ''
    }
})

 function handleClick() {
    Taro.navigateTo({
        url: `/pages/preview/index?id=1`
    })
}

</script>

<template>
    <view class="list-box">
        <view class="list-box-item" v-for="item in list" :key="item.id">
           <view @tap="handleClick">
                <image 
                    class="list-box-item-img" 
                    :src="item.url" 
                    mode="aspectFill" 
                    lazyLoad
                />
           </view>
        </view>
    </view>
</template>