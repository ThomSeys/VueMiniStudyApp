import Vue from "vue";
import Router from "vue-router";
import Dash from "../pages/Dash";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dash
    }
  ]
});
