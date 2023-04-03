<script setup>
  import { computed, ref, watch } from 'vue';


  const x = ref(localStorage.getItem('x') ?? 2);
  const y = computed(() => x.value * 2);

  function add() {
    x.value++;
  }

  watch(x,() => localStorage.setItem('x', x.value))

</script>

<template>
  <header>Test</header>
  <p> {{ x }}</p>
  <button @click="add()">+</button>
  <input type="number" v-bind:value="x">
  <p> {{ y }}</p>
</template>

<style scoped>
  header {
    color: v-bind('x > 5 ? "red" : "blue"');
  }
  * {
    display: block;
  }
</style>
