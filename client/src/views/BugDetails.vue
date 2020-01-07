<template>
  <div class="bugDetails">
    <h1>Bug Be Gone version 0.3</h1>
    <h2>Bug Details View</h2>
    <h3>Bug Details</h3>
    <p>{{this.activeBug.description}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "bugDetails",
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
  },
  // data() {
  //   return {
  //     activeBugData: {
  //       closed: this.activeBug.closed,
  //       description: this.activeBug.description,
  //       title: this.activeBug.title,
  //       reportedBy: this.activeBug.reportedBy,
  //       closedDate: "" //TODO confirm this
  //     }
  //   };
  //},
  components: {},
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    }
  }
};
</script>
