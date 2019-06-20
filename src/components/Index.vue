<template>
  <div id="indexWrap">
    <h1>Index</h1><br>
    <p>안녕하세요?<br><br>오프라인 학습 테스트의<br>첫 페이지입니다.</p><br>
    <v-btn @click="preloadImage">이미지 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadAudio">오디오 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadVideo">비디오 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadCss">CSS 컨텐츠 프리로딩 하기</v-btn><br>
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
    },
    videos() {
      return this.$store.getters.getVideos
    },
    cssContents() {
      return this.$store.getters.getCssContents
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
    },
    preloadVideo() {
      console.log('preloadVideo run!')
      console.log('Preload Target Videos : ', this.videos)

      this.videos.forEach((video, index) => {
        // Video Offline용 Blob 변환
        fetch(video)
        .then(res => {
          console.log('video - res : ', res)
          res.blob()
          .then(blob => {
            let newVideos = this.videos
            newVideos[index] = blob
            console.log('newVideos : ', newVideos)
            this.$store.commit('setVideos', newVideos)
          })
        })
      })
    },
    preloadCss() {
      console.log('preloadCss run!')
      console.log('Preload Target CSS Contents : ', this.cssContents)

      this.cssContents.forEach(content => {
        let preloadObj = new Image()
        preloadObj.src = content
      })
    }
  }
}
</script>

<style scoped>

</style>
