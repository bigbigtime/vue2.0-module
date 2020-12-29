import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../project/comm/account/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
