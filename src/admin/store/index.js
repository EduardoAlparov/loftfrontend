import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import tooltips from "./modules/tooltips";
import categories from "./modules/categories";
import user from "./modules/user";
import reviews from "./modules/reviews";
import works from "./modules/works";

export default new Vuex.Store({
  modules: {
    tooltips,
    categories,
    user,
    reviews,
    works
  }
});