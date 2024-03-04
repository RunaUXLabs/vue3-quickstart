<template>
    <div>
        <!-- 자식영역에서 구현될 구성물을 적을필요없이 <slot></slot>만 있으면 완료! -->
        <input type="checkbox" :value="id" :checked="checked"
            @change="$emit('check-changed', { id, checked: $event.target.checked })" />
        <slot>Item</slot>
    </div>
</template>

<script>
export default {
    name: "CheckBox2",
    props: ["id", "checked"]
};
</script>