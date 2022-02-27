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
        },
        async getRandomUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();
            const result = results[0];

            this.firstname = result.name.first;
            this.lastname = result.name.last;
            this.email = result.email;
            this.gender = result.gender;
            this.picture = result.picture.large
        }
    }
})

app.mount('#app')