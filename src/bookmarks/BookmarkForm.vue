<script setup>
  import { onMounted, ref } from 'vue';
  import { add, update } from '../stores/bookmarks.js';

  const props = defineProps({
    bookmark: {
      type: Object,
      required: false,
      default: () => ({
        label: '',
        url: '',
        tags: '',
      })
    },
    mode: {
      type: String,
      required: false,
      default: 'add',
      validator: (value) => {
        return ['add', 'modify'].includes(value);
      }
    }
  })

  const label = ref(props.bookmark.label);
  const url = ref(props.bookmark.url);
  const tags = ref(props.bookmark.tags);

  const emits = defineEmits(['close']);


  function manageSubmit() {
    const newBookmark = {
      label: label.value.trim(),
      url: url.value,
      tags: tags.value
    };
    if (props.mode == 'modify') {
      update(props.bookmark,newBookmark);
    } else {
      add(newBookmark);
    };
    emits('close');
  }

  function cancel() {
    emits('close');
  }

  const elLabel = ref(null);

  onMounted(() => {
    elLabel.value.focus();
  });

</script>

<template>
  <form @submit.prevent="manageSubmit()">
    <label for="label">Label</label>
    <input
      type="text"
      name="label"
      required
      v-model="label"
      ref="elLabel"
    />
    <label for="url">URL</label>
    <input type="url" name="url" required v-model="url"/>
    <label for="tags">Tags</label>
    <input type="text" name="tags" required  v-model="tags"/>
    <button>{{ mode == 'add' ? 'Add' : 'Save'}}</button>
    <button @click.prevent="cancel()">Cancel</button>
  </form>
</template>

<style scoped>
  form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
</style>