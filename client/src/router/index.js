import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BugDetails from "../views/BugDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bugDetails",
    name: "bugDetails",
    component: BugDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
