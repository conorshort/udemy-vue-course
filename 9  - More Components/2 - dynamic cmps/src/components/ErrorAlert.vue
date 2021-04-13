<template>
  <dialog @click.self="$emit('close')" :open="isOpen">
      <div @click.prevent>
          <slot/>
          <button @click="$emit('close')">Close</button>
      </div>
  </dialog>
</template>

<script>
export default {
    props:['is-open'],
    data() {
        return {
            // isOpen: false
        }
    }
}
</script>

<style scoped>
dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    /* left: 30%; */
    height: 100%;
    width: 100%;
    background-color: rgba(95, 95, 95, 0.178);
    box-shadow: 0 6px 16px rgba(0,0,0,0.26);
    padding: 1rem;
}

dialog div {
    position: fixed;
    top: 20vh;
    bottom: 20vh;
    width: 50%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 6px 16px rgba(0,0,0,0.26);
    padding: 1rem;
    margin-left: 5rem;
}
</style>