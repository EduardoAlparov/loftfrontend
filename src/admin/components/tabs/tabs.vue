<template lang="pug">
  .tabs-component
    ul.list 
      li.item(
        v-for="tab in tabs" :key="tab.id"
        :class="{'active' : activeTabId == tab.id}"
      )  
        button(
          type="button"
          @click="handleChange(tab)"
        ).btn {{tab.title}}
</template>

<script>

const tabs = [
  {id: 0, title: "Обо мне", href: "/about"},
  {id: 1, title: "Работы", href: "/works"},
  {id: 2, title: "Отзывы", href: "/reviews"},
]
export default {
  data() {
    return { 
      tabs,
      activeTabId: 0
    }
  },
  methods: {
    handleChange(tab) {
      this.activeTabId = tab.id;
      this.$emit("tabChanged", tab);
    }
  }
}
</script>

<style lang="postcss">
  .tabs-component {
    display: flex;
  }

  .list {
    display: flex;
  }
 
  .btn {
    padding: 20px;
  }

  .item {
    position: relative;

    &.active {
      &:before {
        position: absolute;
        content: "";
        display: block;
        left: 0;
        right: 0; 
        bottom: 0; 
        height: 3px;
        background: #454573;
      }
    }
  }
</style>
