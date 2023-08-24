<template>
  <div class="base">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}

html {
  font-size: 62.5%;
}

.base {
  /* background-color: #efffff; */
  /* overflow-x: scroll; */
}
</style>