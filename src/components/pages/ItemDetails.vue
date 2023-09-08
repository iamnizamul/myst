<template>
  <div class="item-detail-container">
    <div class="image-detail-container">
      <div class="selected-image-container">
        <img :src="selectedImage" alt="" />
      </div>
      <div class="image-list-container">
        <ul>
          <li
            v-for="image in images"
            :key="image"
            @mouseover="showImage(image)"
          >
            <img :src="image" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="item-description-container">
        <h5>Brand: {{ brand }}</h5>
        <h4>{{ title }}</h4>
        <div class="line"></div>
        <h4>Rs. {{ price }}</h4>
        <p>Inclusive of all taxes</p>
        <div class="line"></div>
        <ul>
            <li v-for="desc in description" :key="desc">
                <p>{{ desc }}</p>
            </li>
        </ul>
        <base-button class="add-to-cart" @click="addToCart">
            Add to Cart
        </base-button>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useItemStore } from "../../store/itemStore.js";
import { useCartStore } from "../../store/cartStore.js";

const route = useRoute();
const itemStore = useItemStore();
const cartStore = useCartStore();

const id = ref("");
id.value = route.params.id;
console.log(id.value);

const item = ref('');
const images = ref('');
const brand = ref('');
const title = ref('')
const price = ref('')
const description = ref('')

item.value = itemStore.findItem(id.value);
images.value = item.value.images;
brand.value = item.value.brand;
title.value = item.value.title;
price.value = item.value.price;
description.value = item.value.description
console.log(images.value);

const selectedImage = ref("");
selectedImage.value = images.value[0];

function showImage(image) {
  selectedImage.value = image;
}

console.log(item.value);

function addToCart() {
    console.log(item.value);
    cartStore.addToCart(item.value)
}

console.log(cartStore.getItems.value);
</script>

<style>
.item-detail-container {
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 10rem;
  padding-top: 5rem;
  margin: auto;
  /* padding: 5rem; */
  width: max-content;
  height: max-content;
}

.image-detail-container {

    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-list-container ul {
  margin-top: 5rem;
  list-style: none;
  text-align: center;
}

.image-list-container li {
  margin-right: 1.6rem;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #1e612b;
  cursor: pointer;
  height: 5rem;
  width: 5rem;
  display: inline-block;
}

.image-list-container li:last-child {
  margin-right: 0;
}

.image-list-container li:hover,
.image-list-container li:active {
  box-shadow: 0 0 3px 3px #1e612b;
}

.image-list-container img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.selected-image-container {
    height: 40rem;
    width: 40rem;
    margin-top: 2rem;
}

.selected-image-container img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  
}

.item-description-container {
  margin: auto ;
  width: max-content;
}

.item-description-container ul {
    margin-left: 2rem;
    font-size: 1.6rem;
}

.item-description-container h5 {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
}
.item-description-container h4 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
}

.line {
    border: 1px solid #1e612b;
    margin-bottom: 1.6rem;
}

p {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
}

.add-to-cart {
    width: 100%;
    margin-top: 2.4rem;
    background-color: #1e612b;
    color: #fff;
}

.add-to-cart:hover {
    background-color: #15441e;
}

@media(max-width: 37.5em) {
  .item-detail-container {
    display: initial;
  }
  .image-list-container ul {
    margin-bottom: 5rem;
  }
}
</style>