import blocktitleempty from "./blocktitleempty.vue";

export default {
  title: "blocktitleempty"
}

export const defaultView = () => ({
  components: {blocktitleempty},
  template: `
    <blocktitleempty 
      blockname='Блок "Работы"' 
    />
  `
});