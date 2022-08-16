<template>
  <div class="HeaderComponent">
    <div class="headerNav">
      <div class="LoginRegister">
        <span>欢迎光临！</span>
        <span
          ><span class="loginSpan">请登录</span>&ensp;|&ensp;<span
            class="registerSpan"
            >免费注册</span
          ></span
        >
      </div>
      <div class="navDirectory">
        <span
          class="list"
          v-for="item in navList"
          :key="item.id"
          @click="onNavList(item)"
        >
          <span>{{ item.name }}</span>
        </span>
      </div>
    </div>
    <div class="headerSearch">
      <img :src="imageUrl" alt="" />
      <div class="searchInput">
        <el-input v-model="form.search"
          ><template #append>
            <el-button :icon="Search" @click="onSearch" /> </template
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getNavList } from "@/api/header.js";
import { onMounted, reactive, ref } from "@vue/runtime-core";
import { Search } from "@element-plus/icons-vue";

let navList = ref(null);
const imageUrl = require("/src/assets/header-logo.png");
let form = reactive({
  search: "",
});

const getListData = () => {
  getNavList().then((res) => {
    if (res) {
      navList.value = res.data;
    }
  });
};

const onSearch = () => {
  console.log("form:::", form.search);
};

const onNavList = (item) => {
  console.log("item::::", item);
};

onMounted(() => {
  getListData();
});
</script>

<style lang="less" scoped>
.HeaderComponent {
  width: 100%;
  height: auto;
  // background-color: darksalmon;
  .headerNav {
    width: 100%;
    height: 30px;
    background-color: #eaeaea;
    display: flex;
    justify-content: space-around;
    .LoginRegister {
      width: 200px;
      height: 100%;
      // background-color: cadetblue;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      color: #333;
      .loginSpan:hover {
        color: deepskyblue;
        cursor: pointer;
      }
      .registerSpan:hover {
        color: deepskyblue;
        cursor: pointer;
      }
    }
    .navDirectory {
      width: 600px;
      height: 100%;
      // background-color: cadetblue;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      color: #333;
      .list:hover {
        color: deepskyblue;
        cursor: pointer;
      }
    }
  }
  .headerSearch {
    width: 100%;
    height: 80px;
    // background-color: lightblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    color: #333;
    .searchInput {
      width: 500px;
      height: auto;
    }
  }
}
// --el-bg-color
// --el-input-bg-color
:deep(.el-input__wrapper.is-focus) {
  // box-shadow: 0 0 0 1px var(--el-input-focus-border-color) inset;
  box-shadow: 0 0 0 1px var(--el-input-hover-border) inset !important;
}
// :deep(.el-input__wrapper) {
//   outline: 0 !important;
// }
</style>