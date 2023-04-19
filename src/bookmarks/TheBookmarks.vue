<script setup>
  import { ref } from 'vue';
  import AddFavForm from './AddFavForm.vue';
  const favs = [{label: "Test", url: "https://example.com"}];

  const showAddForm = ref(false);
</script>

<template>
  <button @click="showAddForm = true">Add</button>
  <AddFavForm v-if="showAddForm" />
  <ul>
    <li v-for="fav of favs">
      <a :href="fav.url" target="_blank">
        {{ fav.label }}
      </a>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding-top: 1rem;
  }
  li {
    padding-left: 1rem;
  }
</style>