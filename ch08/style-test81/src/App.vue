<template>
  <div>
    <Child1 />
    <Child2 />
    <Child3 />
  </div>
</template>

<script setup>
// import Child1 from './components/Child1.vue';
// import Child2 from './components/Child2.vue';
// import Child3 from './components/Child3.vue';

// <script setup>에 import를 해 오면 <script>의 export default{}에서components: {}선언을 하지 않아도 된다.
// <script setup>에는 import요소를 집중적으로 쓰는 공간이지만 export default{}를 쓰면 에러남. setup이라는 attribute가 무엇을 의미하는지 기억해두자!

// 각각 import해오는 요소가 개별관리가 되지만, 개별 컴포넌트에서 <style>의 경우 scoped, module의 attribute를 적용하지 않으면 같은 css class의 경우 읽어오는 순서대로 덮어쓰기가 일어난다.
</script>

<script>
// 기존에 import를 해 올때, <script>에 했다면 export default{}에서 components: {}선언을 무조건 작성했어야 했다. 지금은 업데이트가 되었고, 데이터 연동(props나 emit)이 없다면 <script>에 import를 하고 컴포넌트 선언을 안해도 컴포넌트들이 뜬다(반대케이스도 같이 기억해두기).

import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';

export default {
  name: "App",
  // components: { Child1, Child2, Child3 }
  // props, emit에 대한 내용이 없는 경우 생략 가능
};
</script>
