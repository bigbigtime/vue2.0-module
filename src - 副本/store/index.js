import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import account from "./modules/account";
import app from "./modules/app";
import config from "./modules/config";
// vuex命名空间
export default new Vuex.Store({
  modules: {
    account,
    app,
    config
  }
});
