<template>
  <div id="indexWrap">
    <h1>Index</h1><br>
    <p>안녕하세요?<br><br>오프라인 학습 테스트의<br>첫 페이지입니다.</p><br>
    <v-btn @click="preloadImage">이미지 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadAudio">오디오 프리로딩 하기</v-btn><br>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    images() {
      return this.$store.getters.getImages
    },
    audios() {
      return this.$store.getters.getAudios
    }
  },
  methods:{
    preloadImage() {
      console.log('preloadImage run!')
      console.log('Preload Target Images : ', this.images)
      
      this.images.forEach(image => {
        let preloadObj = new Image()
        preloadObj.src = image
      })
    },
    preloadAudio() {
      console.log('preloadAudio run!')
      console.log('Preload Target Audios : ', this.audios)

      this.audios.forEach(audio => {
        let preloadObj = new Audio()
        preloadObj.src = audio
      })
    }
  }
}
</script>

<style scoped>

</style>
