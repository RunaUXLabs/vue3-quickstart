<template>
	<div>
		X : <input type="text" v-model.number="state.x" /><br />
		Y : <input type="text" v-model.number="state.y" /><br />
		<button @click="calcAdd">계산</button><br />
		<div>결과 : {{ state.result }}</div>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	name: "Calc3",
	setup() {
		const state = reactive({ x: 10, y: 20, result: 30 });
		/* reactive(객체)를 사용하면 state객체를 리턴하여 템플릿에서 이용한다.
		바인딩 할 때에는 state.키이름으로 쓴다.
		객체 내부의 값을 리턴하는식으로 접근하면 반응성을 잃어버린다.
		!!무조건 객체를 리턴하도록 한다!! */
		const calcAdd = () => {
			state.result = state.x + state.y;
		};

		return { state, calcAdd };
	}
};
</script>
