import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import BugDetails from "../views/BugDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/bugs/:id",
    name: "bugDetails",
    component: BugDetails
  },
  {
    path: "*", //saftey net that returns bad routes back to the home
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
