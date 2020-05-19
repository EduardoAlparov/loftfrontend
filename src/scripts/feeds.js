import Vue from 'vue';
import Flickity from 'vue-flickity';


new Vue({
  el: '.feeds',
  components: {
    Flickity
  },

  props: {
    disabled: Boolean
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true,
        resize: false,
        watchCSS: false
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
      }else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
        this.$el.querySelector('.feeds__button-right').disabled = true;
      }else {
        this.$el.querySelector('.feeds__button-left').disabled = false;
        this.$el.querySelector('.feeds__button-right').disabled = false;
      }
    }
  }
});  
