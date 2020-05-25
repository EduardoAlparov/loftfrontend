import works from "./works.vue";

export default {
  title: "works"
}

export const defaultView = () => ({
  components: {works},
  template: `
    <works />
  `
});