<!--
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-04-07 17:11:55
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-11 16:45:15
 * @FilePath: /frontend/src/pages/preview/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <view class="preview">
        <view class="preview-back" :style="{ top: react.top + 'px'}">
            <image class="preview-back-left" src="../../assets/images/arrow_left.png"/>
        </view>
        <view class="preview-text">
            <view class="time">10:07</view>
            <view class="date">2024年01月01日 星期一</view>
        </view>
        <view class="preview-save" @tap="saveImg">保存到相册</view>
        <image 
            class="backgroud-img" 
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.YB4eUk55EoIK1mQdgxKNuwHaNL?w=187&h=395&c=7&r=0&o=5&dpr=2&pid=1.7"
            mode="aspectFill"
        />
    </view>
</template>
<script setup>
import './index.scss'
import Taro from '@tarojs/taro'
// 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
const rect = Taro.getMenuButtonBoundingClientRect()

// 保存图片
function saveImg() {
    Taro.getSetting({
        success: function (res) {
            console.log(res.authSetting)
            // 未授权
            if (!res.authSetting["scope.writePhotosAlbum"]) {
                // 授权
                Taro.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function () {
                        Taro.saveImageToPhotosAlbum({
                            filePath: 'https://img.yzcdn.cn/vant/cat.jpeg',
                            success: function (res) {
                                Taro.showToast({
                                    title: "保存成功"
                                });
                            },
                            fail: function (res) {
                                Taro.showToast({
                                    title: "保存失败"
                                });
                            }
                        })
                    },
                    fail: function(res) {
                        Taro.showModal({
                            title: "提示",
                            confirmText: "确认",
                            cancelText: "取消",
                            content: "是否开启相册权限",
                            success(res) {
                                if (res.confirm) {
                                    // 调起客户端小程序设置界面，返回用户设置的操作结果
                                    Taro.openSetting();
                                } else if (res.cancel) {
                                    console.log(' :>> ');
                                }
                            }
                        })
                    }
                })
            } else {
              Taro.getImageInfo({
                src: 'https://img.yzcdn.cn/vant/cat.jpeg',
                success: res => {
                    Taro.saveImageToPhotosAlbum({
                        filePath: res.path,
                        success: function (res) {
                            Taro.showToast({
                                title: "保存成功"
                            });
                        },
                        fail: function (res) {
                            Taro.showToast({
                                title: "保存失败"
                            });
                        }
                    })
                },
                fail: function (res) {
                    Taro.showToast({
                        title: "保存失败"
                    });
                }
              })
            }
        }
    })
}
</script>