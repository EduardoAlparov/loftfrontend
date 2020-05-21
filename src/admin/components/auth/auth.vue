<template lang="pug">
  section.auth
    auth__input
</template> 

<script>
import auth__input from "../../components/auth__input";

export default {
  components: {auth__input},
}

</script>

<style lang="postcss" scoped>
  .auth {
    position: relative;
    display: block;
    width: 100%;
    //height: 100%;
    min-height: 100vh;
    background: url('../../../images/content/trainbridge.jpg') 50% no-repeat;
  }
</style>
