<template lang="pug">
  .form__tooltip  {{messageError}}  
</template>

<script>
export default {
  props: {
    massageError : {
      type: String, 
      default: "Ошибка"
    }
  }
};
</script>

<style lang="postcss" scoped>
  .form__tooltip {
    display: block;
    opacity: 1;
    left: 50px;
    transition: all .2s ease-in-out;
  } 
  svg {
    fill: #b13333;
  }
</style>