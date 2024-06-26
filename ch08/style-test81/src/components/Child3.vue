<template>
    <!-- <div class="child">
        <h2>Child3</h2>
    </div> -->
    <div :class="$style.child">
        <!-- css 모듈식은 스타일을 객체처럼 접근할 수 있게 만들어주고, 접근(객체.키)시 css class name을 기반으로 한다 -->
        <h2>Child3</h2>
    </div>
</template>

<script>
export default {
    name: "Child3",
    created() {
        console.log(this.$style);
    }
};
</script>

<!-- <style> -->
<style module>
.child {
    background-color: orange;
    border: solid 1px black;
    margin: 1.5em;
    padding: 1.0em;
}
</style>
