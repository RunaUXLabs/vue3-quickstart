<template>
	<div>
		X : <input type="text" v-model.number="x" /><br />
		Y : <input type="text" v-model.number="y" /><br />
		<div>결과 : {{ result }}</div>
	</div>
</template>

<script>
import { ref, watch } from 'vue';
// 다중값인 감시자 설정시 ref와 watch를 가져온다.

export default {
	name: "Calc7",
	setup() {
		const x = ref(10);
		const y = ref(20);
		const result = ref(30);
		// 배열을 사용하여 다중값을 지니는 감시자 설정방법
		watch([x, y], ([currentX, currentY], [oldX, oldY]) => {
			if (currentX !== oldX) console.log(`X : ${oldX} ==> ${currentX}`);
			if (currentY !== oldY) console.log(`Y: ${oldY} ==> ${currentY}`);
			result.value = currentX + currentY;
		});
		return { x, y, result };
	}
};
</script>
