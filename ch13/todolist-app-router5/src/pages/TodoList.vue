<template>
  <div class="row">
    <div class="col p-3">
      <router-link class="btn btn-primary" to="/todos/add">
        할일 추가
      </router-link>
      <button class="btn btn-primary ms-1" @click="fetchTodoList">새로 고침</button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
      </ul>
    </div>
    <span>완료된 할일 : {{ doneCount }}</span>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  // pinia에서 데이터 가져오기
  import { useTodoListStore } from '@/stores/todoList.js';
  import TodoItem from '@/pages/TodoItem.vue';

  // 데이터 디스턱쳐링하기, 분해할당, 이 컴포넌트에서 쓸 것만 꺼내기
  const todoListStore = useTodoListStore(); // 반환값이 객체임
  const { fetchTodoList } = todoListStore;
  // 필수!)데이터 반영으로 쓸 것들은 computed()를 거쳐 전처리 한다
  const doneCount = computed(() => todoListStore.doneCount);
  const todoList = computed(() => todoListStore.todoList);
</script>