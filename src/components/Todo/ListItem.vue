
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    isChecked:false
})
</script>

<template>
    <div>
        <!-- <label>Checkbox</label> -->
        <input type="checkbox" :checked="props.isChecked">
        <slot>
            <!-- <p>Default content</p> -->
        </slot>
    </div>
</template>

<style scoped>
label{
    cursor: pointer;
}
.checked{
    text-decoration: line-through;
}
</style>
