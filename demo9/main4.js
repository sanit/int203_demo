const app =Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            chosensubject: null,
            subject_lists: [{subject_id: 1, subject_name:'Intro to Vue 3'},
                            {subject_id: 2, subject_name: 'Vue 3 Forms'},
                            {subject_id: 3, subject_name: 'Vue 3 Reactivity'}],
            errors: [],
        }
    },
    methods: {
        checkForm(){
            this.errors = [] ;

            if(!this.firstname){
                this.errors.push('First name required.')
            }
            if(!this.lastname){
                this.errors.push('Last name required.')
            }
            if(!this.age){
                this.errors.push('Age required.')
            }
            if(!this.gender){
                this.errors.push('Gender required.')
            }
            if(!this.email){
                this.errors.push('Email required.')
            } else if(!this.validEmail(this.email)){
                this.errors.push('Valid email required.')
            }
            if(!this.phone){
                this.errors.push('Phone required.')
            }
            if(!this.chosensubject){
                this.errors.push('Subject required.')
            }
            if(!this.errors.length){
                alert("Registered successfully.")
            }
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
})

app.mount('#app')