var vm = Vue.createApp({
  name: "App",
  data() {
    return { x: 0, y: 0, sum: 0 };
  },
  watch: {
    // 감지는 타이핑1회마다 감지함
    // data또는속성명(변경후, 변경전){감지되면 해야하는일} 구조로 구성한다
    x(current, old) {
      console.log(`## x : ${old} --> ${current}`);
      var result = Number(current) + Number(this.y);
      if (isNaN(result)) this.sum = 0;
      else this.sum = result;
      // 보통의 함수처럼 리턴값이 필요하진 않음, 변경감지되면 실행문이 실행되면서 전달할것들을 전달하라고만 하면 되지, 굳이 return을 쓸 필요는 없다. 특수목적성을 가진 함수다 보니 타겟을 지정하고 그 상황에만 써먹는 용도로 작성하자.
    },
    y(current, old) {
      console.log(`## y : ${old} --> ${current}`);
      var result = Number(this.x) + Number(current);
      if (isNaN(result)) this.sum = 0;
      else this.sum = result;
    },
  },
}).mount("#app");