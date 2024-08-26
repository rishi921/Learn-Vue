<script setup>
import { ref, computed, onMounted } from "vue";
import ListItem from "./ListItem.vue";

const storageItems = ref([]);

const setToStorage = (items) => {
  localStorage.setItem("list-items", JSON.stringify(items));
};

const getFromStorage = () => {
  const stored = localStorage.getItem("list-items");
  return stored ? JSON.parse(stored) : [];
};

const initListItems = () => {
  if (storageItems.value.length === 0) {
    const listItems = [
      { title: "Make a Todo App", checked: false },
      { title: "Buy Flower", checked: false },
      { title: "Learn a new Technology", checked: true },
      { title: "Feed the Fish", checked: true },
      { title: "Learn Vue", checked: false },
    ];
    setToStorage(listItems);
    storageItems.value = listItems;
  }
};

const sortedList = computed(() => {
  return [...storageItems.value].sort(
    (a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0)
  );
});

const toggleItemChecked = (item) => {
  item.checked = !item.checked;
};

const updateItem = (item) => {
  const updatedItem = findItemInList(item);
  if (updatedItem) {
    toggleItemChecked(updatedItem);
    setToStorage(storageItems.value);
  }
};

const findItemInList = (item) => {
  return storageItems.value.find((i) => i.title === item.title);
};

onMounted(() => {
  storageItems.value = getFromStorage();
  initListItems();
});
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in sortedList" :key="index">
        <ListItem
          :isChecked="item.checked"
          @click.prevent="() => updateItem(item)"
        />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
