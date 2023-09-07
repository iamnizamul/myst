<template>
  <!-- <div> -->
    <div class="helper-container-desktop helper-container-palmtop">
      <div class="gender-filter">
        <h2 class="header-filter">GENDER</h2>
        <input
          type="checkbox"
          id="men"
          :checked="filters.men"
          @change="setFilter"
        />
        <label for="men" @click="genderMen">Men</label><br />
        <input
          type="checkbox"
          id="women"
          :checked="filters.women"
          @change="setFilter"
        />
        <label for="women" @click="genderWomen">Women</label>
      </div>
      <div class="style-filter">
        <h2 class="header-filter">STYLES</h2>
        <input
          type="checkbox"
          id="tshirts"
          :checked="filters.tshirts"
          @change="setFilter"
        />
        <label for="tshirts">TShirts</label><br />
        <input
          type="checkbox"
          id="shoes"
          :checked="filters.shoes"
          @change="setFilter"
        />
        <label for="shoes">Shoes</label>
      </div>
    </div>
    <!-- <div class="helper-container-palmtop">jhbmjhb</div> -->
  <!-- </div> -->
</template>

<script setup>
import { useItemStore } from "../../store/itemStore.js";
// import { reactive } from 'vue';

const itemStore = useItemStore();

let filters = {
  men: itemStore.activeFilters.men,
  women: itemStore.activeFilters.women,
  tshirts: itemStore.activeFilters.tshirts,
  shoes: itemStore.activeFilters.shoes,
};

function setFilter(event) {
  const inputId = event.target.id;
  const isActive = event.target.checked;
  const updatedFilters = {
    ...filters,
    [inputId]: isActive,
  };
  filters = updatedFilters;
  console.log(filters);
  itemStore.setFilter(filters);
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
.helper-container-desktop {
  margin: 2rem;
  border: 1px solid #1e612b;
  border-radius: 11px;
  padding: 4rem;
  /* background: #eee; */
  /* min-height: calc(100vh - 9.6rem); */
}

.helper-container-palmtop {
  /* display: none; */
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

@media(max-width: 37.5em) {
  .helper-container-desktop {
    /* width: 100%; */
  }

  .gender-filter {
    display: flex;
    align-items: center;
  }

  .style-filter {
    display: flex;
    align-items: center;
  }

  .header-filter {
    margin-bottom: 0;
    margin-right: 2rem;
  }
}
</style>