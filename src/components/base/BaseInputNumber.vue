<script setup>
import { computed } from "vue";
import { round } from "../../utils/math.js";

  const props = defineProps({
    unit: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: Number,
      required: false,
      default: null
    },
    decimalPlaces: {
      type: Number,
      required: false,
      default: 2
    }
  })

  const emits = defineEmits(['update:modelValue']);


  const value = computed({
    get() {
      return round(props.modelValue, props.decimalPlaces);
    },
    set(value) {
      // if (value >0) {
      //   emits('update:modelValue', Number(value));
      // }
      emits('update:modelValue', Number(value));
    }
  });

</script>

<template>
  <div>
    <label v-if="unit">{{  unit }}</label>
    <input type="number" v-model="value">
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
