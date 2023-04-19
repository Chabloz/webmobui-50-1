<script setup>
  import { computed, ref, watch} from 'vue';
  import {tasks, page} from '../../stores/tasks.js';

  function deleteTask(task) {
    // delete the task in the tasks array
    const index = tasks.value.indexOf(task);
    tasks.value.splice(index, 1);
  }

  const search = ref('');

  // computed for filtered tasks
  const filteredTasks = computed(() => {
    return tasks.value.filter(task => task.text.includes(search.value));
  });


</script>

<template>
  <input type="text" v-model="search" placeholder="search">
  <button @click="page = 'add'">Add</button>
  <ul>
    <li v-for="task of filteredTasks">
      {{ task.text }}
      <button @click="deleteTask(task)">del</button>
    </li>
  </ul>
</template>

<style scoped>
  * {
    display: block;
    }
</style>