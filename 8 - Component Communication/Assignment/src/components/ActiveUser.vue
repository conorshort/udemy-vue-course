<template>
  <div>
    <h1>Active User</h1>
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["name", "age"],
};
</script>

<style>
</style>