import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(`../project/${process.env.VUE_APP_PROJECT}/home/Index`)
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(`../project/${process.env.VUE_APP_PROJECT}/account/Login`)
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(`../project/${process.env.VUE_APP_PROJECT}/account/Register`)
  },
  ,
  {
    path: "/forget",
    name: "Forget",
    component: () => import(`../project/${process.env.VUE_APP_PROJECT}/account/Forget`)
  }
];

const router = new VueRouter({
  routes
});

export default router;
