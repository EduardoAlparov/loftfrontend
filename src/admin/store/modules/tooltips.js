export default {
  namespaced: true, 
  state: {
    visible: false
  },
  mutations: {
    SHOW_TOOLTIP: (state, visible) => {
      state.visible = visible;
    },
    CLOSE_TOOLTIP: (state, visible) =>{
      
    }
  },
  actions: {
    async showTooltip({ commit }, visible ) {
      commit("SHOW_TOOLTIP", visible)
    }
  }
}