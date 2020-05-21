<template lang="pug">
  button.auth__submit {{buttonname}}
</template>

<script>
export default {
  props: ["buttonname"]
}
</script>

<style lang="postcss" scoped>
  .auth__submit {
    height: 80px;
    background-image: linear-gradient( 0deg, rgb(208,115,27) 0%, rgb(214,131,31) 48%, rgb(220,147,34) 100%);
    padding: 0 30px;
    font-size: 1.125;
    font-weight: 700;
    color: #fff;
    //min-width: 90%;
    border: 0;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    text-transform: uppercase;
    outline: none;
  }
</style>