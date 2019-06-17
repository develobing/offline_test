import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [],
    audios: []
  },
  mutations: {
    setImages (state, payload) {
      state.images = payload
    },
    setAudios (state, payload) {
      state.audios = payload
    }
  },
  actions: {
    
  },
  getters: {
    getImages (state) {
      return state.images
    },
    getAudios (state) {
      return state.audios
    }
  }
})
