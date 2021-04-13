<template>
  <div>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>

      <button @click="setSelectedComponent('manage-goals')">
        Manage Goals
      </button>

    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
  </div>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      activeComponent: "active-goals",
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.activeComponent = cmp;
      console.log(this.$components);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>