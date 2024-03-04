<template>
	<div>
		x : <input type="text" v-model.number="x" />
		<!-- v-model 수식어 .number를 이용하여 숫자만 입력되게 구현  -->
		<br />
		결과 : {{ result }}
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	name: "Calc5",
	setup() {
		const x = ref(0);
		const result = ref(0);
		/* watch(감시하려는데이터, (변경된값, 변경되기전값)=>{})
		감시하려는 대상(data)이 ref()를 통해 만들어진 반응성 데이터라도
		current, old는 const 변수 = ref()의 반환객체가 아니라
		변수.vlaue에 해당하는 *값*임을 주의할 것! */
		watch(x, (current, old) => {
			console.log(`${old} -> ${current}`);
			result.value = current * 2;
			/* result.value라고 접근하는 것과 달리 current, old 인자로
			전달된 값은 객체가 아니고 단순 값이다. */
		});
		return { x, result };
	}
};
</script>
