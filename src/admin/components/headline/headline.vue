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

.logout {
  margin-left: auto;
  color: inherit;
}
</style>
