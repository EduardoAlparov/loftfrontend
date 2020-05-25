<template lang="pug">
  .reviews__section  
    form.form.rewies__form.list--full
      .form__title  
        h2.works__form-title Добавить отзыв
      hr.form-divider
      .form__content
        .form__content-left.form__content-left--reviews
          .form__row.form__row--vertical
            .form__user
            input(
              name="image"
              type="file"
              placeholder
            ).form__file
            a.form__file-link Добавить фото
        .form__content-right.form__content-right--reviews
          .form__row
            .form__row.form__row--half
              label(
                for="name"  
              ).form__label Имя автора
              input(
                name="name"
                type="text"
              ).form__input
            .form__row.form__row--half
              label(
                for="title"  
              ).form__label Титул автора
              input(
                name="title"
                type="text"
              ).form__input
          .form__row.form__row--vertical  
            label(
              for="review"  
            ).form__label Отзыв
            textarea(
              name="review"
              type="text"
            ).form__textarea  
      .form__controls  
        a.form__controls-cancel Отменить
        input(
          name="name"
          type="submit"
          value="Сохранить"
          ).form__controls-submit
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
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
  }
  .form__content-left {
    width: 40%;
    &--reviews {
      width: 250px;
    }
  }
  .form__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    &--vertical {
      align-items: flex-start;
      flex-direction: column;
    }
    &--half {
      width: calc(50% - 15px);
      flex-direction: column;
    }
  }
  .form__user {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #dee4ed;
    display: block;
    margin: 0 auto 20px;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 150px;
      height: 150px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background:  svg-load("user.svg", width=100%, height=100%, fill="#a0a5b1");
    }
  }
  .form__file {
    display: none;
  }
  .form__file-link {
    margin: 0 auto;
    color: #5500f2;
    text-decoration: none;
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
    padding: 10px 30px;
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
  }
  .form__controls-cancel {
    color: #5500f2;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    margin-right: 30px;
  }
  .form__controls-submit {
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