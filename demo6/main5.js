const app = Vue.createApp({
    data(){
        return {
            greeting: 'Hello'
        }
    }
})

app.component('my-component',{
    props: ['title'],
    /*html*/
    template:`<p>My Component : {{title}}</p>`
})

app.mount('#app')