import auth from "./auth.vue"

export default {
  title: "Auth"
}

export const defaultView = () => ({
  components: {auth},
  template: `
    <auth/>
  `
});
