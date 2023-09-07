<template>
  <div class="container">
    <!-- <router-link to="/home">
      <div class="title">
        <h1>myst</h1>
      </div>
    </router-link>
    <div class="helper">
      <router-link to="/home">
        <h5 class="products">All Products</h5>
      </router-link>
        <div class="cart-div">
      <router-link to="/mycart">
          <h5 class="products">Cart</h5>
          <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
          <h5 class="cart-length" v-if="cartItems.length">
            {{ cartItems.length }}
          </h5>
      </router-link>
        </div>
    </div> -->
    <router-link to="/home">
      <h1 class="title">myst</h1>
    </router-link>
    <div class="helper">
      <router-link to="/home" class="border">
        <h5 class="products">All Products</h5>
      </router-link>
      <router-link to="/mycart" class="cart-div border">
        <h5 class="products">Cart</h5>
        <ion-icon name="cart-outline" class="cart-icon"></ion-icon>
        <h5 class="cart-length" v-if="cartItems.length">
            {{ cartItems.length }}
        </h5>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../../store/cartStore.js";
import { useItemStore } from "../../store/itemStore.js";
import { ref } from "vue";

const cartStore = useCartStore();
const itemStore = useItemStore();

const cartItems = cartStore.items;

const searchText = ref("");

function search() {
  itemStore.searchItems(searchText.value);
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");

.container {
  height: 9.6rem;
  /* background: #15441e; */
  /* background: #16451f; */
  background-color: #1e612b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.title {
  /* background: red; */
  margin-left: 3.6rem;
  /* display: flex; */
  /* align-items: center; */
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
  /* justify-content: center; */
}

.products {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  /* margin-left: 2rem; */
}

.cart-div {
  margin-left: 2rem;
  display: flex;
  align-items: center;
}

.cart-icon {
  color: #fff;
  height: 2.4rem;
  width: 2.4rem;
  margin-left: 0.6rem;
}

.cart-length {
  color: #fff;
  font-size: 1.2rem;
}

.border {
  height: 3.6rem;
  padding: 1.2rem;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-out;
}

.border:hover {
  background-color: #123a1a;
  transition: all 0.3s ease-in;
}

a {
  text-decoration: none;
}

@media (max-width: 76em) {
  .container {
    width: 120rem;
    /* min-width: 11rem; */
  }
}

@media (max-width: 37.5em) {
  .container {
    width: 100%;
  }
}
</style>