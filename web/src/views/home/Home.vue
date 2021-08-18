// 首页相关
<template>
  <div>
    <!-- car data 渲染 -->
    <HomeCars />
    <!-- 地图组件 -->
    <HomeMap />
    <!-- 会员 -->
    <!-- 子路由有样式 -> 用 div 包裹   -->
    <!-- :class 动态绑定样式 -->
    <div id="children-view" :class="{ open: !isShow }">
      <router-view />
    </div>
  </div>
</template>

<script>
import HomeMap from 'views/home/children/amap/HomeMap'
import HomeCars from 'views/home/children/cars/HomeCars'

export default {
  name: 'Home',
  data() {
    return {
      // 控制是否显示 HomeUser 界面
      isShow: false,
    }
  },
  components: {
    HomeMap,
    HomeCars,
  },
  watch: {
    // 监听路由 -> 是首页 -> 弹出,否则不弹出
    $route: {
      handler(newValue) {
        console.log(newValue)
        // 获取路由名称
        const routerName = newValue.name
        this.isShow = routerName === 'Home' ? false : true
        console.log(this.isShow)
      },
    },
  },
}
</script>
<style lang="scss" scoped>
#children-view {
  // 浮动
  position: fixed;
  top: 0;
  // 靠右
  right: 0;
  bottom: 0;
  width: 410px;
  z-index: 2022;
  background-color: #34393f;

  // 动画
  --webkit-transition: all 0.3e ease 0sd;
  --moz-transition: all 0.3e ease 0sd;
  --ms-transition: all 0.3e ease 0sd;
  --o-transition: all 0.3e ease 0sd;

  // 串联选择器，作用在同一标签上
  &.open {
    right: -600px;
  }
}
</style>
