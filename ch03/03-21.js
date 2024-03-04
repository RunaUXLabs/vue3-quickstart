var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      image1: {
        src: "https://contactsvc.bmaster.kro.kr/photos/18.jpg",
        title: "Lily's photo",
      },
      // 객체의 데이터를 정리할 때, attribute명을 사용해서 키이름으로 설계해 놓으면 편하다
    };
  },
}).mount("#app");