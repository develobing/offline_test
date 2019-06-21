<template>
  <div id="indexWrap">
    <component :is="cover"></component>
    <h1>Index</h1><br>
    <p>안녕하세요?<br><br>오프라인 학습 테스트의<br>첫 페이지입니다.</p><br>
    <v-btn @click="preloadImage">이미지 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadAudio">오디오 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadCss">CSS 컨텐츠 프리로딩 하기</v-btn><br>
    <v-btn @click="preloadVideo">비디오 프리로딩 하기</v-btn><br>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Index',
  created() {
  },
  computed: {
    images() {
      return this.$store.getters.getImages
    },
    audios() {
      return this.$store.getters.getAudios
    },
    cssContents() {
      return this.$store.getters.getCssContents
    },
    videos(){
      return this.$store.getters.getVideos
    },
    isDownloadedImage(){
      return this.downloadedImage >= this.images.length
    },
    isDownloadedAudio(){
      return this.downloadedAudio >= this.audios.length
    },
    isDownloadedCss(){
      return this.downloadedCss >= this.cssContents.length
    },
    isDownloadedVideo(){
      return this.downloadedVideo >= this.videos.length
    }

  },
  watch:{
    downloadedImage(){
      if(this.isDownloadedImage){
        this.downloadedImage = 0
        this.destoryCover()
      }else{
        console.log('downloadedImage', this.downloadedImage)
      }
    },
    downloadedAudio(){
      if(this.isDownloadedAudio){
        this.downloadedAudio = 0
        this.destoryCover()
      }else{
        console.log('downloadedAudio', this.downloadedAudio)
      }
    },
    downloadedCss(){
      if(this.isDownloadedCss){
        this.downloadedCss = 0
        this.destoryCover()
      }else{
        console.log('downloadedCss', this.downloadedCss)
      }
    },
    downloadedVideo(){
      if(this.isDownloadedVideo){
        this.downloadedVideo = 0
        this.destoryCover()
      }else{
        console.log('downloadedVideo', this.downloadedVideo)
      }
    }
  },
  data(){
    return {
      cover : null,
      videoBlobs : [],
      downloadedImage : 0,
      downloadedAudio : 0,
      downloadedCss : 0,
      downloadedVideo : 0
    }
  },
  methods:{
    invokeCover(){
      console.log('spinnser is running')
      this.cover = () => import(`@/components/Cover`);
    },
    destoryCover(){
      console.log('spinner dead')
      this.cover = null
    },
    preloadImage() {
      console.log('preloadImage run!')
      console.log('Preload Target Images : ', this.images)
      this.invokeCover();
    
      this.images.forEach(image => {
        let preloadObj = new Image()
        preloadObj.src = image
        preloadObj.addEventListener('load', () => {
          this.downloadedImage++
        })        
      })
    },
    preloadAudio() {
      console.log('preloadAudio run!')
      console.log('Preload Target Audios : ', this.audios)
      this.invokeCover();

      this.audios.forEach(audio => {
        let preloadObj = new Audio()
        preloadObj.src = audio
        preloadObj.addEventListener('loadeddata', () => {
          this.downloadedAudio++
        })        
      })
    },
    preloadCss() {
      console.log('preloadCss run!')
      console.log('Preload Target CSS Contents : ', this.cssContents)
      this.invokeCover();

      this.cssContents.forEach(content => {
        let preloadObj = new Image()
        preloadObj.src = content
        preloadObj.addEventListener('load', () => {
          this.downloadedCss++
        })        
      })
    },
    preloadVideo() {
      console.log('preloadVideo run!')
      console.log('Preload Target Video Contents : ', this.videos)
      this.invokeCover();

      this.videos.forEach(video => {
        let preloadObj = document.createElement("video")
        fetch(video)
        .then(response => response.blob())
        .then(blob => {
          this.videoBlobs.push(blob)
          preloadObj.src = URL.createObjectURL(blob)
        })
        preloadObj.addEventListener('loadedmetadata', () => {
          this.downloadedVideo++
        })
      })
      this.$store.commit('setVideoBlobs', this.videoBlobs)
    },
    setVideoBlobs(src){

    }
  }
}
</script>

<style scoped>

</style>
