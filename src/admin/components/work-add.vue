<template lang="pug">
  form.form.works__form.list--full
    .form__title  
      h2.works__form-title {{(mode === 'edit') ? "Редактировать работу" : "Добавить работу"}}
    hr.form-divider
    .form__content
      .form__content-left
        .form__row
          label(
            for="image"
            :data-value="avatarButtonValue"
            :class="{'hasPhoto' : this.photoUrl.length}"
          ).form__label-upload
            .form__label-text  Перетащите либо загрузите изображение 
            .form__user-photo(:style="{'background-image': `url(${this.photoUrl})`}")
            input(
              name="image"
              type="file"
              placeholder=""
              @change="loadPhoto"
              autocomplete="off"
            ).form__file
            button.form__file-btn Загрузить
      .form__content-right
        .form__row.form__row--vertical
          label(
            for="name"
          ).form__label Название
          input(
            v-model="work.title"
            name="name"
            type="text"
            autocomplete="off"
          ).form__input
        .form__row.form__row--vertical
          label(
            for="link"
          ).form__label Ссылка
          input(
            v-model="work.link"
            name="link"
            type="text"
          ).form__input
        .form__row.form__row--vertical
          label(
            for="desc"
          ).form__label Описание
          textarea(
            v-model="work.description"
            name="desc"
          ).form__textarea
        .form__row.form__row--vertical 
          label(
            for="tags"
          ).form__label Добавление тега
          textarea(
            v-model="work.techs"
            name="tags"
          ).form__input
          .form__tags
            .form__tag {{work.techs[0]}}
            .form__tag CSS
            .form__tag JS
    .form__controls
      button(type="button" @click.prevent="$emit('closeAddForm')").form__controls-cancel Отменить
      button(type="button" @click.prevent="mode === 'new' ? addUserWork() : updateUserWork()").form__controls-submit Сохранить
</template>

<script>
import { mapActions, mapGetters, mapState} from 'vuex';
import { getAbsoluteImgPath } from '../helpers/pictures';
import { reader } from '../helpers/pictures';
import { renderer } from '../helpers/pictures';

export default {
props: {
    mode: String,
  },
  data() {
    return {
      avatarButtonValue: "Добавить отзыв",
      photoUrl: "", 
      work: {
        id: "",
        title: "",
        techs: [],
        photo: "",
        link: "",
        description: ""
      }
    }
  },
  computed: {
    ...mapState("works", { currentWork: state => state.currentWork })
  },
  watch: {
    currentWork() {
      if (this.mode === "edit") this.getCurrentWork();
    },
    mode() {
      if (this.mode === "new") {
        this.work = [];
        this.avatarButtonValue = "Добавить фото";
        this.photoUrl = "";  
      } else {
        this.getCurrentWork()
      }
    }
  },
  created() {
    if ( this.mode === "edit") this.getCurrentWork();
  },
  methods: {
    ...mapActions("works", ["addWork", "updateWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    loadPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;
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
    async addUserWork() {
      try {
        const response = await this.addWork(this.work);
        this.work = []; 
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
    async updateUserWork() {
      try {
        const response = await this.updateWork(this.work);
        this.work = [];
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
    getCurrentWork() {
      this.work = { ...this.currentWork };
      this.photoUrl = getAbsoluteImgPath(this.work.photo);
      this.work.photo = "";
      this.avatarButtonValue ="Изменить фото";
    }
  }  
}

</script>

<style lang="postcss" scoped>
  .container{
    padding: 0 1.875rem;
    justify-content: space-between;
  }
  .works {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .works__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .form {
    box-shadow: 4px 3px 20px 0 rgba(0,0,0,.07);
    background-color: #fff;
    padding: 20px;
    margin-bottom: 30px;
  }
  .list--full {
    width: 100%;
  }

  .form__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
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
    color: #a0a5b1;
    margin: 20px 0  40px 0;
  }
  .form__content {
    min-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .form__content-left {
    width: 40%;
  }
  .form__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .form__label-upload{
    width: calc(100% - 30px);
    margin: 0 auto;
    height: 280px;
    cursor: pointer;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
  }
  .form__label-text {
    width: 60%;
    padding: 20% 0 0;
    margin: 0 auto;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 2.12;
    color: rgba(65,76,99,.5);
  }
  .form__file {

  }
  .form__file-btn{
    margin: 0 auto;
    padding: 0 25px;
    height: 50px;
    display: block;
    border-radius: 25px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    background-image: linear-gradient(90deg,rgb(214,131,31) 48%, rgb(220,147,34) 100%);
    &:hover {
      background-image: linear-gradient(90deg, rgb(220,147,34) 100%, rgb(214,131,31) 48%);
    }
  }
  .form__content-right{
    width: calc(60% - 15px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .form__row--vertical{
    align-items: flex-start;
    flex-direction: column;
  }
  .form__label{
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.88;
    color: rgba(65,76,99,.5);
  }
  .form__input {
    padding: .625rem .1875rem;
    border: 0;
    border-bottom: 1px solid rgba(65,76,99,.5);
    outline: none;
  }
  .form__textarea {
    min-height: 150px;
    padding: 20px;
  }
  .form__input,
  .form__textarea {
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #414c63;
  }
  .form__tags{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .form__tag {
    background: #f4f4f4;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-weight: 600;
    padding: 0 30px 0 10px;
    margin-right: 10px;
    border-radius: 16px;
    color: rgba(65,76,99,.7);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      transform: translateY(-50%);
      right: 10px;
      top: 50%;
      background: svg-load("Cross.svg", width=100%, height=100%, fill="#a0a5b1");
    }
  }
  .form__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .form__controls-cancel {
    color: #5500f2;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    margin-right: 40px;
    &:hover {
      text-decoration: underline;
    }
  }
  .form__controls-submit{
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