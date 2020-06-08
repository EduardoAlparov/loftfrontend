<template lang="pug">
  .wrapper
    template(v-if="$route.meta.public")
      router-view

    template(v-else-if="userIsLoggedIn")  
      app-header(
        userpic="https://picsum.photos/300/300"
        username="Эдуард Алпаров"
        )
      tabs
      main.content-container
        router-view(:pageTitle="$route.meta.title")

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs")
  },
  computed: {
    ...mapGetters("user", ["userIsLoggedIn"])
  }
}
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