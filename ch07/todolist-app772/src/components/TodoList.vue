<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem"
                    @delete-todo="$emit('delete-todo', $event)" @toggle-completed="$emit('toggle-completed', $event)" />
                <!-- 하위 컴포넌트에서 $emit('쓸이벤트명', 아규먼트)으로 부모쪽으로 넘긴다 -->
            </ul>
        </div>
    </div>
</template>


<script setup>
import TodoListItem from './TodoListItem.vue';
</script>

<script>
export default {
    name: "TodoList",
    props: {
        todoList: { type: Array, required: true }
    },
    emits: ["delete-todo", "toggle-completed"],
};
</script>