<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-07 16:47:02
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-11 15:43:49
 * @FilePath: /frontend/src/pages/index/components/list/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
    console.log('click :>> ');
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