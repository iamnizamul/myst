<template>
  <div class="helper-container">
      <h2 class="header-filter">GENDER</h2>
    <div class="gender-filter">
      <input type="checkbox" id="men" name="gender" @click="genderMen" checked @change="setFilter"/>
      <label for="men" @click="genderMen">Men</label><br>
      <input type="checkbox" id="women" name="gender" @click="genderWomen" checked @change="setFilter"/>
      <label for="women" @click="genderWomen">Women</label>
    </div>
    <div class="style-filter">
      <h2 class="header-filter">STYLES</h2>
      <input type="checkbox" id="tshirts" name="styles" @click="styleTshirts" checked @change="setFilter"/>
      <label for="tshirts">TShirts</label><br />
      <input type="checkbox" id="shoes" name="styles" @click="styleShoes" checked @change="setFilter"/>
      <label for="shoes">Shoes</label>
    </div>
  </div>
</template>

<script setup>
import { useItemStore } from '../../store/itemStore.js'
// import { reactive } from 'vue';

const itemStore = useItemStore();

let filters = {
  men: true,
  women: true,
  tshirts: true,
  shoes: true
}

function setFilter(event) {
  const inputId = event.target.id;
  const isActive = event.target.checked;
  const updatedFilters = {
    ...filters,
    [inputId]: isActive
  }
  filters = updatedFilters;
  console.log(filters);
  itemStore.setFilter(filters)
}

// const gender = ref('');
// const styles = ref([]);

// function genderMen() {
//     itemStore.genderMen();
// }

// function genderWomen() {
//     itemStore.genderWomen()
// }

// function styleTshirts() {
//     itemStore.styleTshirts()
// }

// function styleShoes() {
//     itemStore.styleShoes()
// }

</script>

<style scoped>
.helper-container {
  padding: 4rem;
  background: #eee;
  min-height: calc(100vh - 9.6rem);
}

.gender-filter {
  margin-bottom: 2.4rem;
}

.header-filter {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

input[type="radio"],
input[type="checkbox"] {
  accent-color: #1e612b;
  /* margin-bottom: 5px; */
}

input[type="radio"] + label,
input[type="checkbox"] + label {
  font-weight: 500;
  font-size: 1.2rem;
  margin: 5px;
}

input,
label {
  vertical-align: middle;
}

br {
}
</style>