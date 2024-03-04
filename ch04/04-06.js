var vm = Vue.createApp({
  name: "App",
  data() {
    return { x: 0, y: 0, sum: 0 };
  },
  watch: {
    x(current, old) {
      console.log(`## x : ${old} --> ${current}`);
      var result = Number(current) + Number(this.y);
      if (isNaN(result)) this.sum = 0;
      else this.sum = result;
    },
    y(current, old) {
      console.log(`## y : ${old} --> ${current}`);
      var result = Number(this.x) + Number(current);
      if (isNaN(result)) this.sum = 0;
      else this.sum = result;
    },
  },
}).mount("#app");