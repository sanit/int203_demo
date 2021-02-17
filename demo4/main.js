    const app = {
        data() {
            return {
                task: 'Learing INT203 Client-side Web Programming 2',
                done: true,
                progress: 10
            }
        }

    }
    Vue.createApp(app).mount('#app')