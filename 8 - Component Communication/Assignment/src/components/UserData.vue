<template>
  <div>
    <form @submit.prevent="addUser">
      <div>
          <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
          <label>Age</label>
        <input type="text" v-model="age" />
      </div>
      <div>
        <button>Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.name, this.age);
      this.name = "";
      this.age = "";
    },
  },
};
</script>

<style scoped>

</style>

