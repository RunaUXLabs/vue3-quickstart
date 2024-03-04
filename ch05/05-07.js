var vm = Vue.createApp({
  name: "App",
  methods: {
    outerClick(e) {
      console.log("### OUTER CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
    },
    innerClick(e) {
      console.log("### INNER CLICK");
      console.log("Event Phase : ", e.eventPhase);
      console.log("Current Target : ", e.currentTarget);
      console.log("Target : ", e.target);
    },
  },
}).mount("#app");