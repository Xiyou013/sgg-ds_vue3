<template>
  <div class="homeList">
    <div class="listOne">
      <div class="alltext"><span>全部商品分类</span></div>
      <div class="listMenu">
        <span class="listMenuText" v-for="item in listMenu" :key="item.id">
          {{ item.name }}
        </span>
      </div>
    </div>
    <div class="hrOne" />
    <div class="listTwo">
      <div class="leftList">
        <div class="leftListText" v-for="item in leftList" :key="item.id">
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="middleList"></div>
      <div class="rightList">
        <div class="topDiv">
          <div class="topTitle">
            <span style="font-weight: bold">原神热报</span>
            <span style="font-size: 12px">更多&ensp;&#62;</span>
          </div>
          <div class="topContext" v-for="item in topList" :key="item.id">
            <span style="font-weight: bold">[{{ item.type }}]</span>
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="middleDiv">
          <div class="funBlock" v-for="item in imageList" :key="item.id">
            <div class="iamgDiv">
              <img class="imgIcon" :src="item.icon" alt="" />
            </div>
            <div class="titleDiv">{{ item.name }}</div>
          </div>
        </div>
        <div class="bottomDiv">
          <img class="bottomImg" :src="imageUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getListMenu, getLeftList, getTopList, getImageList } from "@/api/home";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const imageUrl = require("/src/assets/bottom-bg-img.png");
let listMenu = ref(null);
let leftList = ref(null);
let topList = ref(null);
let imageList = ref(null);

const getListMenuData = () => {
  getListMenu().then((res) => {
    if (res) {
      listMenu.value = res.data;
    }
    console.log("listMenu::::", listMenu.value);
  });
};

const getLeftListData = () => {
  getLeftList().then((res) => {
    if (res) {
      leftList.value = res.data;
    }
    console.log("leftList::::", leftList.value);
  });
};

const getTopListData = () => {
  getTopList().then((res) => {
    if (res) {
      topList.value = res.data;
    }
    console.log("topList::::", topList.value);
  });
};

const getImageListData = () => {
  getImageList().then((res) => {
    if (res) {
      imageList.value = res.data;
    }
    console.log("imageList::::", imageList.value);
  });
};

onMounted(() => {
  getListMenuData();
  getLeftListData();
  getTopListData();
  getImageListData();
});
</script>

<style lang="less" scoped>
.homeList {
  width: 100%;
  height: auto;
  //   background-color: lemonchiffon;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  .listOne {
    width: 80%;
    height: 35px;
    // background-color: cadetblue;
    display: flex;
    font-size: 13px;
    color: #333;
    .alltext {
      width: 179px;
      background-color: red;
      color: #fff;
      text-align: center;
      line-height: 35px;
    }
    .listMenu {
      width: 600px;
      //   background-color: darkseagreen;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .listMenuText:hover {
        color: deepskyblue;
        cursor: default;
      }
    }
  }
  .hrOne {
    width: 100%;
    height: 2px;
    background-color: red;
    border: 0px;
  }
  .listTwo {
    width: 80%;
    height: auto;
    // background-color: rgb(240, 198, 135);
    display: flex;
    flex-wrap: wrap;
    .leftList {
      width: 179px;
      background-color: #fafafa;
      font-size: 13px;
      color: #333;
      .leftListText {
        padding: 5px 0px 5px 10px;
      }
      .leftListText:hover {
        background-color: #80caed;
      }
    }
    .middleList {
      width: calc(100% - 380px);
      //   background-color: darksalmon;
    }
    .rightList {
      width: 201px;
      //   background-color: darkseagreen;
      box-sizing: border-box;
      .topDiv {
        height: 150px;
        padding: 0px 8px;
        .topTitle {
          height: 30px;
          font-size: 13px;
          color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f9f9f9;
          box-sizing: border-box;
        }
        .topContext {
          height: 30px;
          text-align: left;
          line-height: 30px;
          font-size: 10px;
          //行内文字超出显示…（指单行）
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .topContext:hover {
          color: deepskyblue;
          cursor: default;
        }
      }
      .middleDiv {
        height: 200px;
        // background-color: #80caed;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #f3f3f3;
        border-right: 1px solid #f3f3f3;
        box-sizing: border-box;
        .funBlock {
          width: 50px;
          height: 66.6px;
          border-top: 1px solid #f3f3f3;
          border-left: 1px solid #f3f3f3;
          box-sizing: border-box;
          font-size: 10px;
          color: #333;
          .iamgDiv {
            width: 50px;
            height: 45px;
            // background-color: cadetblue;
            position: relative;
            .imgIcon {
              width: 70%;
              height: 70%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          .titleDiv {
            height: calc(100% - 50px);
            // background-color: darksalmon;
            text-align: center;
          }
        }
        .funBlock:hover {
          background-color: #fafafa;
        }
      }
      .bottomDiv {
        height: calc(100% - 350px);
        .bottomImg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>