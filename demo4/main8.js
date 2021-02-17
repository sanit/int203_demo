const app = {
    data() {
        return {
            tasks: [{title: 'Learing INT203 Client-side Web Programming 2',done: false},
                    {title: 'Building modern websites with tailwindcss', done: false},
                    {title: 'Developer web applications fast and hassle free with Spring', done: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
    }
}
Vue.createApp(app).mount('#app')

