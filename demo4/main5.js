const app = {
    data() {
        return {
            tasks: [{title: 'Learing INT203 Client-side Web Programming 2',done: false},
                    {title: 'Building modern websites with tailwindcss', done: false},
                    {title: 'Developer web applications fast and hassle free with Spring', done: false}
                ]
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')