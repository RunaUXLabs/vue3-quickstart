var vm = Vue.createApp({
  name: "App",
  data() {
    return { num: 0 };
  },
  methods: {
    sum() {
      console.log("## num : " + this.num);
      var n = parseInt(this.num);
      if (Number.isNaN(n)) return 0;
      return (n * (n + 1)) / 2;
    },
  },
}).mount("#app");