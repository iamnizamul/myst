<template>
  <div class="container">
    <router-link to="/home">
    <div class="title">
      <h1>myst</h1>
    </div>
    </router-link>
    <div class="helper">
      <input type="text" placeholder="search my style" />
      <ion-icon name="search-outline" class="search-icon"></ion-icon>
      <router-link to="/mycart">
        <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
      </router-link>
      <router-link to="/mycart">
        <h5 class="cart-length" v-if="cartItems">{{ cartItems.length }}</h5>
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../../store/cartStore.js'

const cartStore = useCartStore();

const cartItems = cartStore.items
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");

.container {
  height: 9.6rem;
  background: #15441e;
  /* background: #16451f; */
  /* background-color: #1e612b; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  /* background: red; */
  margin-left: 3.6rem;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 4.8rem;
  color: #fff;
  font-family: "Oswald", sans-serif;
}

.helper {
  margin-right: 3.6rem;
  /* background: yellow; */
  display: flex;
  align-items: center;
}

input {
  font-size: 1.8rem;
  width: 25rem;
  height: 4.8rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 1rem;
  border: none;
  outline: none;
}

.search-icon {
  background: #ddd;
  height: 3rem;
  width: 3rem;
  padding: 0.9rem 1rem 0.9rem 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  /* border: none; */
  transition: all 0.3s ease;
}

.search-icon:hover {
  background: #aaa;
}

.cart-length {
    color: #eee;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
}

.cart-icon {
  color: #fff;
  height: 3.6rem;
  width: 3.6rem;
  margin-left: 1.6rem;
}

a {
    text-decoration: none;
}
</style>