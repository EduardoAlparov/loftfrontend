import { wrapIntoFormData } from '../../helpers/forms';

export default { 
  namespaced: true,
  state: {
    reviews: [],
    currentReviews: []
  },
  mutations: {
    GET_REVIEWS: (state, payload) => {
      state.reviews = payload;
    },
    ADD_REVIEWS: (state, review) => {
      state.reviews.unshift(review);
    },
    UPDATE_REVIEW: (state, changedReview) => {
      state.reviews = state.reviews.map(review => {
        return review.id === changedReview.id ? changedReview : review;
      });
    },
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(
        review => review.id !==removedReviewId
      );
    },
    SET_CURRENT_REVIEW: (state, selectedReviewId) => {
      state.currentReviews = state.reviews.filter(
        review => review.id === selectedReviewId
      )[0];
    }
  },
  actions: {
    async addReview({commit}, review) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post("/reviews", data);
        commit("ADD_REVIEW", response.data);
        return response
      } catch(e) {
        generateStdError(e);
      }
    },
    async getReviews({commit, rootGetters}) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get('/reviews/${userId');
        commit('GET_REVIEWS', response.data);
        return response 
      } catch(e) {
        generateStdError(e);
      }
    },
    async updateReview({ commit }, review) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post('/reviews/${review.Id}', data);
        commit('UPDATE_REVIEWS', response.data.review);
        return response 
      } catch(e) {
        generateStdError(e);
      }  
    },
    async updateReview({ commit }, reviewId) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post('/reviews/${review.Id}');
        commit('REMOVE_REVIEWS', reviewId);
        return response 
      } catch(e) {
        generateStdError(e);
      }  
    }
  }
}

