<template>
    <input type="text" :value="name" @input="$emit('update:name', $event.target.value)" />
    <!-- 부모에 있는 데이터를 자식에게 전달하는 방법으로 양방향 바인딩 v-model 사용가능
        자식은 props 선언필수, v-bind:value="송신하는props명"
         $emit('update:송신하는props명', $event.target.value)을 작성한다.  -->
</template>

<script>
export default {
    name: "InputName",
    props: ["name"],
};
</script>
