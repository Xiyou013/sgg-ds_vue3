<template>
  <div class="todayFine">
    <div class="tetileBg">
      <img class="fineBg" :src="fineBgUrl" alt="" />
    </div>
    <div class="fineContent">
      <div class="fineTitle">
        <img :src="fineTitleUrl" alt="" />
      </div>
      <div class="fineImg">
        <img :src="fineThingUrl" alt="" />
      </div>
      <div class="fineList">
        <div class="fineDiv" v-for="item in fineList" :key="item.id">
          <div class="thingBg">
            <img :src="item.img" alt="" />
            <div class="thingText">概率掉落</div>
          </div>
          <div class="fineRightDiv">
            <div class="thingPrice">
              <span style="font-size: 45px">{{ item.price }}</span
              ><span>CNY</span>
            </div>
            <div class="thingBtn">
              <img :src="fineBtngUrl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getFineList } from "@/api/home";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const fineBgUrl = require("@/assets/todayFine/fine-bg.png");
const fineTitleUrl = require("@/assets/todayFine/fine-title.png");
const fineThingUrl = require("@/assets/todayFine/fine-thing01.png");
const fineBtngUrl = require("@/assets/todayFine/fine-btn.png");

let fineList = ref(null);

const getFineListData = () => {
  getFineList().then((res) => {
    if (res) {
      fineList.value = res.data;
    }
    console.log("fineList:::::", fineList.value);
  });
};

onMounted(() => {
  getFineListData();
});
</script>

<style lang="less" scoped>
.todayFine {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  .tetileBg {
    width: 80%;
    height: auto;
    background-color: #a2cfff;
    display: flex;
    justify-content: center;
    .fineBg {
      //   width: 95%;
      height: 160px;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .fineContent {
    width: 80%;
    height: auto;
    background-color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid #709dd3;
    box-sizing: border-box;
    .fineTitle {
      width: 60%;
      display: flex;
      justify-content: center;
      img {
        // width: 100%;
        height: 50px;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .fineImg {
      width: 50%;
      height: 316px;
      display: flex;
      justify-content: center;
      img {
        // width: 50%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .fineList {
      width: 40%;
      height: auto;
      //   display: flex;
      //   flex-wrap: wrap;
      .fineDiv {
        width: 400px;
        height: 154px;
        display: flex;
        flex-wrap: wrap;
        .thingBg {
          position: relative;
          .thingText {
            position: absolute;
            font-size: 18px;
            color: #6e9cd5;
            top: 0%;
            left: 0%;
          }
          img {
            width: 150px;
            background-repeat: no-repeat;
            background-size: contain;
          }
        }
        .fineRightDiv {
          width: 200px;
          height: 154px;
          display: flex;
          flex-wrap: wrap;
        }
        .thingPrice {
          width: 200px;
          height: 80px;
          //   background-color: #a2cfff;
          color: #6e9cd5;
          text-align: center;
          font-size: 20px;
          line-height: 80px;
        }
        .thingBtn {
          width: 200px;
          height: 60px;
          background-color: #a2cfff;
          img {
            height: 60px;
            background-repeat: no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
}
</style>