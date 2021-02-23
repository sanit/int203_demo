const MyComponent = {
    /*html*/
    template: `<p> My Component </p>`
}

const app = Vue.createApp({
    data(){
        return {
            greeting: 'Hello'
        }
    },
    components: {
        'my-component': MyComponent
    }
})

app.mount('#app')

