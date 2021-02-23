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

app.mount('#app')


