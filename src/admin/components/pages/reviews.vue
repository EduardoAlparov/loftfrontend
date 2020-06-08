<template lang="pug">
  .container.reviews
    .reviews__info  
      .h1.section__title Блок "Отзывы"
    .reviews__section
      review-add(
        v-if="addFormVisible"
        :mode="mode"
        @closeAddForm="closeAddForm"
      )  
    .reviews__section
      .reviews__item.list--thierd.reviews__item--add  
        button(type="button" @click.prevent="showAddForm('new')").reviews__add-item
          .reviews__add-plus +
          .reviews__add-text Добавить отзыв 
      .reviews__item.list--thierd(v-for="review in reviews" :key="review.id")
        review-item(
          :review="review"
          @editUserReview="showAddForm('edit')"
        )       
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  components: {
    reviewAdd: () => import("../review-add"),
    reviewItem: () => import("../review-item")
  },
  data() {
    return {
      addFormVisible: false,
      mode: ""
    }
  },
  computed: {
    ...mapState('reviews', {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapActions('tooltips', ["showTooltip"]),
    ...mapActions('reviews', ["getReviews"]),
    showAddForm(mode) {
      this.mode = mode;
      this.addFormVisible = true;
    },
    closeAddForm() {
      this.addFormVisible= false;
    }
  },
  async created() {
    try {
      await this.getReviews();
    } catch (e) {
      this.showTooltip({
        type: "error",
        text: e.message
      });
    }
  }
}

</script>

<style lang="postcss" scoped>
  .container {
    width: 100%;
    padding: 0 30px;
    justify-content: space-between;
  }

  .reviews {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .reviews__info {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .sections__title {
    font-size: 21px;
    color: #414c63;
    font-weight: 700;
  }

  .reviews__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .reviews__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  
  .reviews__item {
    box-shadow: 4px 3px 20px 0 rgba(0,0,0,.07);
    background-color: #fff;
    margin-bottom: 30px;
    padding-bottom: 60px;
    position: relative;

    &--add {
      background-image: linear-gradient(90deg,#ed8000,#f29400);
      &:hover {
        background-image: linear-gradient(90deg, #f29400, #ed8000);    
      }
    }
  }

  .list--thierd {
    width: calc(33.33333% - 30px);
  }

  .reviews__add-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    justify-content: center;
    align-items: center;
  }  
  .reviews__add-plus {
    font-size: 75px;
    font-weight: 300;
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    margin-bottom: 10px;
  }
  .reviews__add-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.67;
    text-align: center;
    color: #fff;
  }
</style>