const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            description: "This is a description",
            agreed: null,
            accepted: null,
            fruits: [],
            fruit: null,
            onefruit: null,
            multifruit: [],
            otherfruit: null,
            onecity: null,
            fruitlists : [ {id: 1,fruit: 'Apple'},{id:2, fruit: 'Cherry'}, {id:3, fruit: 'Orange'}],
        }
    },
    computed:{
        namelength(){
            if(this.firstname){
                return this.firstname.length
            } 
            return 0
        }
    }
})

app.mount('#app')