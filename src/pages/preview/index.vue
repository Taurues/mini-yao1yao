<template>
    <view class="preview">
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