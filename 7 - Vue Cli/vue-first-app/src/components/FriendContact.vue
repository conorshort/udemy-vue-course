<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ buttonText }}</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong> {{ friend.phone }}</li>
      <li><strong>Email: </strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "012 345 6789",
        email: "manuel@me.com",
      },
    };
  },
  methods: {
      toggleDetails() {
          this.detailsVisible = !this.detailsVisible;
      }
  },
  computed: {
      buttonText() {
          if (this.detailsVisible) {
              return "Hide details";
          } else {
              return "Show Details";
          }
      }
  }
};
</script>

<style>
</style>