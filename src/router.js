import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Work from "./views/Work";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/work",
      name: "work",
      component: Work
    }
  ]
});
