<script setup>
import { ref, watch } from 'vue';
import { useFetchJson } from '../composables/fetchJson.js';

function login() {
  const {data: response} = useFetchJson('/ws/chat/user/login?user=' + user.value);
  watch(response, () => {
    console.log(response.value);
    const {data: messages} = useFetchJson('/ws/chat/msg/get');
  });
}

const user = ref('');

setInterval(() => {
  console.log(user.value);
}, 5000);
</script>

<template>
  <form @submit.prevent="login()">
    <input type="text" placeholder="Username" v-model="user">
  </form>
</template>

<style scoped>

</style>