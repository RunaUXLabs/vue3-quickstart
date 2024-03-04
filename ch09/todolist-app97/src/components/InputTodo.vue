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
import { ref } from 'vue';

export default {
	name: "InputTodo",
	setup(props, context) {
		const todo = ref(""); // 반응성을 가질 데이터가 단순 문자열이라 reactive()보다 ref()를 사용
		const addTodoHandler = () => {
			if (todo.value.length >= 3) {
				context.emit('add-todo', todo.value);
				/* 옵션API에서는 this.$emit()처럼 this를 참조했지만 CompositionAPI에서는 this를 사용하지않고
				setup()의 두번째 인자를 사용한다. */
				todo.value = "";
			}
		};
		return { todo, addTodoHandler };
	}
};
</script>