const MyComponent = {
    /*html*/
    template: `<p> {{ message }} </p>`,
    data() {
        return {
            message: 'My Component'
        }
    }
}

const app = Vue.createApp({
    /*html*/
    template: `<h1>{{greeting}}</h1>
               <my-component></my-component>`,
    data(){
        return {
            greeting: 'Hello'
        }
    },
    components: {
        MyComponent
    }
})

app.mount('#app')

