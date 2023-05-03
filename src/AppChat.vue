<script setup>
  import TheHeader from './components/TheHeader.vue';
  import { useFetchJson } from './composables/fetchJson.js';
  import TheLoginForm from './chat/TheLoginForm.vue';
  import { ref } from 'vue';

  // const {data: response} = useFetchJson('https://chabloz.eu/ws/chat/user/login?user=chabloz');
  // const {data: messages} = useFetchJson('https://chabloz.eu/ws/chat/msg/get');

  // console.log(response.value);

  const page = ref('login');

</script>

<template>
  <the-header />
  <the-login-form v-if="page == 'login'"/>
  <!-- <the-chat v-if="page == 'chat'"/> -->
</template>

<style scoped>

</style>
