const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    chosensubject: {
        presence: true
    }
}

var app =Vue.createApp({
    data() {
        return {
            formdata: {
                firstname: null,
                lastname: null,
                age: null,
                gender: null,
                email: null,
                phone: null,
                chosensubject: null,
            },
            subject_lists: [{subject_id: 1, subject_name:'Intro to Vue 3'},
                            {subject_id: 2, subject_name: 'Vue 3 Forms'},
                            {subject_id: 3, subject_name: 'Vue 3 Reactivity'}],
            errors: null,
        }
    },
    methods: {
        checkForm(){
            this.errors = validate(this.formdata,
                                    constraints)
            console.log(this.errors)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
})

app.mount('#app')


