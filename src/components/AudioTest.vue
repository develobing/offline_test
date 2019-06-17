<template>
  <div id="audioWrap">
    <h2>Audio Preload Test</h2><br>
    <audio src="https://ilcontents.chungdahm.com/LCMSFiles/Packing_org/SVC001/TRK507/1267/C1MT/SVC001_1267_C1MT_14595/TA_IL_C1_Tera_LF_L05_SR-01.mp3" controls></audio><br>
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
        audioWrap.appendChild(audioTag)
        audioWrap.appendChild(brTag)
      })
    }
  }
}
</script>

<style scoped>

</style>
