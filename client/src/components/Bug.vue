<template>
  <tr class="bug" :class="{ greyscale: bugData.closed }">
    <td :class="{ greyscale: bugData.closed }">
      <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">{{bugData.title}}</router-link>
    </td>
    <td :class="{ greyscale: bugData.closed }">
      <router-link :to="{ name: 'bugDetails', params: { id: bugData.id } }">{{bugData.reportedBy}}</router-link>
    </td>
    <td :class="{ greyscale: bugData.closed }">
      <router-link :to="{ name: 'bugDetails', params: { id: bugData.id }}">{{bugData.closed}}</router-link>
      <button @click="closed">CLOSED</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "Bug",
  props: ["bugData"], //NOTE props come from parents
  computed: {},
  methods: {
    closed() {
      this.$store.dispatch("closed", this.bugData.id);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  filter: grayscale(1);
}
</style>
