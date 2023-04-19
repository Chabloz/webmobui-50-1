  import { ref } from 'vue';
  import { useLocalStorage } from '../composables/localStorage.js';

  export const {value: tasks} = useLocalStorage('tasks', []);

  export const page = ref('home');

