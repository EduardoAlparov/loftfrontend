import Vue from "vue";
import Flickity from 'vue-flickity';
 
const feedsComponent = {
  template: "#feeds-list",
}

new Vue ({
  el: ".feeds",
  components: {
    Flickity,
    feedsComponent 
  }, 

  data() {
    return {
      flickityOptions: {
        initalIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: true,
        contain: true,
        adaptiveHeight: true
      }    
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },

    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    },

    checkArrows() {
      if (this.$refs.flickity.selectedIndex() == 0 ) {
        this.$el.querySelector('.feeds__button-left').disabled = true;
      }else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().lenght -1) {
        this.$el.querySelector('.feeds__button-right').disabled = true;
      }else {
        this.$el.querySelector('.feeds__button-left').disabled = false;
        this.$el.querySelector('.feeds__button-right').disabled = false;
      }
    }
  }
}); 