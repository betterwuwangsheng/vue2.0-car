<template>
  <div class="amap-wrap">
    <el-amap vid="amapDemo" class="amap-demo"></el-amap>
  </div>
</template>

<script>
// NPM 方式
// 只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的 sdk 完成
import { lazyAMapApiLoaderInstance } from 'vue-amap'

export default {
  name: 'HomeMap',
  data() {
    return {
      map: null,
      // 地图比例
      zoom: 8,
      // 事件
      events: {},
    }
  },
  mounted() {
    // 使用原生方法定制化加载
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map('amapContainer', {
        // 地图中心坐标(默认北京市)
        center: new AMap.LngLat(116.404598, 39.907623),
        // 定义地图层级
        zoom: this.zoom,
      })
    })
  },
  methods: {},
  components: {},
}
</script>
<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>
