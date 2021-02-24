const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            username: 'sanit',
            host_url: 'http://52.253.91.173:3333/api/v1/todos'
        }        
    },
    methods: {
        async addNewTask(task){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({title: task})
            }
            const response = await fetch(`${this.host_url}/${this.username}`,requestOptions) ;
            const data = await response.json() ;
            this.tasks.push(data)
        },
        async toggleDoneTask(id){
            let index = this.tasks.findIndex( t => t.id==id )
            this.tasks[index].done = this.tasks[index].done ? 0 : 1 ;
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({done: this.tasks[index].done })
            }
            const response = await fetch(`${this.host_url}/${this.username}/${id}`,requestOptions) ;   
            const data = await response.json() 
            console.log(data)            
        },
        async deleteTask(id){
            let index = this.tasks.findIndex( t => t.id==id )
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            }
            const response = await fetch(`${this.host_url}/${this.username}/${id}`,requestOptions)  
            const data = await response.json()        
            console.log(data)    
            this.tasks.splice(index,1)      
        }

    },
     async created(){
        const response = await fetch(`${this.host_url}/${this.username}`) ;
        this.tasks  = await response.json() ;
    }
})


