<template>
  <div>
    mockjs配置方法2
    <div>请求数据：{{ loginMsg }}</div>
    <div>获取年龄为20的数据：{{ loginMsg1 }}</div>
    <button @click="loginBtn">获取mock数据</button>
    <button @click="loginBtn1">获取年龄为20的数据</button>
  </div>
</template>

<script>
import { getData, getOneData } from "@/api/test-two";
import { ref } from "@vue/reactivity";

export default {
  name: "App",
  setup() {
    const loginMsg = ref("");
    const loginMsg1 = ref("");
    let age = 22;

    const loginBtn = () => {
      getData().then((res) => {
        if (res) {
          console.log("res1:::::", res);
          loginMsg.value = res.data;
        }
      });
    };
    const loginBtn1 = () => {
      getOneData(age).then((res) => {
        if (res) {
          console.log("res2:::::", res);
          loginMsg1.value = res.data;
        }
      });
    };

    return {
      loginMsg,
      loginMsg1,
      loginBtn,
      loginBtn1,
    };
  },
};
</script>

<style>
</style>
