<script setup>
   import { computed, ref } from 'vue';
   import { useFetchJson } from './composables/fetchJson.js';
   import TheCourseEditor from './components/TheCourseEditor.vue';


   const page = ref(1);
   const url = computed(() => `https://chabloz.eu/files/horaires/all?page=${page.value}`);


   const { data: schedule} = useFetchJson(url);

  const editMode = ref(false);
</script>

<template>
  <div>
    <the-course-editor v-if="editMode"></the-course-editor>

    <h1>Horaires</h1>
    <button @click="page++">Next</button>
    <button @click="page--">Prev</button>
    <template v-for="course of schedule">
        <header>{{ course.label }}</header>
        <main>{{ course.room }}</main>
        <button @click="editMode = true">Edit</button>
    </template>
  </div>

</template>

<style scoped>

</style>
