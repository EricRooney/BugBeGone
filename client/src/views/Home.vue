<template>
  <div class="home container-fluid">
    <header class="row">
      <div class="col">
        <h1>Bug Be Gone version 0.3</h1>
        <br />
        <!-- Trigger the modal with a button -->
        <button
          type="button"
          class="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#newBugModal"
        >New Bug</button>
        <!-- Modal -->
        <div ref="newBugModal" id="newBugModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
              </div>
              <div class="modal-body">
                <form @submit.prevent="createBug">
                  <input required type="text" v-model="newBug.title" placeholder="Title" />
                  <input
                    required
                    type="text"
                    v-model="newBug.description"
                    placeholder="Description"
                  />
                  <input required type="text" v-model="newBug.reportedBy" placeholder="Reported By" />
                  <button
                    class="btn btn-success"
                    type="submit"
                    @click="showModal = false"
                    data-dismiss="modal"
                  >Add Bug</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="row bugs">
      <div class="col">
        <table style="width:100%">
          <tr>
            <th>Title</th>
            <th>Reported By</th>
            <th>Status</th>
          </tr>
        </table>
        <table justify-content-center style="width:100%" v-for="bug in bugs" :key="bug.id">
          <bug-component :bugData="bug" />
        </table>
        <!-- Props are data passed from parent to child with :propName="DATA" -->
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import BugComponent from "@/components/Bug";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBugs");
    $(this.$refs.newBugModal).on("hidden.bs.modal", this.createBug);
  },
  data() {
    return {
      newBug: {
        closed: false, //TODO confirm this
        description: "",
        title: "",
        reportedBy: "",
        closedDate: "" //TODO confirm this
      }
    };
  },
  methods: {
    async createBug() {
      console.log("Failure");
      let bug = { ...this.newBug };
      await this.$store.dispatch("createBug", bug);
      this.newBug = {
        closed: false, //TODO confirm this
        description: "",
        title: "",
        reportedBy: "",
        closedDate: "" //TODO confirm this
      };
      this.$router.push("bugs/" + this.$store.state.activeBug.id);
    }
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    },
    openBugs() {
      this.bugs.filter(b => !bug.closed); //TODO delete if unused
    }
  },
  components: {
    BugComponent
  }
};
</script>
