<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ name }}
    </li>
</template>

<script>
export default {
    name: "CheckboxItem",
    // 부모로부터 전달받은 데이터, props로 구현
    props: ["name", "checked"],
};
</script>