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
                newItem.images = data.images;
                newItem.description = data.description;
                newItem.quantity = 1;
                newItem.total = data.price;
                
                this.items.push(newItem)
            } else  {
                itemExist.quantity++;
                itemExist.total = itemExist.total + itemExist.price;
            }
            console.log(this.items);
        },
        add(id) {
            const item = this.items.find((item) => item.id === id);
            item.quantity++;
            item.total = item.total + item.price;
        },
        subtract(id) {
            const item = this.items.find((item) => item.id === id);
            item.quantity--;
            item.total = item.total - item.price;
        },
        remove(id) {
            const findIndex = this.items.findIndex((item) => item.id === id);
            this.items.splice(findIndex, 1)
        }
    }
})