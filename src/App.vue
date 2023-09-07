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

html,
body {
  /* height: 100vh; */
  /* width: 100vw; */
  /* overflow: auto; */
  /* width: 100%; */
}

.base {
  /* background-color: #efffff; */
  /* overflow: auto; */
  /* overflow-x: auto; */
  /* width: 100%; */
  min-width: 100vh;
}

@media (max-width: 37.5em) {
  html {
    font-size: 50%;
  }
}
</style>