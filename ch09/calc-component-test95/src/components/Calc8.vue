<template>
    <div>
        X : <input type="text" v-model.number="x" /><br />
        Y : <input type="text" v-model.number="y" /><br />
        <div>결과 : {{ result }}</div>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
    name: "Calc8",
    setup() {
        const x = ref(10);
        const y = ref(20);
        const result = ref(30);
        /* 초기값으로 설정한 부분이 화면 실행시 바로 읽힘,
        watch는 감시대상 값이 바뀔때만 함수 실행됨 */

        /* 
        watch(감시하려는데이터, (변경된값, 변경되기전값)=>{})
        watchEffect(()=>{ 반응성 데이터를 사용하는 코드 작성 }) */
        let handler = watchEffect(() => {
            result.value = x.value + y.value;
            console.log(`${x.value} + ${y.value} = ${result.value}`);
        });

        /* handler();
        watchEffect()를 변수에 할당하여 변수를 콜링하면 감시자 설정이 해제됨,
        CompositionAPI에서만 제공함. */
        return { x, y, result };
    }
};
</script>
