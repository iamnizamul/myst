<template>
    <div class="container">
        <the-helper></the-helper>
        <items-list></items-list>
    </div>
</template>

<script setup>
import TheHelper from '../home/TheHelper.vue'
import ItemsList from '../home/ItemsList.vue'
</script>

<style scoped>
.container {
    /* background: blue; */
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>