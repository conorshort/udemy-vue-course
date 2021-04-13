<template>
  <section>
    <base-card>
      <template #header>
        <h2>{{ fullName }}</h2>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #p>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>

</style>