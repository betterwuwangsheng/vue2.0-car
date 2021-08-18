// 使用单独的 js 文件管理插件
// 导入 vue
import Vue from 'vue'

// 引入高德地图
import VueAMap from 'vue-amap'

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  // 官网申请的 key
  key: '635d07a6195cbc8b501864c15ee24413',
  // 引入插件
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor',
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.15',
  // // ui库版本，不配置不加载,
  uiVersion: '1.0.11',
})
