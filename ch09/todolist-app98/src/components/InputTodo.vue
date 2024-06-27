<template>
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input id="msg" type="text" class="form-control" name="msg" placeholder="할일을 여기에 입력!"
                    v-model.trim="todo" @keyup.enter="addTodoHandler" />
                <span class="btn btn-primary input-group-addon" @click="addTodoHandler">추가</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-todo']); // defineEmits()함수로 이벤트 정의, emit()를 리턴받음
const todo = ref("");
const addTodoHandler = () => {
    if (todo.value.length >= 3) {
        emit('add-todo', todo.value); // App.vue로 발신
        todo.value = "";
    }
};
</script>