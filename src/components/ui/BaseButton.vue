<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    font-size: 2rem;
    padding: 1rem 2.4rem 1rem 2.4rem;
    border-radius: 11px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease-out;
}

button:hover,
button:active {
  transition: all 0.3s ease-in;
}
</style>