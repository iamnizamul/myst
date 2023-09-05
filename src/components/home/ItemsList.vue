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

const items = computed(() => store.getFilteredItems)

// console.log(store.sortedItems);
</script>

<style scoped>
.items-list-container {
  /* background: red; */
  /* width: 100%; */
  margin: 12rem;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
}
</style>