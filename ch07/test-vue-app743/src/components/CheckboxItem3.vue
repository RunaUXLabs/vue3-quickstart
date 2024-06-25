<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }}
    </li>
</template>

<script>
// 클래스구문으로 구성된 Idol가져오기
import Idol from '../Idol';
export default {
    name: "CheckboxItem3",
    props: {
        idol: Idol,
        // 타입으로 지정할 수 있는 범위에는 생성자 함수, 클래스도 쓸 수 있다. 전달받는 속성이 Idol의 인스턴스 타입인지 확인
    },
};
</script>