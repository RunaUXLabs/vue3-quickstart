<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div classe="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo />
        <TodoList :todoList="todoList" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

let ts = new Date().getTime();
export default {
  name: "App",
  components: { InputTodo, TodoList },
  // 에미터에의해서 추가된 내용 created()
  created() {
    // this.emitter.on("이벤트명", this.함수명);
    this.emitter.on("add-todo", this.addTodo);
    // InputTodo.vue의 에미터가 add-todo하라고 이벤트 발생시킴 -> 이벤트 인식 했으니 this.addTodo 콜링함
    this.emitter.on("delete-todo", this.deleteTodo);
    this.emitter.on("toggle-completed", this.toggleCompleted);
  },
  data() {
    return {
      todoList: [
        { id: ts, todo: "자전거 타기", completed: false },
        { id: ts + 1, todo: "딸과 공원 산책", completed: true },
        { id: ts + 2, todo: "일요일 애견 카페", completed: false },
        { id: ts + 3, todo: "Vue 원고 집필", completed: false },
      ]
      // 초깃값이 읽히고 난 후에, 에미터에 의해 데이터 변동이 되면 템플릿의 <TodoList :todoList="todoList" />이부분이 데이터를 실시간으로 연동한다
    };
  },
  methods: {
    // InputTodo.vue의 에미터에서 보낸 this.todo가 addTodo의 인자로 들어감
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todoList.push({ id: new Date().getTime(), todo: todo, completed: false });
      }
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList.splice(index, 1);
    },
    toggleCompleted(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList[index].completed = !this.todoList[index].completed;
    }
  }
};
</script>