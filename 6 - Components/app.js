const app = Vue.createApp({
    data() {
        return {
            friends: [{
                id: 'manuel',
                name: "Manuel Lorenz",
                phone: "012 345 7890",
                email: "manuel@email.abc"
            },
            {
                id: 'julie',
                name: "Julie Jones",
                phone: "098 765 4321",
                email: "julie@localhost.com"
            }
            ]
        }
    }
});


app.component("user-contact", {
    template: 
    `<li>
        <h2>{{ friend.name }}</h2>
        <button>{{ showDetailsButtonText }}</button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>`,
    data() {
        return {
            detailsVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    },
    computed: {
        showDetailsButtonText(){
            return `${this.detailsVisible ? "Hide" : "Show"} Details`
        }
    }


}
);



app.mount("#app");