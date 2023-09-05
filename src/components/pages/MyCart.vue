<template>
<div>
    <div v-if="!items.length" class="empty-cart">
        No, Items in the cart!!!
    </div>

    <div v-else class="my-cart-container">
        <ul>
            <cart-item v-for="item in items"
                :key="item.id"
                :id="item.id"
                :image="item.images[0]"
                :brand="item.brand"
                :title="item.title"
                :price="item.price"
                :quantity="item.quantity"
                :total="item.total">
                </cart-item>
        </ul>
    </div>
</div>
</template>

<script setup>
import { useCartStore } from '../../store/cartStore.js';
import CartItem from './CartItem.vue'

const cartStore = useCartStore();

const items = cartStore.getItems;
console.log(items);
</script>

<style scoped>
.empty-cart {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    padding: 2rem;
}

.my-cart-container ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15rem;
  margin: 10rem 15rem;
}
</style>