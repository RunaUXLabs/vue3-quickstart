<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }}
    </li>
</template>

<script>
export default {
    name: "CheckboxItem2",
    props: ["idol"],
    // 생명주기 추가
    // created() {
    //     this.idol.checked = true;
    // }
    // 권장되지 않는 형태지만 참조된 객체(idol)의 값을 바꿀 수 있다.
};
</script>