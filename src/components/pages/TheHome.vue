<template>
    <div class="container">
        <the-helper class="the-helper"></the-helper>
        <items-list class="home-item-list"></items-list>
    </div>
</template>

<script setup>
import TheHelper from '../home/TheHelper.vue'
import ItemsList from '../home/ItemsList.vue'
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 6fr;
}

@media (max-width: 37.5em) {
    .container {
        display: initial;
    }
}
</style>