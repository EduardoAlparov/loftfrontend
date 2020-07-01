<template lang="pug">
  .works-container
    .works__image     
      img(
        :src="photoUrl"
      ).works__image-img
      .works__tags
        .works__tag {{work.techs[0]}}
        .works__tag CSS
        .works__tag Python
    .works__item-content
      .works__title
        h3 {{ work.title }}
      .works__text 
        p {{ work.description }}
      a.works__link  {{ work.link }}
      .works__control
        a(type="button" @click="editUserWork").works__control-edit Править
        a(type="button" @click="removeUserWork").works__control-remove Удалить
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
import { getAbsoluteImgPath } from '../helpers/pictures';
import { renderer } from '../helpers/pictures';

export default {
  props: {
    work: Object
  },
  data() {
    return {
      photoUrl: getAbsoluteImgPath(this.work.photo)
    }
  },
  watch: {
    work() {
      this.photoUrl = getAbsoluteImgPath(this.work.photo);
    }
  },
  methods: {
    ...mapActions('works', ["removeWork"]),
    ...mapActions('tooltips', ["showTooltip"]),
    ...mapMutations("works", ["SET_CURRENT_WORK"]),

    async removeUserWork() {
      try {
        const response = await this.removeWork(this.work.id);
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
    editUserWork() {
      this.SET_CURRENT_WORK(this.work.id);
      this.$emit('editUserWork');
    }
  }
}
</script>
<style lang="postcss" scoped>
  
  .works__image {
    position: relative;
    width: 100%;
  }
  .works__image-img {
    width: 100%;
    height: auto;
  }
  .works__tags{
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .works__tag {
    background: #f4f4f4;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-weight: 600;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 16px;
    text-align: center;
    color: rgba(65,76,99,.7);
  }
  .works__item-content {
    padding: 30px;
  }
  .works__title {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #414c63;
  }
  .works__text {
    color: rgba(65,76,99,.7);
    margin-bottom: 20px;
  }
  .works__link, 
  .works__text {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.88;
  }
  .works__link {
    margin-top: 30px;
    color: #5500f2;
    text-decoration: none;
  }
  .works__control {
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
  .works__control-edit{
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
  .works__control-remove {
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