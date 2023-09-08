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
  height: 100vh;
}

@media(max-width: 76em) {
  html {
    overflow-x: auto;
    overflow-y: auto;
  }
}

@media (max-width: 37.5em) {
  html {
    font-size: 45%;
    overflow-x: hidden;
  }
}

@media(max-width: 30em) {
  html {
    font-size: 35%;
  }
}
</style>