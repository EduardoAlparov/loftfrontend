<template lang="pug">
  .message.message--green
    .message__container
      .message__text Сообщение отправлено 
      button.message__close 
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
  .message{
    position: fixed;
    bottom: 0;
    width: 388px;
    color: #fff;
    padding: 20px 30px;
    &--green{
      background: #4bb133;
      left: 25%;
      transform: translateX(-50%);
    }
  }
  .message__container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .message__text {
    font-size: 18px;
    font-weight: 600;
  }
  .message__close {
    display: block;
    width: 20px;
    height: 20px;
    background: none;
    border: 0;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      width: 15px;
      height: 15px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: svg-load("Cross.svg", width=100%, height=100%, fill="#ffffff");
    }
  }
</style>