const app = {
    data() {
        return {
            tasks: [{title: 'Learing INT203 Client-side Web Programming 2',done: false},
                    {title: 'Building modern websites with tailwindcss', done: false},
                    {title: 'Developer web applications fast and hassle free with Spring', done: false}
                ],
            inputTask: ''
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        addNewTask(){
            if(this.inputTask){
                let newTask = { title: this.inputTask, done: false}
                this.tasks.push(newTask)
                this.inputTask = ''
            }
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
    }
}
Vue.createApp(app).mount('#app')

