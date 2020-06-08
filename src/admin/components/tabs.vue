<template lang="pug">
  section.tabs-container
    .tabs-component
      ul.tabs
        li.tabs__item(v-for="tab in tabs")
          router-link(
            :data-text="tab.title" 
            :to="tab.href"
            exact-active-class="active"
          ).tabs__link
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {id: 0, title: "Обо мне", href: "/" },
        {id: 1, title: "Отзывы", href: "/reviews" },
        {id: 2, title: "Работы", href: "/works" }
      ]
    };
  }
}
</script>

<style lang="postcss">
  .tabs-component {
    display: flex;
  }

  .tabs {
    display: flex;
    height: 77px;
  }
  .tabs__item {
    height: 100%;
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }

  .tabs__link {
    vertical-align: middle;
    white-space: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    width: 125px;
    justify-content: center;
    border-bottom: 3px solid transparent;
    text-decoration: none;

    &:before {
      content: attr(data-text);
    }
    &:hover,
    &.active {
      color: #383bcf;
      font-weight: 600;
      border-color: currentColor;
    }
  }
</style>
