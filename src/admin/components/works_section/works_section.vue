<template lang="pug">
  .works__section
    .works__item.list--third.works__item--add
      a.works__add-item
        .works__add-plus +
        .works__add-text Добавить работу
    .works__item.list--third
      .works__image     
        img(
          src="../../../images/content/miniatureone.jpg"
        ).works__image-img
        .works__tags
          .works__tag HTML
          .works__tag CSS
          .works__tag Python
      .works__item-content
        .works__title
          h3 Заголовок работы
        .works__text 
          p Описание этой работы 
        a.works__link  "httpa://google.com"
        .works__control
          a.works__control-edit Править
          a.works__control-remove Удалить
    .works__item.list--third
      .works__image     
        img(
          src="../../../images/content/miniatureone.jpg"
        ).works__image-img
        .works__tags
          .works__tag HTML
          .works__tag CSS
          .works__tag Python
      .works__item-content
        .works__title
          h3 Заголовок работы
        .works__text 
          p Описание этой работы 
        a.works__link  "httpa://google.com"
        .works__control
          a.works__control-edit Править
          a.works__control-remove Удалить
          
</template>
<script>
export default {
  
}
</script>
<style lang="postcss" scoped>
  .works__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .works__item {
    box-shadow: 4px 3px 20px 0 rgba(0,0,0,.07);
    background-color: #fff;
    margin-bottom: 30px;
    padding-bottom: 60px;
    position: relative;

    &--add {
      background-image: linear-gradient(90deg,#ed8000,#f29400);
    }
  }
  .list--third {
    width: calc(33.33333% - 30px);
  }
  .works__add-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
  .works__add-plus {
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
  .works__add-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.67;
    text-align: center;
    color: #fff;
  }
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
  }
</style>