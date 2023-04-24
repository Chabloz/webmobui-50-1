<script setup>
import { onMounted, onUnmounted } from 'vue'

function manageKey(evt) {
  console.log(evt.code, evt.key);
}

onMounted(() => window.addEventListener('keyup', manageKey))
onUnmounted(() => window.removeEventListener('keyup', manageKey))

</script>

<template>
   Editor
</template>

<style scoped>

</style>
