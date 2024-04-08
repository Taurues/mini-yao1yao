/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-04 18:35:12
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-03 16:45:12
 * @FilePath: /frontend/src/app.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/preview/index',
    'pages/my/index',
    'pages/search/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '主页',
        iconPath: './style/tabbarIcon/index.png',
        selectedIconPath: './style/tabbarIcon/xihuan.png'
      },
      {
        pagePath: 'pages/search/index',
        text: '搜索',
        iconPath: './style/tabbarIcon/mengquan.png',
        selectedIconPath: './style/tabbarIcon/xihuan.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './style/tabbarIcon/renzhen.png',
        selectedIconPath: './style/tabbarIcon/xihuan.png'
      }
    ]
  }
})
