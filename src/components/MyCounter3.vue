<script setup>
import { ref, onMounted, onUnmounted, defineProps, computed} from 'vue';
let timer;

const props = defineProps(['init','end'])

const init = props.init || 0;
const end = props.end || 10;

const count = ref(parseInt(init));
const doubleCount = computed(() => count.value * 2);

const increment = () => {
    if(!end || count.value < parseInt(end)) {
        count.value++;
    }
    else {
        stop();
    }
}

const start = () => {
    timer = setInterval(increment, 1000);
}

const stop = () => {
    clearInterval(timer);
}

onMounted(() => {
    start();
});

onUnmounted(() => {
    stop();
});

</script>

<template>
    <div>
        <h1>Counter</h1>
        <p>Counter: {{ count }}</p>
        <p>Double Count: {{ doubleCount }}</p>
    </div>
</template>