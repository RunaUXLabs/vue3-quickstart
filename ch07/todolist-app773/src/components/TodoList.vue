<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 컴포넌트로 삽입된 <TodoListItem />가 반복출력 -->
        <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: "TodoList",
  components: { TodoListItem },
  props: {
    todoList: { type: Array, required: true }
    // 유효성 검사가 되도록 props설정
  }
};
</script>