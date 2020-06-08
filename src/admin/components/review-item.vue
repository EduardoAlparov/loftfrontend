<template lang="pug">
  .reviews__item-content
    .reviews__user
      .reviews__image
        img(
          src="https://picsum.photos/seed/picsum/300/300"
        ).reviews__image-img
      .reviews__details
        .reviews__name Владимир Сабанцев
        .reviews__title Разработчик
    hr.form-divider
    .reviews__text 
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
    .reviews__control
      a.reviews__control-edit Править
      a.reviews__control-remove Удалить 
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
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