import { wrapIntoFormData } from '../../helpers/forms';
import { generateStdError } from '../../helpers/errorHandler';


export default { 
  namespaced: true,
  state: {
    reviews: [],
    currentReview: []
  },
  mutations: {
    GET_REVIEWS: (state, payload) => {
      state.reviews = payload;
    },
    ADD_REVIEW: (state, review) => {
      state.reviews.unshift(review);
    },
    UPDATE_REVIEW: (state, changedReview) => {
      state.reviews = state.reviews.map(review => {
        return review.id === changedReview.id ? changedReview : review;
      });
    },
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(
        review => review.id !== removedReviewId
      );
    },
    SET_CURRENT_REVIEW: (state, selectedReviewId) => {
      state.currentReview = state.reviews.filter(
        review => review.id === selectedReviewId
      )[0];
    }
  },
  actions: {
    async addReview({ commit }, review) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post("/reviews", data);
        commit("ADD_REVIEW", response.data);
        return response
      } catch(e) {
        generateStdError(e);
      }
    },
    async getReviews({ commit }) {
      try {
        //const userId = rootState['user/userId'];
        const response = await this.$axios.get(`/reviews/342`);
        commit('GET_REVIEWS', response.data);
        return response 
      } catch(e) {
        generateStdError(e);
      }
    },
    async updateReview({ commit }, review) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post(`/reviews/${review.id}`, data);
        commit('UPDATE_REVIEW', response.data.review);
        return response 
      } catch(e) {
        generateStdError(e);
      }  
    },
    async removeReview({ commit }, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit('REMOVE_REVIEW', reviewId);
        return response 
      } catch(e) {
        generateStdError(e);
      }  
    }
  }
}

