<template>
<div>
    <div class="cart-heading">My Cart</div>
    <div v-if="!items.length" class="empty-cart">
        No items in the cart!!!
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
        <base-button class="checkout">Checkout</base-button>
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
div {
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 120rem;
    margin: 0 auto;
}

.cart-heading {
    margin-top: 1.6rem;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: #1e612b;
}

.empty-cart {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    margin: 5rem 0;
}

.my-cart-container {
    margin: 5rem auto;
    /* text-align: center; */
}

.my-cart-container ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 5rem;
}

.checkout {
  margin: 5rem 0;
  cursor: pointer;
  background-color: #1e612b;
  color: #fff;
}

.checkout:hover {
    background-color: #123a1a;
}

@media(max-width:76em) {
    .my-cart-container {
        /* padding-left: 8rem; */
    }
}

@media(max-width: 37.5em) {
    div{
        /* display: initial; */
        width: max-content;
    }
    .my-cart-container {
        padding: 0;
    }
    .my-cart-container ul {
        grid-template-columns: 1fr;
    }
}
</style>