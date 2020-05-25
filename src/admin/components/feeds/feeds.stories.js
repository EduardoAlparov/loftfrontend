import feeds from "./feeds.vue";

export default {
  title: "feeds"
}

export const defaultView = () => ({
  components: {feeds},
  template: `
    <feeds />
  `
})