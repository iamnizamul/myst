<template>
  <div class="cart-item-container">
    <li>
      <ion-icon name="close-circle" class="close" @click="remove"></ion-icon>
      <router-link  :to="'/itemdetails/' + id">
      <div class="image-container">
        <img :src="image" alt="" />
        <div class="vertical-line"></div>
      </div>
      </router-link>
      <div class="cart-details-container">
        <h1>{{ brand }}</h1>
        <div class="title-container">
          <h5>{{ title }}</h5>
        </div>
        <h4>Rs. {{ price }}</h4>
        <div class="quantity top-border">
          <h3>Quantity</h3>
          <div class="count">
            <h3 class="minus" v-if="quantity>1" @click="subtract">-</h3>
            <h3 class="qtty">{{ quantity }}</h3>
            <h3 class="plus" @click="add">+</h3>
          </div>
        </div>
        <div class="quantity">
          <h3>Total</h3>
          <h3>Rs. {{ total }}</h3>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup>
import { useCartStore } from '../../store/cartStore.js'

const props = defineProps({
  id: "id",
  image: "image",
  brand: "brand",
  title: "title",
  price: "price",
  quantity: "quantity",
  total: "total"
});

const cartStore = useCartStore();

console.log(props.id);

function subtract() {
    cartStore.subtract(props.id);
}

function add() {
  console.log(props.id);
  cartStore.add(props.id)
}

function remove() {
  cartStore.remove(props.id);
}
</script>

<style scoped>
.cart-item-container li {
  display: flex;
  border: 2px solid #1e612b;
  position: relative;
  width: 50rem;
}

.close {
position: absolute;
font-size: 1.6rem;
top: -1.2rem;
top: calc(height * -0.5);
right: -1.2rem;
color: #1e612b;
background-color: #fff;
height: 2.4rem;
width: 2.4rem;
cursor: pointer;
}

.cart-item-container .image-container {
  height: 25rem;
  width: 25rem;
  text-align: center;
  padding: 3rem;
  z-index: 100;
}

.vertical-line {
  position: absolute;
  height: 100%;
  right: 50%;
  top: 0;
  border: 1px solid #1e612b;
}

.cart-item-container .image-container img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.cart-item-container .cart-details-container {
  width: 28rem;
  padding: 3rem;
  position: relative;
}

.cart-item-container .cart-details-container h1 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.cart-item-container .cart-details-container .title-container {
  max-height: 4.2rem;
  overflow: hidden;
  margin-bottom: 0.8rem;
}
.cart-item-container .cart-details-container h5 {
  font-size: 1.8rem;
  font-weight: 300;
}

.cart-item-container .cart-details-container h4 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.cart-item-container .cart-details-container h3 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 1.5rem;
}

.quantity {
  display: flex;
  justify-content: space-between;
}

.top-border {
    border-top: 1px solid #1e612b;
}

.count {
  display: flex;
  gap: 1rem;
}

.plus,
.minus {
  background-color: #eee;
  padding: 0 1rem;
  cursor: pointer;
}

.plus:hover,
.minus:hover {
  background-color: #ccc;
}

.plus::selection,
.minus::selection {
  background: none;
}

.qtty {
  width: 2rem;
  text-align: center;
}
</style>