var ts = new Date().getTime();
var vm = Vue.createApp({
  name: "App",
  data() {
    return {
      todo: "",
      todolist: [
        { id: ts, todo: "자전거 타기", completed: false },
        { id: ts + 1, todo: "딸과 공원 산책", completed: true },
        { id: ts + 2, todo: "일요일 애견 카페", completed: false },
        { id: ts + 3, todo: "Vue 원고 집필", completed: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.todo.length >= 2) {
        this.todolist.push({ id: new Date().getTime(), todo: this.todo, completed: false });
        // 기존 투두리스트에 완료되지 않은 상태의 막내자식으로 추가해라, 날짜/시간에 대한 정보는 고유하기 때문에 id로 사용되었다.
        // 현재 레이아웃에는 없지만, 시간을 기록하는 태그를 추가해서 머스태시로 연동하면 할일에 시간을 기록할 수 있다.
        this.todo = "";
      }
    },
    // 삭제 기능의 흐름을 잘 파악해 둘 것
    deleteTodo(id) {// 파라미터로 고유값을 넣었다, 해당 id를 가진 리스트를 삭제
      let index = this.todolist.findIndex((item) => id === item.id);
      // item으로 들어온 파라미터의 id와 deleteTodo의 파라미터와 같은지를 비교하여 반환된 해당 해당 item을 this.todolist.findIndex()한다. 그 인덱스를 변수에다가 할당해라.
      this.todolist.splice(index, 1);
      // 위에서 도출된 인덱스를 todolist에서 찾아가 1개를 삭제해라
    },
    toggleCompleted(id) {
      let index = this.todolist.findIndex((item) => id === item.id);
      this.todolist[index].completed = !this.todolist[index].completed;
      // 리트에서 해당 인덱스에 해당하는 할일이 완료여부를 뒤집어서 해당 할일에 할당해라(completed: false로 최초 생성된 할일을 true로 변경)
    },
  },
}).mount("#app");