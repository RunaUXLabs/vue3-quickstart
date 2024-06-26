<template>
    <div>
        <!-- 자식영역에서 구현될 구성물을 적을필요없이 <slot></slot>만 있으면 완료! -->
        <input type="checkbox" :value="id" :checked="checked"
            @change="$emit('check-changed', { id, checked: $event.target.checked })" />
        <slot>Item</slot>
        <!-- <slot>태그안에 글씨를 써 놓는 이유는 구분을 쉽게 하기 위함이지, 해당 텍스트는 부모에서 내려보낸 템플릿으로 덮어쓰기된다. -->
    </div>
</template>

<script>
export default {
    name: "CheckBox2",
    props: ["id", "checked"]
};
</script>