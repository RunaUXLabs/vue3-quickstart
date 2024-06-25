<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ name }}
    </li>
</template>

<script>
export default {
    name: "CheckboxItem",
    props: ["name", "checked"],
    // 생명주기(생성부분) 추가하여 강제로 데이터 변경! 자식주제에 부모정보를 변경(원본의 값을 바꾸는)하려고 시도함, 에러나서 백지상태가 됨
    created() {
        this.checked = true;
    }
};
</script>