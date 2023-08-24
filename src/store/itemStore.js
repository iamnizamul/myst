import { defineStore } from "pinia";

export const useItemStore = defineStore({
    id: 'item',
    state() {
        return {
            items: [
                {
                    id: '1', 
                    brand: 'LACOSTE',
                    title: 'Lacoste Unisex T-Shirt',
                    price: 'Rs. 5,150',
                    size: ['S', 'M', 'L', 'XL'],
                    description: ['Care Instructions: Machine Wash', 'Fit Type: Loose Fit', 'Loose fit, large cut, lowed shoulders: Roomy. Eye-catching.', 'Crew neck: A t-shirt trademark.', 'Large crocodile on chest: The symbol of style.', 'Embroidered crocodile sewn on: The mark of legends.', 'Thick organic cotton jersey: Designed for daily wear. And for the planet.'],
                    images: ['https://m.media-amazon.com/images/I/61HpTf5GXwL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/61gXrlzn7KL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/71TC-t9Oy6L._UL1500_.jpg', 'https://m.media-amazon.com/images/I/51XkAbImSgL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/61CRinjYDWL._UL1500_.jpg']
                },
                {
                    id: '2',
                    brand: 'ADIDAS',
                    title: 'Adidas Womens SL20 Running Shoe',
                    price: 'Rs. 20,016',
                    size: ['5', '6', '7', '8'],
                    description: ['Sole: Rubber', 'Closure: Lace-Up', 'Heel Height: 3 inches', 'Fit Type: Regular', 'Running shoes for training','Regular fit', 'Lightstrike cushioning'],
                    images: ['https://m.media-amazon.com/images/I/81nhPqO-q8L._UL1500_.jpg',  'https://m.media-amazon.com/images/I/71WaTZyho4L._UL1500_.jpg', 'https://m.media-amazon.com/images/I/712o2aJAKeL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/71u9sZabdKL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/81WMawKT2PL._UL1500_.jpg']
                },
                {
                    id: '3',
                    brand: 'NIKE',
                    title: 'Nike Mens Air Max Pre-Day Se Running Shoe',
                    price: 'Rs. 12,295',
                    size: ['6', '7', '8', '9', '10', '11'],
                    description: ['Sole: Rubber', 'Closure: Lace-Up', 'Shoe Width: Medium', 'Material Type: Mesh', 'Model name: Air Max'],
                    images: ['https://m.media-amazon.com/images/I/713kQ6po-FL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/81wr6EYvcKL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/71eJ7hDSM8L._UL1500_.jpg', 'https://m.media-amazon.com/images/I/71xyLvDpBzL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/610FAanEgtL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/81Ap73yspUL._UL1500_.jpg']
                },
                {
                    id: '4', 
                    brand: 'DIESEL', 
                    title: 'Troy Lee Designs Factory T-Shirt',
                    price: 'Rs. 10,647',
                    size: ['M', 'L', 'XL'],
                    description: ['Fit Type: Regular Fit', '100% Cotton', 'Ring spun jersey', 'Screen printed artwork', 'Crew neck/short sleeve', 'Premium Fit'],
                    images: ['https://m.media-amazon.com/images/I/41PEOeeiKxL._UL1080_.jpg']
                },
                {
                    id: '5',
                    brand: 'PUMA',
                    title: 'Puma Unisex-Adult X-Cell Action Running Shoe',
                    price: 'Rs. 8,999',
                    size: ['5', '6', '7', '8', '9', '10', '11'],
                    description: ['Sole: Rubber', 'Closure: Lace-Up','Fit Type: Regular', 'Shoe Width: Medium', 'Style Name: Running Shoe', 'Model Name: X-Cell Action', 'Brand Color: Black-White-Cool Dark Gray', 'Material: Textile', 'Care Instructions: Wipe with a clean dry cloth'],
                    images: ['https://m.media-amazon.com/images/I/51E19w1FkBL._UL1200_.jpg', 'https://m.media-amazon.com/images/I/51AMA51FGGL._UL1200_.jpg', 'https://m.media-amazon.com/images/I/41CHHE27ajL._UL1200_.jpg', 'https://m.media-amazon.com/images/I/71O+yOym-xL._UL1200_.jpg', 'https://m.media-amazon.com/images/I/51wor5R8nRL._UL1200_.jpg', 'https://m.media-amazon.com/images/I/51OqN+L3nvL._UL1200_.jpg', 'https://m.media-amazon.com/images/I/61FM6gZlLaL._UL1200_.jpg']
                },
                {
                    id: '6',
                    brand: 'YAKESTYLE',
                    title: 'Yakestyle Womens Golf Polo Shirts 1/4 Zip Short Sleeve Quick Dry Tennis Running Athletic T-Shirts',
                    price: 'Rs. 7,648',
                    size: ['S', 'M', 'L', 'XL', '2XL'],
                    description: ['Fit Type: Loose Fit', '95% polyster, 5 spandex', 'Light sweat absorbent fabric, quickly volatilize your sweat, make your movement more refreshing.', 'Color block design adds stylish sense and show your sport confident.', 'Suit for yoga, workout, sports, running, pilates, exercise, fitness, gym and any type of workout or everyday wear.'],
                    images: ['https://m.media-amazon.com/images/I/7130BvNvZHL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/71lgJ4T2WAL._UL1500_.jpg', 'https://m.media-amazon.com/images/I/71M5yVF7QAL._UL1218_.jpg', 'https://m.media-amazon.com/images/I/61CjXokS8JS._UL1365_.jpg']
                },
                
            ]
        }
    },
    getters: {
        getItems() {
            return this.items
        }
    },
    actions: {
        findItem(id) {
            return this.items.find((item) => item.id === id)
        }
    }
})