<template>
    <div class="box">
        이름 : <input type="text" v-model="name" />
        <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
        <!-- v-on디렉티브를 이용하여 $emit('이벤트명', 이벤트아규먼트)을 부모로 전달한다. 부모는 전달받은 아규먼트를 데이터로 넘긴다. -->
        <!-- { name }은 name키에 name값(인풋을 통해 들어온 값을 변수 name에 할당)으로 구성된 것을 줄여쓴 표현이다, 객체리터럴 방식 -->
    </div>
</template>

<script>
export default {
    name: "InputName",
    // emits: ["nameChanged1"], // 배열에 이름만 쓴다고 돌아가지 않는다, 해당 값이 어디엔가 선언되어 있어야 함
    emits: {
        nameChanged: (e) => {
            return e.name && typeof (e.name) === "string" && e.name.trim().length >= 3 ?
                true : false; // 유효성 검사 실행문
        }
    }, // 객체형에 옵션을 지정하여 돌아가는 흐름을 적었다.
    data() {
        return {
            name: ""
        };
    },
};
</script>

<style scoped>
.box {
    border: solid 1px gray;
    padding: 5px;
    box-sizing: border-box;
}
</style>