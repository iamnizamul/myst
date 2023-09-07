<template>
  <div class="items-list-container">
      <ul>
        <the-item
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :image="item.images[0]"
          :brand="item.brand"
          :title="item.title"
          :price="item.price"
        ></the-item>
      </ul>
  </div>
</template>

<script setup>
import TheItem from "./TheItem.vue";
import { useItemStore } from "../../store/itemStore.js";
import { computed } from 'vue'

const store = useItemStore();

const items = computed(() => (store.searchItems.length ? store.searchItems : store.getFilteredItems))

// console.log(store.sortedItems);
</script>

<style scoped>
.items-list-container {
  /* background: red; */
  /* width: 100%; */
  margin: 12rem auto;
  padding: 0 6rem;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
}

@media(max-width: 93em) {
  .items-list-container {
    margin: 12rem auto;
  }

  ul {
    gap: 7rem;
  }
}

@media (max-width: 37.5em) {
  ul {
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    /* place-items: center; */
    margin: 12rem auto;
  }
}

</style>
