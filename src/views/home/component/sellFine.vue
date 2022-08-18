<template>
  <div class="sellFine">
    <div class="sellDiv" v-for="item in sellList" :key="item.id">
      <img class="sellImg" :src="item.img" alt="" />
      <div class="sellText">
        <span>
          <img
            v-show="item.newFlag"
            class="textIcon"
            :src="newIconUrl"
            alt=""
          />
          <span>{{ item.tag }}</span>
          <span class="selldetails">{{ item.name }}</span>
        </span>
      </div>
      <div class="sellPrice">
        <span>¥</span><span style="font-size: 20px">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getSellList } from "@/api/home";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const newIconUrl = require("@/assets/sellFine/new-icon.png");
let sellList = ref(null);

const getSellListData = () => {
  getSellList().then((res) => {
    if (res) {
      sellList.value = res.data;
    }
    console.log("sellList::::", sellList.value);
  });
};

onMounted(() => {
  getSellListData();
});
</script>

<style lang="less" scoped>
.sellFine {
  width: 80%;
  height: auto;
  //   background-color: burlywood;
  //   position: absolute;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //   transform: translate(-50%, 0%);
}
.sellDiv {
  width: 24%;
  height: auto;
  border: 1px solid #f5f5f5;
  box-sizing: border-box;
  margin: 5px 0px;
  .sellImg {
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .sellText {
    padding: 10px 15px;
    font-size: 13px;
    color: #333;
  }
  .sellPrice {
    padding: 0px 15px 15px 15px;
    color: #ff6d6d;
  }
}
.sellDiv:hover {
  box-shadow: 0px 0px 5px 3px #f3f3f4;
}
</style>