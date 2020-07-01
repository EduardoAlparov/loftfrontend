import { wrapIntoFormData } from '../../helpers/forms';
import { generateStdError } from '../../helpers/errorHandler';


export default {
  namespaced: true,
  state: {
    works: [],
    currentWorks: []
  },
  mutations: {
    GET_WORKS: (state, works) => {
      state.works = works;
    },
    ADD_WORK: (state, work) => {
      state.works.push(work);
    },
    UPDATE_WORK: (state, changedWork) => {
      state.works = state.works.map(work => {
        return work.id === changedWork.id ? changedWork : work;
      });
    },
    REMOVE_WORK: (state, removedWorkId) => {
      state.works = state.works.filter(
        work => work.id !== removedWorkId
      );
    },
    SET_CURRENT_WORK: (state, selectedWorkId) => {
      state.currentWork = state.works.filter(
        work => work.id === selectedWorkId
      )[0];
    }
  },
  actions: {
    async addWork({commit}, work) {
      const data = wrapIntoFormData(work);
      try {
        const response = await this.$axios.post('/works', data)
        commit("ADD_WORK", response.data);
        return response
      }  catch(e) {
        generateStdError(e);
      }
    },
    async getWorks({commit, rootGetters}) {
      try {
        //const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/works/342`);
        commit('GET_WORKS', response.data);
        return response 
      } catch(e) {
        generateStdError(e);
      }
    },
    async updateReview({ commit }, work) {
      const data = wrapIntoFormData(work);
      try {
        const response = await this.$axios.post(`/works/${work.id}`, data);
        commit('UPDATE_WORK', response.data.work);
        return response 
      } catch(e) {
        generateStdError(e);
      }  
    },
    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit('REMOVE_WORK', workId);
        return response 
      } catch(e) {
        generateStdError(e);
      }  
    }
  }
}