var vm = Vue.createApp({
  name: "App",
  methods: {
    outerClick(e) {
      console.log("### OUTER CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
      e.stopPropagation(); //버블링 막기
      // e.eventPhase를 출력시키면 버블링에 따라 버블링 계위에 따라 다른 번호를 반환하는것을 알 수 있다.
      // e.stopPropagation()은 모든 버블링 막기, e.eventPhase로 반환된 숫자(2이상)를 제어문으로 컨트롤하면 원하는 버블링만 제어가능
    },
    innerClick(e) {
      console.log("### INNER CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
      e.stopPropagation(); //버블링 막기
    },
  },
}).mount("#app");