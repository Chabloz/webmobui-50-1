<script setup>
  import { ref, watch } from 'vue';
  import { useLocalStorage } from './composables/localStorage.js';

  const {value: todoList} = useLocalStorage('tasks', []);
  const {value: search} = useLocalStorage('search', '23');

  setTimeout(() => {
    todoList.value.push({ id: 4, text: 'Learn Composition API', done: false });
  }, 2000);



</script>

<template>
  <input type="text" v-model="search" />
  <ul>
    <li v-for="todo of todoList">
      {{ todo.text }}
    </li>
  </ul>
</template>

<style scoped>

</style>
