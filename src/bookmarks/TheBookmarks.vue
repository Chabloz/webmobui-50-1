<script setup>
  import { ref } from 'vue';
  import BookmarkEntry from './BookmarkEntry.vue';
  import BookmarkForm from './BookmarkForm.vue';

  // Put this in a unit test
  import { bookmarks, add, remove} from '../stores/bookmarks.js';

  // console.log(bookmarks.value);
  // const b1 = { label: 'Vue 3', url: 'https://v3.vuejs.org/' };
  // add(b1);
  add({ label: 'Vue 3 ex', url: 'https://v3.vuejs.org/', tags: 'vue javascript'});
  // console.log(bookmarks.value);
  // remove(b1);
  // console.log(bookmarks.value);

  const showForm = ref(false);


</script>

<template>
  <button @click="showForm = true">Add</button>
  <bookmark-form
    v-if="showForm"
    @close="showForm = false"
  />
  <bookmark-entry
    v-for="bookmark in bookmarks"
    :bookmark="bookmark"
  />
</template>

<style scoped>

</style>