var model = { message: "Hello Vue3!" };
var vm = Vue.createApp({
  name: "App",
  data() {
    return model;
  },
}).mount("#app");