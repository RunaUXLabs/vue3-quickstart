<template>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem"
                    @delete-todo="emit('delete-todo', todoItem.id)"
                    @toggle-completed="emit('toggle-completed', todoItem.id)" />
                <!-- 리턴받은 emit('이벤트명으로 쓸 이름', 넘길데이터)으로 이벤트 구현 -->
            </ul>
        </div>
    </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
    todoList: { type: Array, required: true }
}); // 부모로부터 넘겨받는 속성(props)도  defineProps({옵션})형식으로 정의.
const emit = defineEmits(['delete-todo', 'toggle-completed']);
// 발신하는 이벤트가 여러개면 defineEmits()의 인자에 이벤트를 모아놓은 배열을 쓰면 끝!
// defineEmits()함수로 이벤트 정의, emit()를 리턴받음
</script>