<template>
  <div>
    <h2>TodoList 테스트(Option API)</h2>
    <hr />
    할일 추가 :
    <input type="text" v-model="todo" />
    <button @click="addTodoHandler">추가</button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList">
        <span style="cursor:pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? "(완료)" : "" }}
        </span>
        &nbsp;&nbsp;&nbsp;
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>

<script>
  // 1.todoList.js에서 내보낸 useTodoList1Store를 가져온다.
  import { useTodoList1Store } from '@/stores/todoList.js';
  import { mapState, mapActions } from 'pinia';

  // 2. export default {}의 각 키에 목적에 맞게끔 할당한다
  // computed:{}, methods: {} 등등이 있으니 각각의 키가 무엇을 담당하는지 알고 분배 할 것
  export default {
    name: "App1",
    data: () => ({ todo: "" }),
    computed: {
      // 3-1. useTodoList1Store에서 getters가 내보내는것들을 computed에 가져온다.
      // 옵션API사용시 전개구문을 자주 사용하니 체크해두기
      // ...mapState(스토어이름(변수), [꺼내올애들1,꺼내올애들2...]
      ...mapState(useTodoList1Store, ['todoList', 'doneCount'])
    },
    methods: {
      // 3-2. useTodoList1Store에서 actions가 내보내는것들을 methods에 이벤트처리 할 목적으로 가져온다.
      // ...mapActions(스토어이름(변수), [꺼내올애들1,꺼내올애들2...]
      ...mapActions(useTodoList1Store, ['addTodo', 'deleteTodo', 'toggleDone']),
      addTodoHandler() {
        this.addTodo(this.todo);
        this.todo = "";
      }
    }
  };
</script>