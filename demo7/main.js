const app = Vue.createApp({
    data() {
        return {
            tasks: [{id: 1, title: 'Learing INT203 Client-side Web Programming 2',done: false},
                    {id: 2, title: 'Building modern websites with tailwindcss', done: false},
                    {id: 3, title: 'Developer web applications fast and hassle free with Spring', done: false}
                ],
        }        
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        addNewTask(task){
            if(task){
                let newTask = { title: task, done: false}
                this.tasks.push(newTask)
            }
        },
        deleteTask(index){
            this.tasks.splice(index,1)
        }
    }
})


