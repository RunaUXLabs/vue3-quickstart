<template>
    <div>
        X : <input type="text" v-model.number="x" /><br />
        Y : <input type="text" v-model.number="y" /><br />
    </div>
    {{ x }}
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Calc",
    setup() {
        /* setup() 내부에서 ref()를 이용해 반응성을 가진 데이터를
        템플릿에서 이용할 수 있도록 객체로 리턴,
        옵션API의 data에 해당하며 참조형 데이터를 생성할 때 초깃값으로 사용
        리턴된 값은 머스태시나 디렉티브를 이용해 바인딩 가능 */
        const x = ref(10);
        const y = ref(20);
        return { x, y };
    }
    // setup()은 두 개의 인자를 가질 수 있는데, 하나는 props, 두번째는 context이다. 개발자도구에서 context를 확인하는 방법은 vue devtool에서 vue아이콘이 있는 라인의 톱니바퀴 > More setting 톱니바퀴 > global 탭 > Debugging info를 Enable로 바꾸면 된다
};
</script>
