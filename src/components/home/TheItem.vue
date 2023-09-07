<template>
  <div class="the-item-container">
    <li :key="id">
      <router-link :to="'/itemdetails/' + id">
      <div class="image-container">
      <img :src="image" alt="" />
      </div>
      <div class="desc-container">
        <h1>{{ brand }}</h1>
        <div class="title-container">
          <h5>{{ title }}</h5>
        </div>
        <h3>Rs. {{ price }}</h3>
      </div>
      </router-link>
      <div class="add-to-cart-button" @click="addToCart">
        <h3>Add To Cart</h3>
      </div>
    </li>
  </div>
</template>

<script setup>
import { useItemStore } from '../../store/itemStore.js'
import { useCartStore } from '../../store/cartStore.js'
import { ref } from 'vue';

const props = defineProps({
  id: "id",
  image: "image",
  brand: "brand",
  title: "title",
  price: "price",
});

const itemStore = useItemStore();
const cartStore = useCartStore();

const item = ref('');
item.value = itemStore.findItem(props.id);

function addToCart() {
  cartStore.addToCart(item.value)
}


console.log(props.title);
</script>

<style scoped>
.the-item-container {
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* background: blue; */
  /* display: flex; */
}

.the-item-container li {
  /* margin-bottom: 3rem; */
  text-align: center;
  /* border: 2px solid black; */
  /* padding: 3rem; */
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  /* justify-content: space-between; */
  height: 42rem;
  width: 30rem;
  /* background-color: red; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 1.2rem 1.2rem #d2dfd5;
  transition: all 0.3s ease;
  cursor: pointer;
}

.the-item-container li:hover {
  transform: scale(1.05);
}

.image-container {
  /* height: 100%;
    width: 100%; */
  /* background-color: #fff;
    margin-bottom: 2rem; */
    height: 25rem;
    width: 100%;
    text-align: center;
    /* background-color: red; */
}

.the-item-container img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  /* padding: auto; */
  /* margin-bottom: 2rem; */
  padding: 2rem;
}

.the-item-container .desc-container {
  vertical-align: bottom;
  background-color: #eee;
  /* background-color: #1e612b; */
  /* display: flex; */
  height: 12rem;
  padding: 1rem;
}

.the-item-container h1 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #000;
}

.the-item-container .title-container {
  max-height: 4.2rem;
  overflow: hidden;
  margin-bottom: 0.8rem;
}

.the-item-container h5 {
  font-size: 1.8rem;
  font-weight: 300;
  color: #333;
}

.the-item-container h3 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
}

.add-to-cart-button {
  background-color: #1e612b;
  height: 5rem;
  width: 100%;
  padding: 1.5rem;
  margin: auto;
  /* vertical-align: middle; */
}

.add-to-cart-button h3 {
  color: #fff;
  /* vertical-align: middle; */
  /* margin: auto; */
}

a {
  text-decoration: none;
}

@media(max-width: 86em) {
  .the-item-container li {
    width: 25rem;
  }
}

@media(max-width:37.5rem) {
  .the-item-container li {
    /* width: 30rem; */
    /* margin: 0; */
    margin-right: 0 !important;
  }
}
</style>