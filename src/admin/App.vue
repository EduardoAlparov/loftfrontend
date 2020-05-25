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
          .about__section  
            aboutform
            aboutformfull
        .container.works  
          blocktitleempty(
            blockname="Блок 'Работы'"
          )    
          works    
          works_section
        .container.reviews
          blocktitleempty(
            blockname="Блок 'Отзывы'"
          )
          feeds 
          feeds_section
      message_green     
      message_blue     
      message_red     
</template>

<script>
import auth from "./components/auth";
import headline from "./components/headline";
import tabs from "./components/tabs";
import user from "./components/user";
import blocktitle from "./components/blocktitle";
import aboutform from "./components/aboutform";
import aboutformfull from "./components/aboutformfull";
import works from "./components/works";
import works_section from "./components/works_section";
import feeds from "./components/feeds";
import feeds_section from "./components/feeds_section";
import message_green from "./components/message_green";
import message_blue from "./components/message_blue";
import message_red from "./components/message_red";


export default {
  components: {
    auth,
    headline,
    tabs,
    user,
    blocktitle,
    aboutform,
    aboutformfull,
    works,
    works_section,
    feeds,
    feeds_section,
    message_green,
    message_blue,
    message_red
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
  .about__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .container {
    width: 100%;
    padding: 0 30px;
    justify-content: space-between;
  }
  .works {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .reviews {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>