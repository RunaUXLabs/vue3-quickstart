var model = {
  message1: "Hello Vue3!",
  message2: "<i>Hello Vue3!</i>"
};
var vm = Vue.createApp({
  name: "App",
  data() {
    return model;
  },
}).mount("#app");