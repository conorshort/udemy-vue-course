const app = Vue.createApp({
    data() {
        return {
            myName: 'Conor',
            myAge: 28,
            catPicURL: 'https://www.bva.co.uk/media/2867/cat-on-the-floor.jpg'
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    },



});

app.mount('#assignment')

