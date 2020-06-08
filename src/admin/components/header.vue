<template lang="pug">
  header.header-container
    .headline-component
      .user-component
        .avatar
          img(:src="userpic")
        .username {{username}}
      .desc Панель администрирования
      button(
        type="button"
        @click="logout"
      ).logout Выйти
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["userpic", "username"],
  methods: {
    ...mapActions({
      logoutUser: "user/logout"
    }),
    logout() {
      this.logoutUser();
      this.$router.replace("/login");
    }
  }
}
</script>
<style lang="postcss">

  .headline-component{
    background-image: linear-gradient(to top, rgb(208,115,27) 0%, rgb(214,131,31) 48%, rgb(220,147,34) 100%);    padding: 20px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
  }

  .user-component {
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 30px;
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
