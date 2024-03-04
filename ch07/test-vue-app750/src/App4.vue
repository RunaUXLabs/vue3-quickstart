<template>
    <div>
        <InputName @nameChanged="nameChangedHandler" />
        <br />
        <h3>App 데이터 : {{ parentName }}</h3>
        <!-- 마지막단계로 parentName이 바인딩 됨 -->
    </div>
</template>

<script>
import InputName from './components/InputName.vue';// 자식컴포넌트 연결해야 $emit()으로 넘긴것을 읽을 수 있음
export default {
    name: "App4",
    components: { InputName }, // 컴포넌트로 쓰겠다고 선언도 해줘야 한다.
    data() {
        return { parentName: "" };
    },
    methods: {
        nameChangedHandler(e) {
            // 파라미터 e는 자식으로 부터 전달받은 객체
            this.parentName = e.name; // 객체 e에 점표기법으로 접근한 값을 할당해라
        }
        // 자식으로 부터 전달받은 인자를 해당 함수에 집어 넣는다.
    }
};
</script>
