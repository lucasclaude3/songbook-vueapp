import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: true,
  },
  mutations: {
    login (state, user) {
      state.user = user;
    },
    logout (state) {
      state.user = null;
    },
    loading (state) {
      state.loading = true;
    },
    loaded (state) {
      state.loading = false;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('login', user);
    },
    logout({ commit }) {
      commit('logout');
    },
    loading({ commit }) {
      commit('loading');
    },
    loaded({ commit }) {
      commit('loaded');
    }
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
})
