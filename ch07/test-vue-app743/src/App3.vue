<template>
	<div>
		<h2>관심있는 K-POP 가수?</h2>
		<hr />
		<ul>
			<CheckboxItem v-for="idol in idols" :idol="idol" />
		</ul>
	</div>
</template>

<script setup>
import CheckboxItem from './components/CheckboxItem3.vue';
import Idol from './Idol';
</script>

<script>
// import CheckboxItem from './components/CheckboxItem3.vue';
// import Idol from './Idol';
export default {
	name: "App3",
	// components: {
	// 	CheckboxItem
	// },
	data() {
		return {
			// 자식컴포넌트에서 프롭스를 클래스 인스턴스로 받겠다고 했기때문에 부모의 데이터에서 쿵!짝! 찍어내는 중
			idols: [
				new Idol(1, "BTS", true),
				new Idol(2, "Black Pink", false),
				new Idol(3, "뉴진스", false),
				new Idol(4, "임영웅", false),
			]
		};
	}
};
</script>