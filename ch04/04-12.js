const Child = {
  name: "Child",
  data() {
    return { msg: "" };
  },
  template: `<div>
            자식문자열 : <input type="text" v-model="msg">
            <button @click="raiseError">자식에서 에러 발생</button>
        </div>`,
  methods: {
    raiseError() {
      throw new Error("의도적 오류 발생!");
    },
  },
  beforeCreate() {
    console.log("## 자식 beforeCreate");
  },
  created() {
    console.log("## 자식 created");
  },
  beforeMount() {
    console.log("## 자식 beforeMount");
  },
  mounted() {
    console.log("## 자식 mounted");
  },
  beforeUpdate() {
    console.log("## 자식 beforeUpdate");
  },
  updated() {
    console.log("## 자식 updated");
  },
  beforeUnmount() {
    console.log("## 자식 beforeUnmount");
  },
  unmounted() {
    console.log("## 자식 unmounted");
  },
};

const Parent = {
  name: "Parent",
  data() {
    return { name: "" };
  },
  template: `<div>
            부모문자열 : <input type="text" v-model="name">
            <child>
        </div>`,
  beforeCreate() {
    console.log("## 부모 beforeCreate");
  },
  created() {
    console.log("## 부모 created");
  },
  beforeMount() {
    console.log("## 부모 beforeMount");
  },
  mounted() {
    console.log("## 부모 mounted");
  },
  beforeUpdate() {
    console.log("## 부모 beforeUpdate");
  },
  updated() {
    console.log("## 부모 updated");
  },
  beforeUnmount() {
    console.log("## 부모 beforeUnmount");
  },
  unmounted() {
    console.log("## 부모 unmounted");
  },
};

var vm = Vue.createApp({
  name: "App",
  data() {
    return { visible: true };
  },
  errorCaptured(error, component, info) {
    console.log("## Error : ");
  },
})
  .component("parent", Parent)
  .component("child", Child)
  .mount("#app");