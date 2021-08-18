<template>
  <div class="cars-home-wrap">
    <span @click="toHomeUser">汽车列表</span>
  </div>
</template>
<script>
export default {
  name: 'HomeCars',
  data() {
    return {}
  },
  methods: {
    // 路由跳转
    toHomeUser() {
      this.$router.push('user')
    },
  },
  components: {},
}
</script>
<style lang="scss" scoped>
.cars-home-wrap {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2021;
}
</style>
