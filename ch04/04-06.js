var vm = Vue.createApp({
  name: "App",
  data() {
    return { x: 0, y: 0, sum: 0 };
  },
  watch: {
    // 감지는 타이핑1회마다 감지함
    // data또는속성명(변경후, 변경전){} 구조로 구성한다
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