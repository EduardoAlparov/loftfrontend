<template lang="pug">
  a.addbutton Добавить группу 
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
  .addbutton{
    color: #ff9a00;
    text-decoration: none;
    margin-left: 60px;
    font-weight: 600;
    font-size: 14px;

    &:before {
      content: "+";
      background-image: linear-gradient(90deg, rgb(214,131,31) 48%, rgb(220,147,34) 100%);
      width: 20px;
      height: 20px;
      display: inline-block;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      border-radius: 50%;
      margin-right: 15px;
      &:hover {
        background-image: linear-gradient(90deg, rgb(220,147,34) 100%, rgb(214,131,31) 48%);    
      }
    }

  }  
</style>