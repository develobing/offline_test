<template>
  <div id="videoWrap">
    <h2>Videos Preload Test</h2><br>
  </div>
</template>

<script>
export default {
  name: 'VideoTest',
  computed: {
    videos() {
      return this.$store.getters.getVideos
    },
    videoBlobs() {
      return this.$store.getters.getVideoBlobs
    }
  },
  mounted() {
    this.setVideos()
  },
  methods: {
    setVideos() {
      console.log('this.videos', this.videos)

      let videoWrap = document.querySelector('#videoWrap')
      // this.videos.forEach(video => {
      //   let videoTag = document.createElement('video')
      //   console.log('videoBlob', this.videoBlob)
      //   videoTag.src = URL.createObjectURL(this.videoBlob)
      //   videoTag.controls = true
      //   videoTag.onerror = () => {
      //     console.log('videoTag - onerror')
      //     this.$store.dispatch('showOfflineError')
      //   }
      //   videoWrap.appendChild(videoTag)
      // })

      this.videoBlobs.forEach(videoblob => {
        let videoTag = document.createElement('video')
        videoTag.src = URL.createObjectURL(videoblob)
        videoTag.controls = true
        videoTag.onerror = () => {
          console.log('videoTag - onerror')
          this.$store.dispatch('showOfflineError')
        }
        videoWrap.appendChild(videoTag)
      })
    }
  }
}
</script>

<style scoped>

</style>
