const app = Vue.createApp({
    data(){
        return {
            greeting: 'Hello'
        }
    }
})

app.component('my-component',{
    template:`<p>My Component</p>`
})

app.component('my-component2',{
    template:`<my-component></my-component>`
})

app.mount('#app')

