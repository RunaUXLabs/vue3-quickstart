var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      image1: {
        srcattr: "src",
        src: "https://contactsvc.bmaster.kro.kr/photos/18.jpg",
        titleattr: "title",
        title: "Lily's photo",
      },
    };
  },
}).mount("#app");