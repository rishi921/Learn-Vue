<template>
  <div>
    <h1>Counter 2</h1>
    <p>Max: {{ max }}</p>
    <p>Counter: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { customRef } from 'vue';


const count = customRef((track, trigger) => {
  let count = 0;

  return {
    get() {
      track();
      return count;
    },
    set(value) {
      
      count = value;
      trigger();
    }
  }
});

const useMax = ( max ) => {
  return customRef((track, trigger) => {
  let max = 0;

  return {
    get() {
      track();
      return max;
    },
    set(value) {
      if (value > max){
        max = value;  
      }
      trigger();
    }
  }
});
}

let max = useMax(count);

function increment() {
  console.log("Before Increment");
  count.value++;
  useMax(count.value++)
  console.log("After Increment");
}

function decrement() {
  console.log("Before Decrement");
  count.value--;
  console.log("After Decrement");
}
</script>

<style scoped>
</style>
