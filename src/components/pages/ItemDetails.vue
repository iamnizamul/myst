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
        <h4>{{ price }}</h4>
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

</script>

<style>
.item-detail-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  /* text-align: center; */
  margin: 5rem auto;
  width: 120rem;
}

.image-detail-container {
    /* padding: 5rem; */
}

.image-list-container {
  /* background: #1e612b; */
  /* display: flex; */
  /* height: 5rem; */
}

.image-list-container ul {
  /* margin: 2rem; */
  margin-top: 5rem;
  list-style: none;
  text-align: center;
}

.image-list-container li {
  margin-right: 1.6rem;
  /* background-color: red; */
  /* height: 6rem;
  width: 6rem; */
  /* height: 100%;
  width: 100%; */
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #1e612b;
  cursor: pointer;
  height: 5rem;
  width: 5rem;
  display: inline-block;

}

.image-list-container li:hover,
.image-list-container li:active {
  box-shadow: 0 0 3px 3px #1e612b;
}

.image-list-container img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  /* padding: 1rem; */
}

.selected-image-container {
  /* background: yellow; */
  /* width: 100%;
    height: 100%; */
    height: 40rem;
    text-align: center;
    margin-top: 2rem;
}

.selected-image-container img {
  /* padding: 2rem; */
  height: 100%;
  width: 100%;
  object-fit: contain;
}

.item-description-container {
  /* background: #bcd0bf; */
  margin: auto 0;
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
    font-size: 3.2rem;
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

</style>