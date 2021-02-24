app.component('task-input',{
    props:{
    },
    template: 
    /*html*/
    `
    <div class="flex justify-between space-x-2"> 
        <input v-model="newTask" placeholder="Enter a new task ..." class="p-2 bg-white rounded flex-1 border-b-2 border-blue-300">
        <button @click="addNewTask" class="bg-green-500 text-white  py-1 px-6 rounded">Add</button>
    </div>
    `,
    data(){
        return {
            newTask:''
        }
    },
    methods: {
        addNewTask() {
            if(this.newTask){
                let task = this.newTask
                this.$emit('add-new-task',task)
                this.newTask = ''
            }
        }
    }
})
