<template>
  <div class="FooterComponent">
    <div class="footerListOne">
      <div class="ListOne" v-for="item in listOne" :key="item.id">
        <span class="ListOneTitle">{{ item.name }}</span>
        <div class="listChildOne" v-for="value in item.list" :key="value.id">
          <span v-if="!!value.imageurl"
            ><img :src="imageUrl" alt="" class="imageOne"
          /></span>
          <span v-else class="listChildText">{{ value.name }}</span>
        </div>
      </div>
    </div>
    <div class="footerListTwo">
      <div class="listTwo">
        <span
          class="listTwoText"
          v-for="item in listTwo && listTwo.list"
          :key="item.id"
          >{{ item.name }}</span
        >
      </div>
      <div class="listTwoContent">{{ listTwo && listTwo.address }}</div>
      <div class="listTwoContent">{{ listTwo && listTwo.approve }}</div>
    </div>
  </div>
</template>

<script setup>
import { getFooterList } from "@/api/footer";
import { onMounted, ref } from "@vue/runtime-core";

let listOne = ref(null);
let listTwo = ref(null);
// let imageUrl = ref(null);
let imageUrl = require("/src/assets/qrcode-logo.png");

const getList = () => {
  getFooterList().then((res) => {
    if (res) {
      listOne.value = res.data.footerListOne;
      listTwo.value = res.data.footerListTwo;
    }
    // console.log("listOne:::::", listOne.value, listTwo.value);
  });
};

onMounted(() => {
  getList();
});
</script>

<style lang="less" scoped>
.FooterComponent {
  width: 100%;
  height: 250px;
  background-color: #eaeaea;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  .footerListOne {
    width: 80%;
    height: 130px;
    // background-color: blanchedalmond;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    color: #333;
    .ListOne {
      width: auto;
      height: auto;
      //   background-color: darksalmon;
      .ListOneTitle {
        font-size: 14px;
        font-weight: bold;
      }
      .listChildOne {
        margin-top: 3px;
      }
      .imageOne {
        width: 100px;
        height: 100px;
      }
      .listChildText:hover {
        color: deepskyblue;
        cursor: pointer;
      }
    }
  }
  .footerListTwo {
    width: 100%;
    height: 70px;
    // background-color: darkseagreen;
    font-size: 12px;
    color: #333;
    // position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .listTwo {
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      font-size: 12px;
      color: #333;
      .listTwoText:hover {
        color: deepskyblue;
        cursor: pointer;
      }
    }
    .listTwoContent {
      width: 100%;
      text-align: center;
    }
  }
}
</style>