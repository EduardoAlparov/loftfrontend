<template lang="pug">
  .blocks__title
    h1.sections__title {{blockname}} 
</template>

<script>
export default {
  props: ["blockname"]
}
</script>

<style lang="postcss" scoped>
  .blocks__title {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }
  .sections__title {
    font-size: 21px;
    color: #414c63;
    font-weight: 700;
  }
</style>