<template>
  <div class="HomeComponent">
    <header-index></header-index>
    <div class="homeIndex">
      <list-menu></list-menu>
      <today-fine></today-fine>
      <sell-fine></sell-fine>
    </div>
    <footer-index></footer-index>
  </div>
</template>

<script setup>
import footerIndex from "@/components/Footer/footerIndex.vue";
import headerIndex from "@/components/Header/headerIndex.vue";
import listMenu from "@/views/home/component/listMenu.vue";
import todayFine from "@/views/home/component/todayFine.vue";
import sellFine from "@/views/home/component/sellFine.vue";
</script>

<style lang="less" scoped>
.HomeComponent {
  width: 100%;
  // height: 100%;
  height: inherit;
  .homeIndex {
    width: 100%;
    height: auto;
    position: relative;
    // height: ~"calc(100% - 360px)";
    // height: e("calc(100% - 360px)");
    // height: calc(~"100% - 360px");
    // background-color: burlywood;
  }
}
</style>