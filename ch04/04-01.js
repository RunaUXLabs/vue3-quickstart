var vm = Vue.createApp({
  name: "App",
  data() {
    return { name: "" };
    // 무조건 data는 함수형이어야하며, return값으로 데이터를 적어주어야 한다. 3.x이후부터는 함수가 아니면 오류난다.
  },
  //date: '안녕' // 에러남
  //data: { name: "" } // 에러남
}).mount("#app");