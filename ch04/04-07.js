var vm = Vue.createApp({
  name: "App",
  data() {
    return { x: 0, y: 0 };
  },
  computed: {
    sum() {
      let result = Number(this.x) + Number(this.y);
      if (isNaN(result)) return 0;
      else return result;
    },
  },
}).mount("#app");