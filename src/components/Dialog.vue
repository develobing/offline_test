<template>
  <div id="dialogWrap">
   <v-dialog width="500" v-model="isShow">
      <v-card>
        <v-card-title class="headline grey lighten-3" v-html="title"></v-card-title>
        <v-card-text v-html="msg"></v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="confirm" v-html="btn"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  computed: {
    dialog() {
      return this.$store.getters.getDialog
    },
    isShow() {
      return this.dialog.isShow
    },
    title() {
      let title = this.dialog.title
      return typeof title === 'undefined' || typeof title === 'null' || title == '' ? '알림' : title
    },
    msg() {
      return this.dialog.msg
    },
    btn() {
      let btn = this.dialog.btn
      return typeof btn === 'undefined' || typeof btn === 'null' || btn == '' ? '확인' : btn
    },
    callback() {
      return this.dialog.callback
    }
  },
  methods: {
    init () {
      let dialog = {
        isShow: false,
        title: '알림',
        msg: '',
        btn: '확인',
        callback: null
      }

      this.$store.commit('setDialog', dialog)
    },
    confirm () {
      console.log('dialog - confirm run!')
      
      if(typeof this.callback === 'function') {
        callback()
      }

      this.init()
    }
  }
}
</script>

<style scoped>

</style>
