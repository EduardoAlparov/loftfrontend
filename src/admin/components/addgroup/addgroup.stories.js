import addgroup from "./addgroup.vue";

export default {
  title: "addgroup"
}

export const defaultView = () => ({
  components: {addgroup},
  template: `
    <addgroup />
  `
});