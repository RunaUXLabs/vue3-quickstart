var vm = Vue.createApp({
  name: "App",
  data() {
    //초기렌더링함수
    return {
      message: "v-bind 디렉티브",
      imagePath: "https://contactsvc.bmaster.kro.kr/photos/18.jpg",
      link: "https://www.naver.com",
      source: "source",
    };
  },
}).mount("#app");