<script setup>
  import TheTasksHeader from './components/tasks/TheTasksHeader.vue';
  import TheTasksList from './components/tasks/TheTasksList.vue';
  import TheTasksFormAdd from './components/tasks/TheTasksFormAdd.vue';
  import {page} from './stores/tasks.js';

</script>

<template>
  <the-tasks-header/>
  <the-tasks-form-add v-if="page === 'add'"/>
  <the-tasks-list v-if="page === 'home'"/>
  <the-tasks-del v-if="page === 'del'"/>
</template>

<style scoped>

</style>
