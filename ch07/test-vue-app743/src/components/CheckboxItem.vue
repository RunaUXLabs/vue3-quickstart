<template>
	<li>
		<input type="checkbox" :checked="checked" /> {{ id }} - {{ name }}
	</li>
</template>

<script>
export default {
	name: "CheckboxItem",
	// 부모로 부터 전달받을때 엄격구조 운영하려면 배열이 아닌 객체로 받는다(타입지정으로는 생성자함수와 함수형을 씀), 유효성 검사를 해서 콘솔에 띄워줌
	props: {
		id: [Number, String], // 무조건 Number, String으로만 타입설정 가능
		name: String,
		// name: {
		// 	validator(v) {
		// 		return typeof (v) !== "string" ?
		// 			false :
		// 			v.trim().length >= 4 ? true : false;
		// 	} // validation 함수로 전처리 추가
		// },
		checked: {
			type: Boolean, // 타입설정
			required: false,
			default: false
			// 자스의 기본값파라미터의 느낌으로 데이터가 비어있을 때, 기본값을 부여하여 유연한 대처를 할 수 있다.
		}
	},
};
</script>