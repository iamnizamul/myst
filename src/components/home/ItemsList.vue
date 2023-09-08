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
const items = computed(() => (store.getFilteredItems.length? store.getFilteredItems : store.items))

</script>

<style scoped>
.items-list-container {
  margin: 0 auto;
  padding: 10rem 5rem;
  text-align: center;
 }

.items-list-container ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
  width: max-content;
}

@media(max-width: 93em) {
  .items-list-container ul {
    gap: 7rem;
  }
}

@media (max-width: 37.5em) {
  .items-list-container {
    text-align: center;
    padding: 3rem 0 3rem 0 ;
  }

  .items-list-container ul {
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    margin: 0 auto;
  }
}

</style>
