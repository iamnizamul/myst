import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    state() {
        return {
            items: []
        }
    },
    getters: {
        getItem() {
            return this.items
        }
    },
    actions: {
        
    }
})