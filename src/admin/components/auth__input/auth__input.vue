<template lang="pug">
  .auth__content 
    .auth__title Авторизация
    button.auth__close 
    form.auth__form
      .auth__input-wrapper 
        label.auth__label Логин
        .auth__icon.auth__icon--user
        input(
          :type="text"
          :name="name"
        ).auth__input-form
        .auth__tooltip
      .auth__input-wrapper 
        label.auth__label Пароль
        .auth__icon.auth__icon--pass
        input(
          :type="password"
          :name="password"
        ).auth__input-form
        .auth__tooltip
    button.auth__submit Отправить 
</template>

<script>
import axios from 'axios';

export default {

}
</script>

<style lang="postcss" scoped>
  .auth__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    padding: 55px 70px 55px;
    background: #fff;
  }
  .auth__title {
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: #414c63;
  }
  .auth__close {
    background: svg-load("Cross.svg", fill="#414c63");
    position: absolute;
    right: 30px;
    top: 30px;
    width: 20px;
    height: 20px;
    outline: none;
  }
  .auth__input-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
  }
  .auth__label {
    font-size: 14px;
    font-weight: 600;
    padding-left: 35px;
    color: rgba(65,76,99,.3);
  }
  .auth__icon {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    fill:  #414c63;
    bottom: 20px;
  }
  .auth__icon--user{
    background: svg-load("user.svg", fill="#414c63");
  }
  .auth__icon--pass{
    background: svg-load("key.svg", fill="#414c63");
  }
  .auth__input-form {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 0;
    background: transparent;
    border-bottom: 1px solid #414c63;
    padding: 10px 30px 15px 45px;
    font-size: 16px;
    font-weight: 700;
    line-height: 2.67;
    color: #414c63;
    outline: none;
    transition: all .2s ease-in-out;
    display: block;
  }
  .auth__submit {
    height: 80px;
    background-image: linear-gradient( 0deg, rgb(208,115,27) 0%, rgb(214,131,31) 48%, rgb(220,147,34) 100%);
    padding: 0 124px;
    font-size: 1.125;
    font-weight: 600;
    color: #fff;
    min-width: 90%;
    border: 0;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    text-transform: uppercase;
    outline: none;
    &:hover {
      background-image: linear-gradient( 0deg, rgb(220,147,34) 100%, rgb(214,131,31) 48%,rgb(208,115,27) 0%);
    }
  }
</style>