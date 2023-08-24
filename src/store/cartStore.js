import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    state() {
        return {
            items: []
        }
    },
    getters: {
        getItems() {
            return this.items
        }
    },
    actions: {
        addToCart(data) {
            const itemExist = this.items.find((item) => item.id === data.id);
            if (!itemExist) {

                const newItem = {};
                newItem.id = data.id;
                newItem.brand = data.brand;
                newItem.title = data.title;
                newItem.price = data.price;
                newItem.description = data.description;
                newItem.quantity = 1
                
                this.items.push(newItem)
            } else  {
                itemExist.quantity++;
            }
            console.log(this.items);
        }
    }
})