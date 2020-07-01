<template lang="pug">
  .container.works
    .works__info 
      h1.section__title Блок "Работы"
    .works__section  
      work-add(
        v-if="addFormVisible"
        :mode="mode"
        @closeAddForm="closeAddForm"
      )
    .works__section  
      .works__item.list--third.works__item--add
        button(type="button" @click.prevent="showAddForm('new')").works__add-item
          .works__add-plus +
          .works__add-text Добавить работу
      .works__item.list--third(v-for="work in works" :key="work.id")    
        work-item(
          :work="work"
          @editUserWork="showAddForm('edit')"
        )
</template>

<script>
import { mapActions, mapGetters, mapState} from 'vuex';
import { getAbsoluteImgPath } from '../../helpers/pictures';

export default {
  components: {
    workAdd: () => import("../work-add"),
    workItem: () => import("../work-item")
  },
  data() {
    return {
      addFormVisible: false,
      mode: ""
    }
  },
  computed: {
    ...mapState('works', { works: state => state.works })
  },
  methods: {
    ...mapActions('tooltips', ["showTooltip"]),
    ...mapActions('works', ["getWorks"]),
    showAddForm(mode) {
      this.mode = mode;
      this.addFormVisible = true;
    },
    closeAddForm() {
      this.addFormVisible= false;
    }
  },
  async created() {
    try {
      await this.getWorks();
    } catch (e) {
      this.showTooltip({
        type: "error",
        text: e.message
      });
    }
  }
}
</script>

<style lang="postcss" scoped>

  .container {
    width: 100%;
    padding: 0 30px;
    justify-content: space-between;
  }
  .works {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .works__info {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  .works__section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .works__item {
    box-shadow: 4px 3px 20px 0 rgba(0,0,0,.07);
    background-color: #fff;
    margin-bottom: 30px;
    padding-bottom: 60px;
    position: relative;

    &--add {
      background-image: linear-gradient(90deg,#ed8000,#f29400);
      &:hover {
        background-image: linear-gradient(90deg, #f29400, #ed8000);    
      }
    }
  }
  .list--third {
    width: calc(33.33333% - 30px);
    min-height: 350px;
  }
  .works__add-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
  .works__add-plus {
    font-size: 75px;
    font-weight: 300;
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    margin-bottom: 10px;
  }
  .works__add-text {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.67;
    text-align: center;
    color: #fff;
  }
</style>