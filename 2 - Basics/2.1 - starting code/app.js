const app = Vue.createApp({

    data() {
        return {
            courseGoalA: 'fgfg',
            courseGoalB: 'Master Vue!',
            vueLink: 'https://vuejs.org/'
        }
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber < 0.5 ?
                this.courseGoalA :
                this.courseGoalB;
        },
    }

});

app.mount('#user-goal');

