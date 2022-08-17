<template>
  <div class="HomeComponent">
    <header-index></header-index>
    <div class="homeIndex">
      <list-menu></list-menu>
    </div>
    <footer-index></footer-index>
  </div>
</template>

<script setup>
import footerIndex from "@/components/Footer/footerIndex.vue";
import headerIndex from "@/components/Header/headerIndex.vue";
import listMenu from "@/views/home/component/listMenu.vue";
</script>

<style lang="less" scoped>
.HomeComponent {
  width: 100%;
  // height: 100%;
  height: inherit;
  .homeIndex {
    width: 100%;
    height: 1000px;
    // height: ~"calc(100% - 360px)";
    // height: e("calc(100% - 360px)");
    // height: calc(~"100% - 360px");
    // background-color: burlywood;
  }
}
</style>