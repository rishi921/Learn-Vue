<template>
  <h1>From app</h1>
  <!-- <InputBox />
  <MyCounter />
  <MyCounter2 />
  <MyCounter3 />
  <DisplayDate /> -->
  <TodoList />
</template>

<script>
import MyCounter from "./components/MyCounter.vue";
import MyCounter2 from "./components/MyCounter2.vue";
import MyCounter3 from "./components/MyCounter3.vue";
import DisplayDate from "./components/DisplayDate.vue";
import InputBox from "./components/InputBox.vue";
import TodoList from "./components/Todo/TodoList.vue";
export default {
  name: "App",
  components: {
    MyCounter,
    MyCounter2,
    MyCounter3,
    // Updated to match the new component name
    DisplayDate,
    InputBox,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
