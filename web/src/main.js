import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入高德地图插件
import 'plugins/amap/amap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
