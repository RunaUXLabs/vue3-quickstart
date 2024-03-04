var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      hobby: [],
      // 값이 여러개로 들어오는 경우 배열로 설정
      category: "",
      // 값이 한개로 들어오는 경우 문자열로 설정
    };
  },
}).mount("#app");