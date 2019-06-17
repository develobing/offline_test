import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialog: {
      isShow: false,
      title: '알림',
      msg: '',
      btn: '확인',
      callback: null
    },
    images: [],
    audios: []
  },
  mutations: {
    setDialog(state, payload) {
      state.dialog = payload
    },
    setImages(state, payload) {
      state.images = payload
    },
    setAudios(state, payload) {
      state.audios = payload
    }
  },
  actions: {
    showDialog(context, dialogData) {
      let dialog
      if(typeof dialogData === 'object') {
        dialog = {
          isShow: true,
          title: dialogData.title,
          msg: dialogData.msg,
          btn: dialogData.btn,
          callback: dialogData.callback
        }
      } else if(typeof dialogData === 'string') {
        dialog = {
          isShow: true,
          msg: dialogData,
        }
      }

      context.commit('setDialog', dialog)
    },
    showOfflineError(context) {
      let msg = '오프라인이 되었습니다.<br><br>크롬의 캐시 사용 설정이 되어있지 않으면 학습이 진행되지 않습니다.'
      context.dispatch('showDialog', msg)
    }
  },
  getters: {
    getDialog(state) {
      return state.dialog
    },
    getImages(state) {
      return state.images
    },
    getAudios(state) {
      return state.audios
    }
  }
})
