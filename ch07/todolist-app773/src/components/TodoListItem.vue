<template>
    <li class="list-group-item" :class="{ 'list-group-item-success': todoItem.completed }"
        @click="emitter.emit('toggle-completed', todoItem.id)">
        <!-- 클릭이벤트를 통해 부모한데 에밋함 -->
        <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
            {{ todoItem.todo }} {{ todoItem.completed ? "(완료)" : "" }}
        </span>
        <!-- 부모로부턴 전달받은 데이터 값에 의해 클래스가 표현된다. -->
        <span class="float-end badge bg-secondary pointer" @click.stop="emitter.emit('delete-todo', todoItem.id)">삭제</span>
        <!-- 에미터로 에밋(상위로 이벤트 보낸다)하는데, 이때 이벤트는 delete-todo로, 인자는 todoItem.id로 보낸다.  -->
    </li>
</template>

<script>
export default {
    name: "TodoListItem",
    props: {
        todoItem: { type: Object, required: true }
        // 유효성 검사가 되도록 props설정
    }
};
</script>