import Vue from "vue";
import Router from "vue-router";
import Dash from "../pages/Dash";
import Messages from "../pages/Messages";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dash
    },
    {
      path: "/messages",
      name: " Messages",
      component: Messages
    }
  ]
});
