<template>
  <div id="videoWrap">
    <h2>Video Preload Test</h2><br>
  </div>
</template>

<script>
export default {
  name: 'VideoTest',
  computed: {
    videos() {
      return this.$store.getters.getVideos
    }
  },
  mounted() {
    this.setVideos()
  },
  methods: {
    setVideos() {
      console.log('this.videos', this.videos)

      let videoWrap = document.querySelector('#videoWrap')
      this.videos.forEach(video => {
        let videoTag = document.createElement('video')
        let brTag = document.createElement('br')
        videoTag.src = video
        videoTag.controls = true
        videoTag.onerror = () => {
          console.log('videoTag - onerror')
          this.$store.dispatch('showOfflineError')
        }
        videoWrap.appendChild(videoTag)
        videoWrap.appendChild(brTag)
      })
    }
  }
}
</script>

<style scoped>

</style>
