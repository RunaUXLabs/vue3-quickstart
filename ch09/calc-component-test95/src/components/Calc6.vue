<template>
	<div>
		x : <input type="text" v-model.number="state.x" /><br />
		결과 : {{ state.result }}
	</div>
</template>

<script>
import { reactive, watch } from 'vue';

export default {
	name: "Calc6",
	setup() {
		const state = reactive({ x: 0, result: 0 });
		/* watch(state, (current, old)=>{
			console.log(`${old} -> ${current}`);
			state.result = current * 2;
		});
		ref()대신에 reactive()를 사용하면 반응성 데이터 객체 state를
		생성하게 된다. state의 내부값이 변경되면 핸들러 함수가 실행된다.
		x가 변경되면 result도 변경되므로 핸들러가 두번 실행되는 오류가 발생함. */

		/* watch(state.x, (current, old)=>{
			console.log(`${old} -> ${current}`);
			state.result = current * 2;
		});
		감시대상 데이터를 객체(state)가 아닌 내부의 값 state.x로 바꾸는데
		이마저도 오류가 일어난다. 값이긴 하나 감시대상용으로 사용하는 데이터는
		반응성을 가진 데이터여야 하기 때문. */

		// 올바른 감시데이터 적는법! 감시대상을 () => state.x처럼 함수형식, 즉 getter함수로 정의해야한다.
		watch(() => state.x, (current, old) => {
			console.log(`${old} -> ${current}`);
			state.result = current * 2;
		});

		return { state };
	}
};
</script>
