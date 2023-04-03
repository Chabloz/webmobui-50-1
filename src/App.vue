<script setup>
import { computed, ref } from 'vue';

  const x = ref(2);
  const y = computed(() => x.value * 2);

  function add() {
    x.value++;
  }

</script>

<template>
  <p> {{ x }}</p>
  <button @click="add()">+</button>
  <input type="number" :value="x">
  <p> {{ y }}</p>
</template>

<style scoped>

</style>
