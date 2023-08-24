<template>
  <div class="the-item-container">
      <router-link :to="'/itemdetails/' + id">
    <li :key="id">
      <div class="image-container">
      <img :src="image" alt="" />
      </div>
      <div class="desc-container">
        <h1>{{ brand }}</h1>
        <div class="title-container">
          <h5>{{ title }}</h5>
        </div>
        <h3>{{ price }}</h3>
      </div>
    </li>
      </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  id: "id",
  image: "image",
  brand: "brand",
  title: "title",
  price: "price",
});


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
  height: 37rem;
  /* background-color: red; */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 1.2rem 1.2rem #eee;
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
  background-color: #1e612b;
  /* display: flex; */
  height: 12rem;
  padding: 1rem;
}

.the-item-container h1 {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  color: #eee;
}

.the-item-container .title-container {
  max-height: 4.2rem;
  overflow: hidden;
  margin-bottom: 0.8rem;
}

.the-item-container h5 {
  font-size: 1.8rem;
  font-weight: 300;
  color: #ddd;
}

.the-item-container h3 {
  font-size: 1.8rem;
  font-weight: 400;
  color: #eee;
}

a {
  text-decoration: none;
}
</style>