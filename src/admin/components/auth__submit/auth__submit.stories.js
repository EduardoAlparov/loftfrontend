import auth__submit from "./auth__submit.vue"

export default {
  title: "Button-auth"
}

export const defaultView = () => ({
  components: {auth__submit},
  template: `
    <auth__submit
      buttonname="Отправить"
    />
  `
});
