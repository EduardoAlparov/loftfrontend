<template lang="pug">
  div.root-wrapper-container
    div.root-container
    template 
      header.hefder-container
        headline
          user(
            userpic="https://picsum.photos/300/300"
            username="Lfmao"
          )
      secrion.tabs-container
        tabs(
          @tabChenged="handleTabChange"
        )
      main.content-container
        router-view
</template>

<script>
import headline from "./components/headline";
import tabs from "./components/tabs";
import user from "./components/user";

export default {
  components: {
    headline,
    tabs,
    user
  },
  methods: {
    handleTabChange(tab) {
      this.$router.push(tab.href)
    }

  }
};
</script>