<template>
  <li :class="todoItem.done ? 'list-group-item list-group-item-success' : 'list-group-item'">
    <span :class="todoItem.done ? 'todo-done pointer' : 'pointer'" @click="toggleDone(todoItem.id)">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span class="float-end badge bg-secondary pointer m-1" @click="router.push(`/todos/edit/${todoItem.id}`)">
      편집</span>
    <span class="float-end badge bg-secondary pointer m-1" @click="deleteTodo(todoItem.id)">
      삭제</span>
  </li>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  // pinia에서 데이터 가져오기
  import { useTodoListStore } from '@/stores/todoList.js';

  defineProps({
    todoItem: { Type: Object, required: true }
  });

  const router = useRouter();
  // 데이터 디스턱쳐링하기, 분해할당, 이 컴포넌트에서 쓸 것만 꺼내기
  const todoListStore = useTodoListStore(); // 반환값이 객체임
  const { deleteTodo, toggleDone } = todoListStore;
</script>
