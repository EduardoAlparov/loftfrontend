<template lang="pug">
    .form__row
      input(
        name="name"
        type="text"
        value="HTML"
        disabled="disabled"
      ).form__row-name
      .form__controls-value-wrapper
        input(
        name="name"
        type="number"
        min="0"
        max="100"
        placeholder="100"
        disabled="disabled"
        ).form__row-value
      .form__buttons
        button(name="add").form__pencil-btn
        button(name="remove").form__trash-btn
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
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
  .form__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
    .form__controls-value-wrapper{
    flex: 0.15;
    max-width: 13%;
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
  .form__row-name {
    flex: 0.7;
    max-width: 60%;
    margin-right: 10px;
    border: 0;
    padding: 5px 0;
    border-bottom: 1px solid transparent;
    color: #414c63;
    background: none;
    font-size: 16px;
    font-weight: 400;
    
    &:focus {
      outline: none;
      border-bottom: 1px solid #ff9a00;
    }
  }
  .form__row-value-wrapper{
    flex: 0.15;
    max-width: 15%;
    position: relative;
    margin-right: 30px;
  }
  .form__row-value{
    width: 60px;
    border: 0;
    padding: 5px 10px 5px 5px;
    border-bottom: 1px solid transparent;
    color: #414c63;
    background: none;
    font-size: 16px;
    font-weight: 400;
    position: relative;
  }
  .form__buttons {
    flex: 0.1;
    width: 10%;
    display: flex;
  }
  .form__pencil-btn,
  .form__trash-btn {
    outline: none;
    border: 0;
    width: 14px;
    height: 14px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  .form__trash-btn{
    background: svg-load("trash.svg", width=100%, height=100%, fill="#a0a5b1");
    &:active {
      background: svg-load("Cross.svg", fill="#eb0707");
    }
  }
  .form__pencil-btn {
    background: svg-load("pencil.svg", width=100%, height=100%, fill="#a0a5b1");     
    &:active {
      background: svg-load("tick.svg", width=100%, height=100%, fill="#00d70a");
    }
  }
  
</style>
