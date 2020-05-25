<template lang="pug">
  .works__section
    form.form.works__form.list--full
      .form-divider
      .form__content
        .form__content-left
          .form__row
            label.form__label-upload
              .form__label-text  Перетащите либо загрузите изображение 
              input(
                name="image"
                type="file"
                placeholder="item"
              ).form__file
              button.form__file-btn Загрузить
        .form__content-right
          .form__row.form__row--vertical
            label(
              for="name"
            ).form__label Название
            input(
              name="name"
              type="text"
            ).form__input
          .form__row.form__row--vertical
            label(
              for="link"
            ).form__label Ссылка
            input(
              name="link"
              type="text"
            ).form__input
          .form__row.form__row--vertical
            label(
              for="desc"
            ).form__label Описание
            textarea(
              name="desc"
            ).form__textarea
          .form__row.form__row--vertical 
            label(
              for="tags"
            ).form__label Добавление тега
            textarea(
              name="tags"
            ).form__input
            .form__tags
              .form__tag HTML
              .form__tag CSS
              .form__tag JS
      .form__controls
        a.form__controls-cancel Отменить
        input(
          name="name"
          type="submit"
          value="Сохранить"
          ).form__controls-submit
</template>

<script>
import blocktitleempty from "../../components/blocktitleempty";

export default {
  components: {
    blocktitleempty
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
  .form-divider {
    color: #a0a5b1;
    margin: 20px 0;
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
    display: none;
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