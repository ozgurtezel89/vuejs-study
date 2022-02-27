const app = Vue.createApp({
    data(){
        return {
            firstname: 'Ozgur',
            lastname: 'Tezel',
            email: 'ozgurtezel89@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }
    },
    methods:
    {
        changeUser() {
            this.firstname = 'Tilly';
            this.lastname = 'Tezel';
            this.email = 'tillytezel89@gmail.com';
            this.gender = 'female';
            this.picture = 'https://randomuser.me/api/portraits/lego/9.jpg'
        }
    }
})

app.mount('#app')