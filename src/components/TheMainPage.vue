<script setup>
  import BaseMessage from './base/BaseMessage.vue';
  import BaseInputNumber from './base/BaseInputNumber.vue';
  import { computed, ref } from 'vue';

  const kelvin = ref(0);
  // const celcius = computed(() => kelvin.value - 273.15)
  // same with get set
  const celcius = computed({
    get() {
      return kelvin.value - 273.15;
    },
    set(value) {
      kelvin.value = value + 273.15;
    }
  });

  // function changeKelvin(value) {
  //   console.log(value);
  //   kelvin.value = value;
  // }
  const decimalPlace = 4;
</script>

<template>
  <main>
    <!-- <base-input-number unit="K" :modelValue="kelvin" @update:model-value="changeKelvin($event)"/> -->
    <base-input-number unit="K" v-model="kelvin" :decimal-places="decimalPlace"/>
    <base-input-number unit="°C" v-model="celcius"  :decimal-places="decimalPlace"/>

    <base-message role="error">Error</base-message>
    <base-message role="warning">Warning</base-message>
    <base-message>Info</base-message>
  </main>
</template>

<style scoped>
  main {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
