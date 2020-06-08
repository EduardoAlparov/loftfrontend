import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import user from "./modules/user";
import reviews from "./modules/reviews";

export default new Vuex.Store({
  modules: {
    categories,
    user,
    reviews
  }
});