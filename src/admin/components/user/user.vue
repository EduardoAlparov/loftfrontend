<template lang="pug">
  .user-component
    .avatar
      img(:src="userpic")
    .username {{username}}
</template>

<script>
export default {
  props: ["userpic", "username"]

}
</script>

<style lang="postcss" scoped>
  .avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-component {
    display: flex;
    align-items: center;
    color: #fff;
  }

</style>