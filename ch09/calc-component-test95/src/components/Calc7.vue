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
		// 인자를 배열로하는 다중값 감시자 설정방법, 한방에 퉁치기!
		watch([x, y], ([currentX, currentY], [oldX, oldY]) => {
			// 각 감시내용을 if문으로 제어중, 감시내용이 너무 많이생기면 if문도 패턴화 해서 반복구문을 돌리면 된다.
			if (currentX !== oldX) console.log(`X : ${oldX} ==> ${currentX}`);
			if (currentY !== oldY) console.log(`Y: ${oldY} ==> ${currentY}`);
			result.value = currentX + currentY;
		});
		return { x, y, result };
	}
};
</script>
