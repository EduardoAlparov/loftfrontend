import auth__input from "./auth__input.vue"

export default {
  title: "Form-auth"
}

export const defaultView = () => ({
  components: {auth__input},
  template: `
    <auth__input/>
  `
});

