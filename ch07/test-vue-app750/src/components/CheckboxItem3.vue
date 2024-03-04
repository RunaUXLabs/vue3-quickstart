<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }}
    </li>
</template>

<script>
import Idol from '../Idol';
// 따로 분리한 생성자 함수 Idol.js 땡겨옴
export default {
    name: "CheckboxItem3",
    props: {
        idol: Idol,
        // 값으로 지정된 Idol은 생성자 함수 Class문법이다
    },
};
</script>