const app = Vue.createApp({
    data() {
        return {
            firstName: 'Mas',
            lastName: 'Agung',
            email:'mas.agung@example.com',
            age:'35',
            gender:'male',
            status:'single',
            picture:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async generate(){
            const res = await fetch("https://randomuser.me/api")
            const {results} = await res.json()
            const person = results[0]
            const statusGen = () =>{
                const x = Math.ceil(Math.random()*5);
                switch (x) {
                    case 1:
                        return 'married'
                    case 2:
                        return 'single'
                    case 3:
                        return 'virgin'
                    case 4:
                        return 'sex-sexual'
                    case 5:
                        return 'weeb'
                
                    default:
                        return 'error'
                }
            }
            console.log(results);

            this.firstName = person.name.first,
            this.lastName  = person.name.last,
            this.email = person.email,
            this.age = person.dob.age,
            this.gender = person.gender,
            this.status = statusGen(),
            this.picture = person.picture.medium
        }
    },
})
app.mount('#app')