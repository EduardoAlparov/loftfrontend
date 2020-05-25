import aboutform from "./aboutform.vue";

export default {
  title: "aboutform"
}

export const defaultView = () => ({
  components: {aboutform},
  template: `
    <aboutform />
  `
});