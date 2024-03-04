var vm = Vue.createApp({
  name: "App",
  data() {
    return { num: 0 };
  },
  created() {
    console.log("## created");
  },
  mounted() {
    console.log("## mounted");
  },
  updated() {
    console.log("## updated");
  },
  computed: {
    sum() {
      var n = parseInt(this.num);
      if (Number.isNaN(n)) return 0;
      return (n * (n + 1)) / 2;
    },
  },
}).mount("#app");