<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">PURRPURR</slot>
    </header>
    <slot name="p">
        MEOWOEMWOEM
    </slot>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(218, 216, 216);
  margin-bottom: 0.74rem;
  padding: 0.5rem 1rem;
    border-radius: 12px;
}

</style>