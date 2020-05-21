<template lang="pug">
  .headline-component
    .content
      slot
    .desc Панель администрирования
    button(
      type="button"
      @click=""
    ).logout Выйти
</template>
<script>
export default {
  
}
</script>
<style lang="postcss">
  .headline-component{
    background-image: linear-gradient(to top, #3e3e59, #454573);
    padding: 20px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .desc {
    font-size: 14px;
    line-height: 34px;
    color: #ffffff;
    opacity: 0.7;
    font-weight: 400;
  }
  .logout {
    font-size: 14px;
    margin-left: auto;
    color: inherit;
    text-decoration: underline;
    opacity: 0.7;
  }
</style>
