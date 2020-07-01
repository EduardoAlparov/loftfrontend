<template lang="pug">
  .reviews__item-content
    .reviews__user
      .reviews__image
        img(
          :src="photoUrl"
        ).reviews__image-img
      .reviews__details
        .reviews__name {{review.author}}
        .reviews__title {{review.occ}}
    hr.form-divider
    .reviews__text 
      p {{review.text}}
    .reviews__control
      a(type="button" @click="editUserReview").reviews__control-edit Править
      a(type="button" @click.prevent="removeUserReview").reviews__control-remove Удалить 
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
import { getAbsoluteImgPath } from '../helpers/pictures';
import { renderer } from '../helpers/pictures';

export default {
  props: {
    review: Object
  },
  data() {
    return {
      photoUrl: getAbsoluteImgPath(this.review.photo)
    }
  },
  watch: {
    reviews() {
      this.photoUrl = getAbsoluteImgPath(this.review.photo);
    }
  },
  methods: {
    ...mapActions('reviews', ["removeReview"]),
    ...mapActions('tooltips', ["showTooltip"]),
    ...mapMutations("reviews", ["SET_CURRENT_REVIEW"]),

    async removeUserReview() {
      try {
        const response = await this.removeReview(this.review.id);
        this.showTooltip({
          type: "success",
          text: response.data.message
        });
      } catch (e) {
        this.showTooltip({
          type: "error",
          text: e.message
        });
      }
    },
    editUserReview() {
      this.SET_CURRENT_REVIEW(this.review.id);
      this.$emit('editUserReview');
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import url('../default.pcss');
  @import "../../styles/mixins.pcss";

  .reviews__item-content {
    padding: 20px;
  }
  .reviews__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .reviews__image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .reviews__image-img {
    width: 100%;
    height: 100%;
  }

  .reviews__details {
    display: flex;
    width: calc(100% - 75px);
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .reviews__name {
    font-size: 18px;
    font-weight: 700;
    color: #414c63;
  }
  .reviews__title {
    font-size: 16px;
    font-weight: 600;
    color: rgba(65,76,99,.5);
  }
  .form-divider {
    color: hsla(0,0%,100%,.9);
    margin: 20px 0;
  }
  .reviews__text {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.88;
    color: rgba(65,76,99,.7);
    margin-bottom: 20px;
  }
  .reviews__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 30px;
    width: 100%;
  }
  .reviews__control-edit{
    color: rgba(65,76,99,.5);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.88;
    &:after {
      content: "";
      width: 15px;
      height: 15px;
      margin-left: 10px;
      display: inline-block;
      background: svg-load("pencil.svg", width=100%, height=100%, fill="#373bcf");
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .reviews__control-remove {
    color: rgba(65,76,99,.5);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.88;
    &:after {
      content: "";
      width: 15px;
      height: 15px;
      margin-left: 10px;
      display: inline-block;
      background: svg-load("Cross.svg", width=100%, height=100%, fill="#c92d2d");
    }
    &:hover {
      text-decoration: underline;
    } 
  }
</style>