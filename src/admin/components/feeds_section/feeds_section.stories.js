import feeds_section from "./feeds_section.vue";

export default {
  title: "feeds_section"
}

export const defaultView = () => ({
  components: {feeds_section},
  template: `
    <feeds_section />
  `
})