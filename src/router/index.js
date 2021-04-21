import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(`../views/home/Index`)
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(`../views/account/Login`)
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(`../views/account/Register`)
  },
  ,
  {
    path: "/forget",
    name: "Forget",
    component: () => import(`../views/account/Forget`)
  }
];

const router = new VueRouter({
  routes
});

export default router;
