<template>
    <!-- 이미 만들어진 로딩중 컨텐츠를 설치해서 사용하자 -->
    <VueCsspin message="Loading" spin-style="cp-flip" />
</template>

<script>
import { VueCsspin } from 'vue-csspin';
import 'vue-csspin/dist/vue-csspin.css';

export default {
    name: "Loading",
    components: { VueCsspin },
};
</script>
