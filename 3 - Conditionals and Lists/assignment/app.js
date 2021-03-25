const app = Vue.createApp({
    data() {
        return {
            currentTextValue: "",
            tasks: [],
            tasksShown: true,
        }
    },
    computed: {
        buttonCaption() {
            return this.tasksShown ? "Hide List" : "Show List";
        }
    },
    methods: {
        addTask() {
            if (this.currentTextValue) {
                this.tasks.push(this.currentTextValue);
                this.currentTextValue = "";
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleTasksShown() {
            this.tasksShown = !this.tasksShown;
        }
    }
});

app.mount('#assignment');
