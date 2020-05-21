<template lang="pug">
  .wrapper
    template 
      auth
      header.header-container
        headline
          user(
            userpic="https://picsum.photos/300/300"
            username="Эдуард Алпаров"
          )
      section.tabs-container
        tabs(
          @tabChenged="handleTabChange"
        )
      main.content-container
        .container
          blocktitle(
            blockname='Блок "Обо мне"')
              addgroup

</template>

<script>
import auth from "./components/auth";
import headline from "./components/headline";
import tabs from "./components/tabs";
import user from "./components/user";
import blocktitle from "./components/blocktitle";
import addgroup from "./components/addgroup";

export default {
  components: {
    auth,
    headline,
    tabs,
    user,
    blocktitle,
    addgroup
  },

  methods: {
    handleTabChange(tab) {
      this.$router.push(tab.href)
    }

  }
};
</script>

<style lang="postcss">
  @import url('./default.pcss');

  .wrapper {
    overflow: hidden;
    min-height: 100%;
    position: relative;
    width: 100%;
  }
  .maincontent {
    width: 100%;
    display: flex;
  }
  .content-container {
    position: relative; 
    background: #f9f9f9;
    background-size: cover;
    height: 100%;
    padding-top: 60px;
  }
</style>