<template>
    <div>
        <h2>관심있는 K-POP 가수?</h2>
        <hr />
        <ul>
            <CheckboxItem v-for="idol in idols" :idol="idol" />
        </ul>
    </div>
</template>
  
<script>
import CheckboxItem from './components/CheckboxItem3.vue';
import Idol from './Idol';
export default {
    name: "App3",
    components: {
        CheckboxItem
    },
    data() {
        return {
            idols: [
                new Idol(1, "BTS", true),
                new Idol(2, "Black Pink", false),
                new Idol(3, "EXO", false),
                new Idol(4, "ITZY", false),
            ]
            // Idol.js(생성자 함수 Class)가 CheckboxItem3.vue에 Props로 참조 되었다. 메인인 App3.vue에서는 초기 렌더링 데이터 값이 생성자 함수에 의한 인스턴스로 구성되어진 케이스이다.
        };
    }
};
</script>