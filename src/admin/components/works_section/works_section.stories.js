import works_section from "./works_section.vue";

export default {
  title: "works_section"
}

export const defaultView = () => ({
  components: {works_section},
  template: `
    <works_section />
  `
});