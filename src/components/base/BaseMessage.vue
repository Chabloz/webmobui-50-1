<script setup>
  defineProps({
    role: {
      type: String,
      required: false,
      default: 'info'
    }
  })

</script>

<template>
  <p :class="role">
    <slot />
  </p>
</template>

<style scoped>
  p {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .info {
    background-color: #00f;
    color: #fff;
  }

  .warning {
    /* yellow */
    background-color: #ff0;
    color: #fff;
  }

  .error {
    background-color: #f00;
    color: #fff;
  }

</style>
