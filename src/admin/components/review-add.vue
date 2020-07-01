<template lang="pug">
  form.form.rewies__form.list--full
    .form__title  
      h2.works__form-title {{(mode === 'edit') ? "Редактировать отзыв" : "Добавить отзыв"}}
    hr.form-divider
    .form__content
      .form__content-left.form__content-left--reviews
        .form__row.form__row--vertical
          .form__user
            label(
              for="image"
              :data-text="avatarButtonValue"
              :class="{'hasPhoto' : this.photoUrl.length}"
            ).form__file-label 
              .form__user-photo(:style="{'background-image': `url(${this.photoUrl})`}")
            input(
              name="image"
              type="file"
              placeholder=""
              @change="loadPhoto"
              autocomplete="off"
              ).form__file 
      .form__content-right.form__content-right--reviews
        .form__row
          .form__row.form__row--half
            label(
              for="author"  
            ).form__label Имя автора
            input(
              v-model="review.author"
              name="name"
              type="text"
              autocomplete="off"
            ).form__input
          .form__row.form__row--half
            label(
              for="occ"  
            ).form__label Титул автора
            input(
              v-model="review.occ"
              name="name"
              type="text"
              autocomplete="off"
            ).form__input
        .form__row.form__row--vertical  
          label(
            for="text"  
          ).form__label Отзыв
          textarea(
            v-model="review.text"
            name="text"
          ).form__textarea  
    .form__controls  
      button(type="button" @click.prevent="$emit('closeAddForm')").form__controls-cancel Отменить
      button(type="button" @click.prevent="mode === 'new' ? addUserReview() : updateUserReview()").form__controls-submit Сохранить
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import { getAbsoluteImgPath } from '../helpers/pictures';
import { reader } from '../helpers/pictures';

export default {
  props: {
    mode: String,
  },
  data() {
    return {
      avatarButtonValue: "Добавить фото",
      photoUrl: "", 
      review: {
        id: "",
        author: "",
        occ: "",
        text: "",
        photo: ""
      }
    }
  },
  computed: {
    ...mapState("reviews", { currentReview: state => state.currentReview })
  },
  watch: {
    currentReview() {
      if (this.mode === 'edit') this.getCurrentReview();
    },
    mode() {
      if (this.mode === "new") {
        this.review = [];
        this.avatarButtonValue = "Добавить фото";
        this.photoUrl = "";  
      } else {
        this.getCurrentReview()
      }
    }
  },
  created() {
    if ( this.mode === 'edit') this.getCurrentReview();
  },
  methods: {
    ...mapActions("reviews", ["addReview", "updateReview"]),
    ...mapActions("tooltips", ["showTooltip"]),
    loadPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      this.getPhoto(file);
    },
    getPhoto(file) {
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file); 
        reader.onload = () => {
          this.photoUrl = reader.result;
          this.avatarButtonValue = "Изменить фото"; 
        }
      } catch (e) {
        this.showTooltip({
          type: "error",
          text: e.message
        });
      }
    },
    async addUserReview() {
      try {
        const response = await this.addReview(this.review);
        this.review = []; 
        this.$emit('closeAddForm');
        this.showTooltip({
          type: "success",
          text: "Отзыв успешно добавлен"
        });
      } catch (e) {
        this.showTooltip({
          type: "error",
          text: e.message
        });
      }
    },
    async updateUserReview() {
      try {
        const response = await this.updateReview(this.review);
        this.review = [];
        this.$emit("closeAddForm");
        this.showTooltip({
          type: "success",
          text: "Отзыв успешно добавлен"
        });
      } catch (e) {
        this.showTooltip({
          type: "error",
          text: e.message
        });  
      }
    },
    getCurrentReview() {
      this.review = { ...this.currentReview };
      this.photoUrl = getAbsoluteImgPath(this.review.photo);
      this.review.photo = "";
      this.avatarButtonValue ="Изменить фото";
    }
  }  
}
</script>

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";

  .reviews__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .list--full {
    width: 100%;
  }
  .form {
    box-shadow: 4px 3px 20px 0 rgba(0,0,0,.07);
    background-color: #fff;
    padding: 20px;
    margin-bottom: 30px;
  }
  .form__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .works__form-title {
    border: 0;
    width: 60%;
    padding: 5px 0;
    color: #414c63;
    font-size: 18px;
    font-weight: 600;
  }
  .form-divider {
    color: hsla(0,0%,100%,.9);
    margin: 20px 0;
  }
  .form__content {
    width: 90%;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include tablets{
      flex-direction: column;
      align-item: center;
    }
  }
  .form__content-left {
    width: 40%;
    &--reviews {
      width: 250px;
    }
    @include tablets {
      width: auto;
      margin-bottom: 50px;
    }
  }

  .form__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @include desktop {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    @include tablets {
      align-items: center;
    }

    &--vertical {
      align-items: flex-start;
      flex-direction: column;
    }
    &--half {
      width: calc(50% - 15px);
      flex-direction: column;

      @include desktop {
        width: auto;
      }

      @include tablets{
        width: 100%;
      }
    }
  }

  .form__user {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #dee4ed;
    display: block;
    margin: 0 auto ;
    position: relative;
  }

  .form__file-label {
    
    content: attr(data-text);
    width: 160px;
    height: 160px;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image: svg-load("user.svg", width=100%, height=100%, fill="#a0a5b1");
  }

  .form__user-photo {
    cursor: pointer;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .form__file {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: #5500f2;
    font-size: 16px;
    font-weight: 600;
  }


  .form__content-right {
    width: calc(60% - 15px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &--reviews{
      width: calc(100% - 265px);
    }

    @include tablets {
      width: 100%;
    }
  }
  .form__label{
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.88;
    color: rgba(65,76,99,.5);
  }
  .form__input {
    outline: none;
    padding: 10px 30px 10px 10px;
    border: 0;
    border-bottom: 1px solid rgba(65,76,99,.5);
  }
  .form__input,
  .form__textarea {
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #414c63;
  }
  .form__textarea  {
    outline: none;
    min-height: 150px;
    padding: 20px;
    border: 1px solid rgba(65,76,99,.5);
  }
  .form__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;

    @include tablets {
      width: 100%;
      justify-content: center;
    }
  }
  .form__controls-cancel {
    color: #5500f2;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    margin-right: 30px;
    &:hover {
      text-decoration: underline;
    }
  }
  .form__controls-submit {
    outline: none;
    cursor: pointer;
    height: 50px;
    border-radius: 25px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: 700; 
    border: 0;
    padding: 0 25px;
    color: #fff;
    text-transform: uppercase;
    background-image: linear-gradient(90deg,rgb(214,131,31) 48%, rgb(220,147,34) 100%);
    &:hover {
      background-image: linear-gradient(90deg, rgb(220,147,34) 100%, rgb(214,131,31) 48%);    
    }
  }
</style>