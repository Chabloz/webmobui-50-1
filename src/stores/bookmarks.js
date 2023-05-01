import { ref } from "vue";
import { useLocalStorage } from "../composables/localStorage.js";

export const {value: bookmarks} = useLocalStorage('bookmarks', []);

export function add(bookmark) {
  // validate bookmark
  // label must be a string and is not empty
  if (typeof bookmark.label !== "string" || bookmark.label.length === 0) {
    throw new Error("Bookmark label must be a string and is not empty");
  }

  bookmarks.value.push(bookmark);
}

export function remove(bookmark) {
  const index = bookmarks.value.indexOf(bookmark);
  bookmarks.value.splice(index, 1);
}

export function update(bookmark, newBookmark) {
  const index = bookmarks.value.indexOf(bookmark);
  bookmarks.value.splice(index, 1, newBookmark);
}