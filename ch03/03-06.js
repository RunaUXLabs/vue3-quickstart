var model = { message: "Hello Vue3!" };
var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      agree: "no", // 초기값이 설정되어있음.
      // v-model에 의해 실시간으로 업데이트 됨
    };
  },
}).mount("#app");