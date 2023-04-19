<script setup>
  import { ref } from 'vue';
  import {tasks, page} from '../../stores/tasks.js';

  const name = ref('');

  function addTask() {
    console.log('addTask', name.value);
    tasks.value.push({text: name.value, done: false });
    page.value = 'home';
  }
</script>

<template>
  <div>
    <label>Task</label>
    <input type="text" v-model="name">
    <button @click="page = 'home'">Cancel</button>
    <button @click="addTask()">Add</button>
  </div>
</template>

<style scoped>
  div {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;        ;
    background-color: #f1f1f1;
    padding: 20px;
  }
  div > * {
    display: block;
    margin: 0.5rem;
  }
</style>