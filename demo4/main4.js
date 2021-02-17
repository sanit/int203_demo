const app = {
    data() {
        return {
            tasks: ['Learing INT203 Client-side Web Programming 2',
                    'Building modern websites with tailwindcss',
                    'Developer web applications fast and hassle free with Spring'
                ]
        }
    }
}
Vue.createApp(app).mount('#app')