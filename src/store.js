import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: true,
    songs: null,
  },
  mutations: {
    login (state, user) {
      state.user = user;
    },
    logout (state) {
      state.user = null;
      state.songs = null;
    },
    loading (state) {
      state.loading = true;
    },
    loaded (state) {
      state.loading = false;
    },
    loadSongs (state, songs) {
      state.songs = songs;
    },
    addSong (state, song) {
      state.songs.push(song);
    },
    removeSong (state, songId) {
      state.songs = state.songs.filter(s => s.id != songId);
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
    },
    loadSongs({ commit }, songs) {
      commit('loadSongs', songs);
    },
    addSong({ commit }, song) {
      commit('addSong', song);
    },
    removeSong({ commit }, songId) {
      commit('removeSong', songId);
    }
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
})
