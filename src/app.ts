/*
 * @Author: zhangyanru zhangyanru@wshifu.com
 * @Date: 2024-03-04 18:35:12
 * @LastEditors: zhangyanru zhangyanru@wshifu.com
 * @LastEditTime: 2024-04-03 15:54:48
 * @FilePath: /frontend/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from 'vue'
import './app.scss'

const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
