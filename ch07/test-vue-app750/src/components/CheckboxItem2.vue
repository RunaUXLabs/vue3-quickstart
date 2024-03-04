<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }}
    </li>
    <!-- 2번) props의 checked키에 해당하는 값을 전달받아오는것을 v-bind를 생략하여 :checked="checked"라 표현하지않고, 아래 props에 할당된 배열값에 점표기법으로 접근하고 있다. :checked="idol.checked" 키 이름을 속성명이랑 매칭해서 작성하면 아래 props의 할당값을 번잡하게 쓰지 않아도 된다. -->
</template>

<script>
export default {
    name: "CheckboxItem2",
    props: ["idol"],
    // 1번) CheckboxItem.vue에서 일일히 props:{}의 키 값을 지정했던 방식을 벗어나 값1개에 연결을 시켰다. 전달받아오면 객체로 변신!
    // 전달받아 구성하는 이 방식은 유효성검증이 엄격하지 않은 경우에 사용하자

    created() {
        this.idol.checked = true;
    }
    // CheckboxItem.vue에서 created()함수를 추가 했을때는 에러났었음, 하지만 참조형식으로 바뀐 이 파일에서는 에러는 나지 않는다. 메모리 주소는 변경되지 않고 내부 속성(체크여부)만 바뀐 것이지만, 권장하지 않는다.
};
</script>