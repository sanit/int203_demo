const app = {
    data() {
        return {
            photos : [ { id: 1, 
                         url: 'images/photo1.jpg', 
                         description: 'The only keeper of your happiness is you. Stop giving people the power to control your smile, your worth and your attitude'},
                       { id: 2, 
                         url: 'images/photo2.jpg', 
                         description: 'Be patient. Some things take time.'},
                       { id: 3, 
                         url: 'images/photo3.jpg', 
                         description: 'Karma Think goo thoughts, say nice things,do good for others. Everything comes back'},
                       { id: 4, 
                         url: 'images/photo4.jpg', 
                         description: "If you don't make the time to work on creating the life you want, you're eventually going to be forced to spend a lot of time dealing with a life you don't want."},
                      { id: 5, 
                         url: 'images/photo5.jpg', 
                         description: "You are born and then you die, but in bewteen you can do anything you want. It's society that creates rules for us, but you can break out of that."},
                      { id: 6, 
                        url: 'images/photo6.jpg', 
                        description: "I have you have the patient and strength to wait for what you really descerve and don't entertain anything less than that. Everything will soon fall into place. Trust in the diving timing."},
                    ],
            searchText: '',
            isSearch: false,
            isPhoto: false, 
            currentPhoto: ''
        }
    },
    methods: {
      displayPhoto(id) {
        this.isSearch = false 
        this.isPhoto = true
        this.currentPhoto = this.photos.filter( p => p.id == id)[0]
      },
      hidePhoto(){
        this.isPhoto = false
        if(this.searchText){
          this.isSearch = true
        }
      },
      showSearch() {
        this.isSearch = true
        this.$refs.search.focus()
      },
      cancelSearch(){
        this.isSearch= false 
        this.searchText = ''
      }
    },
    computed:{
      filterPhotos() {
        if (this.searchText){
          return this.photos.filter( p => p.description.toLowerCase().includes(this.searchText.toLowerCase()))
        }
        return this.photos 
      }
    }
}
mountedApp = Vue.createApp(app).mount('#app')