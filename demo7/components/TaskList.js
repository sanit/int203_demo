app.component('task-list',{
    props:{
        tasks: {
            type: Array,
            require: true
        }
    },
    template: 
    /*html*/
    `<ul class="space-y-2">
        <li v-for="(task,index) in tasks" class="p-2 bg-white rounded" :key="task.id">
            <div class="flex justify-between">
            <div :class="[task.done ? 'text-gray-300 line-through':'']">
                {{task.title}} 
            </div>
            <div>
                <button v-on:click="toggleDone(index)" class="py-1 px-2 rounded" >
                    <span class="material-icons">
                        check
                    </span>
                </button>
                <button v-on:click="deleteTask(index)" class="py-1 px-2 rounded" >
                    <span class="material-icons">
                        delete
                    </span>
                </button>
            </div>
            </div>
        </li>
    </ul>`,
    methods: {
        toggleDone(index){
            this.$emit('toggle-done',index)
        },
        deleteTask(index){
            this.$emit('delete-task',index)
        }
    }
})

