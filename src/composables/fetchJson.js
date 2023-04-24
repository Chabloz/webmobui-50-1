import { isRef, ref, unref, watch } from "vue";

export function useFetchJson(url) {

  const data = ref(null);

  async function fecthJson(url){
    const response = await fetch(unref(url));
    const res = await response.json();
    data.value = res;
  }

  fecthJson(url);

  if (isRef(url)) watch(url, () => fecthJson(url));

  return {data};
}