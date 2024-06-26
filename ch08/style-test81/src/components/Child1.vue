<template>
    <div class="child">
        <h2>Child1</h2>
    </div>
</template>

<script>
export default {
    name: "Child1"
};
</script>

<!-- <style> -->
<style scoped>
/* scoped attribute를 지정하지 않으면 덮어쓰기가 된다 */
.child {
    background-color: yellow;
    border: solid 1px black;
    margin: 1.5em;
    padding: 1.0em;
}
</style>
