import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
// vant
import Vant from 'vant';
import 'vant/lib/index.css';
// svgicon
import "@/icon";
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
