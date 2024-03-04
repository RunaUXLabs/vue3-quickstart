<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input id="msg" type="text" class="form-control" name="msg" placeholder="할일을 여기에 입력!" v-model.trim="todo"
          @keyup.enter="addTodoHandler" />
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler">추가</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputTodo",
  data() {
    return { todo: "" };
  },
  methods: {
    addTodoHandler() {
      if (this.todo.length >= 3) {
        // 에미터를 이용한 관리
        // this.emitter.emit("이벤트명", this.데이터);
        // this.todo에서 추출한 value를 에미터를 통해 add-todo이벤트가 실행되게끔 보내라
        this.emitter.emit("add-todo", this.todo);
        this.todo = "";
      }
    }
  },
};
</script>