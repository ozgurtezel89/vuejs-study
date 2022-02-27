const app = Vue.createApp({
    data(){
        return {
            firstname: 'Ozgur',
            lastname: 'Tezel',
            email: 'ozgurtezel89@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }
    }
})

app.mount('#app')