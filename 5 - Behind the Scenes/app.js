const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      this.$refs.userText.value = "";
    },
  },
});

app.mount('#app');


// ...
const data = {
  message: "hello",
  longMessage: "Hello world"
};
const handler = {
  set(target, key, value) {
    if( key === 'message') {
      target.longMessage = value + " World";
    }
    target.message = value;
  }
};
const proxy = new Proxy(data, handler);
