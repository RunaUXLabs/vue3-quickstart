<template>
    <div>
        <h2>TodoList 테스트(Composition API)</h2>
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
import { useTodoList2Store } from '@/stores/todoList.js';
import { ref, computed } from 'vue';

export default {
    name: "App2",
    setup() {
        const todo = ref("");
        // 컴포지션 API사용시 각 함수가 반환하는 값들을 변수에 할당하여 setup()함수가 반환하는 값으로 사용한다. 옵션API에서 data(), computed, methods에 해당하는 값을 정리하여 넣으면 된다.
        const todoListStore = useTodoList2Store();
        const { todoList, addTodo, deleteTodo, toggleDone } = todoListStore;
        const doneCount = computed(() => todoListStore.doneCount);
        // 필수!)상태값을 컴포넌트에서 데이터로 사용할 때 computed()함수를 거쳐서 반환값을 사용해야한다

        const addTodoHandler = () => {
            addTodo(todo.value);
            todo.value = "";
        };
        return { todo, todoList, doneCount, addTodoHandler, deleteTodo, toggleDone };
    }
};
</script>