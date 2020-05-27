import Vue from "vue";

const btns = {
  template: "#slider-btns",
  props: ["currentWork", "works", "currentIndex"],
};
const thumbs = {
  template: "#slider-thumbs",
  components: { btns },
  props: ["works", "currentWork"],
};

const display = {
  template: "#slider-display",
  components: { thumbs },
  props: ["currentWork", "works", "currentIndex"],
  methods: {
    handleSlide(direction) {
      this.$emit('slide', direction)
    }, 
    clickSwitchSlide(direction) {
      this.$emit('switchSlide', direction) 
    }
  },
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { display, info },
  data() {
    return {
      works: [],
      currentIndex: 0,
      isActive: true,
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForIndex(value);
    },
  },
  methods: {
    makeInfiniteLoopForIndex(value) {
      const worksAmountFromZero = this.works.length - 1;
      if (value > worksAmountFromZero) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmountFromZero;
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    clickSwitchSlide(imageIndex) {
      this.currentIndex = imageIndex;
    },
    makeArrWithRequireImages(array) {
      return array.map((item) => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequireImages(data);
  },
});