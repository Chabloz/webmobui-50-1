<script setup>
  defineProps({
    unit: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: Number,
      required: false,
      default: null
    }
  })

  const emits = defineEmits(['update:modelValue']);

  function changeValue(event) {
    emits('update:modelValue', Number(event.target.value));
  }

</script>

<template>
  <div>
    <label v-if="unit">{{  unit }}</label>
    <input type="number" :value="modelValue" @input="changeValue($event)">
  </div>
</template>

<style scoped>
  input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
  }
</style>
