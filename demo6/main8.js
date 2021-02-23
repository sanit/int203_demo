const app = Vue.createApp({
    data(){
        return {
            items: [ {id: 1, name: 'Banana', price: 60 },
                     {id: 2, name: 'Orange', price: 100 }],
            cart: 0
        }
    },
    methods: {
        addCart(){
            this.cart++ 
        }
    }
})

app.component('shop-item',{
    props: ['item'],
    /*html*/
    template:
    `<div>
        <p>
        {{item.name}}  price : {{item.price}} 
        <button @click="addToCart" class="bg-green-200 p-1 rounded-xl">Add to cart</button>
        </p>
    </div>`,
    methods: {
        addToCart() {
            this.$emit('update-cart')
        }
    }
})

app.mount('#app')

