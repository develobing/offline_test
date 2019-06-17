<template>
  <div id="audioWrap">
    <h2>Audio Preload Test</h2><br>
  </div>
</template>

<script>
export default {
  name: 'AudioTest',
  computed: {
    audios() {
      return this.$store.getters.getAudios
    }
  },
  mounted() {
    this.setAudios()
  },
  methods: {
    setAudios() {
      console.log('this.audios', this.audios)

      let audioWrap = document.querySelector('#audioWrap')
      this.audios.forEach(audio => {
        let audioTag = document.createElement('audio')
        let brTag = document.createElement('br')
        audioTag.src = audio
        audioTag.controls = true
        audioTag.onerror = () => {
          console.log('audioTag - onerror')
          this.$store.dispatch('showOfflineError')
        }
        audioWrap.appendChild(audioTag)
        audioWrap.appendChild(brTag)
      })
    }
  }
}
</script>

<style scoped>

</style>
