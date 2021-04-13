<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" v-model="email" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      phone: "",
      email: "",
      name: "",
    };
  },
  methods: {
    submitForm() {
      const details = {
        phone: this.phone,
        email: this.email,
        name: this.name,
      };

      this.$emit("add-contact", details);
      this.phone = "";
      this.email = "";
      this.name = "";
    },
  },
};
</script>

<style>
</style>