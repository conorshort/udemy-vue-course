<template>
  <li>
    <h2>
      {{
        friendDetails.name + (friendDetails.isFavourite ? " (Favourite)" : "")
      }}
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friendDetails.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friendDetails.email }}
      </li>
    </ul>
  </li>
</template>


<script>
export default {
  props: {
    friendDetails: { required: true, type: Object },
  },
  emits: {
    "toggle-favourite": function (id) {
      if (id) {
        return true;
      } else {
        console.log("SAD");
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.friendDetails.id);
    },
  },
};
</script>