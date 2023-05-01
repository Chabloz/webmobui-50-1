<script setup>
  import { ref, computed } from 'vue';
  import { bookmarks } from '../stores/bookmarks.js';
  import BookmarkEntry from './BookmarkEntry.vue';
  import BookmarkForm from './BookmarkForm.vue';

  // Put this in a unit test file
  // console.log(bookmarks.value);
  // const b1 = { label: 'Vue 3', url: 'https://v3.vuejs.org/' };
  // add(b1);
  // add({ label: 'Vue 3 ex', url: 'https://v3.vuejs.org/', tags: 'vue javascript'});
  // console.log(bookmarks.value);
  // remove(b1);
  // console.log(bookmarks.value);

  const showForm = ref(false);

  const filterBy = ref('');

  const bookmarksFiltered = computed(() => {
    return bookmarks.value.filter((bookmark) => {
      return bookmark.tags.toLowerCase().includes(
        filterBy.value.toLowerCase()
      );
    });
  });

  const bookmarksSorted = computed(() => {
    return bookmarksFiltered.value.sort((a, b) => {
      return a.label.localeCompare(b.label);
    });
  });
</script>

<template>
  <div>
    <input type="text" v-model="filterBy" autofocus>
  </div>
  <button @click="showForm = true">Add</button>
  <bookmark-form
    v-if="showForm"
    @close="showForm = false"
  />
  <bookmark-entry
    v-for="(bookmark, index) of bookmarksSorted"
    :key="index"
    :bookmark="bookmark"
  />
</template>

<style scoped>

</style>