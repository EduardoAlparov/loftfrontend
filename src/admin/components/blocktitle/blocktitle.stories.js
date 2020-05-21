import blocktitle from "./blocktitle.vue";

export default {
  title: "blocktitle"
}

export const defaultView = () => ({
  components: {blocktitle},
  template: `
    <blocktitle 
      blockname="Обо мне"
    />
  `
});