<template lang="pug">
  .form.about__form.list--half
    .form__title
      input(
        name="name"
        value="Frontend"
      ).about__form-title
      .form__buttons
        button(name="save").form__pencil-btn
    hr.form-divider    
    .form__content.form__content--about  
      skill_line
      skill_line
      skill_line
      skill_line
    .form__controls 
      input(
        name="name"
        type="text"
        placeholder="Новый навык"
      ).form__controls-name
      .form__controls-value-wrapper
        input(
          name="name"
          type="number"
          min="0"
          max="100"
          placeholder="100"
        ).form__controls-value
      button(
        disabled="disabled"
      ).form__controls-btn  
</template>

<script>
import skill_line from "../../components/skill_line"
export default {
  components: {
    skill_line
  }
}
</script>

<style lang="postcss" scoped>
  .form {
    box-shadow: 3px 2px 5px 0 rgba(0,0,0,.07);
    background-color: #fff;
    padding: 20px;
    margin-bottom: 30px;
  }
  .list--half {
    width: calc(50% - 15px);
  }
  .form__title,
  .form__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .about__form-title {
    border: 0;
    width: 60%;
    padding: 5px 0;
    flex: 0.6;
    border-bottom: 1px solid #414c63;
    color: #414c63;
    background: none;
    font-size: 18px;
    font-weight: 600;
  }
  .form__buttons {
    flex: 0.1;
    width: 10%;
  }
  .form__pencil-btn {
    border: 0;
    width: 15px;
    height: 15px;
    outline: none;
  }
  .form__pencil-btn {
    background: svg-load("pencil.svg", width=100%, height=100%, fill="#a0a5b1");
  }
  .form-divider {
    color: #a0a5b1;
    margin: 20px 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: hidden;
    color: #a0a5b1;
  }
  .form__content {
    min-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &--about {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
  } 
  .form__controls{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .form__controls-name{
    flex: 0.6;
    max-width: 50%;
    margin-right: 10px;
    border: 0;
    outline: none;
    padding: 5px 10px;
    border-bottom: 1px solid #414c63;
    color: #414c63;
    background: none;
    font-size: 18px;
    font-weight: 600;
  }
  .form__controls-value-wrapper{
    flex: 0.15;
    max-width: 15%;
    position: relative;
    margin-right: 30px;

    &::after {
      content: "%";
      position: absolute;
      color: rgba(65,76,99,.7);
      font-size: 16px;
      font-weight: 400;
      display: block;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .form__controls-value {
    width: 70px;
    outline: none;
    border: 0;
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid #414c63;
    color: #414c63;
    background: none;
    font-size: 16px;
    font-weight: 600;
    position: relative;
  }
  .form__controls-btn {
    color: #5500f2;
    text-decoration: none;
    background: none;
    font-weight: 600;
    width: 40px;
    padding: 0;
    &::before {
      content: "+";
      background-image: linear-gradient(180deg, rgb(214,131,31) 48%, rgb(220,147,34) 100%);
      width: 40px;
      height: 40px;
      display: inline-block;
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      line-height: 40px;
      color: #fff;
      border-radius: 50%;
    }
  }
</style>