import Vue from "vue";


const feedsItem = {
  template: "#feeds-item",
  props: ["category"],
};

new Vue({
  el: "#feeds-component",
  template: "#feeds-list",
  components: {
    feedsItem,
  },
  data() {
    return {
      feeds: []
    };
  },
  created() {
    const data = require("../data/reviews.json");
    this.feeds = data;
  },
});  
