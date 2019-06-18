<template>
  <div id="app">
    <!-- Navigation -->
    <v-toolbar color="primary" class="mb-3">
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        Offline Test
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn @click="prev">이전 페이지</v-btn>
        <v-btn @click="next">다음 페이지</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Navigation -->
    
    <!-- Offline Test Component -->
    <component :is="page"></component>
    <!-- Offline Test Component -->

    <!-- Utility Components -->
    <Dialog></Dialog>
    <!-- Utility Components -->
  </div>
</template>

<script>
// import Index from './components/Index'
// import TextTest from './components/TextTest'
// import ImageTest from './components/ImageTest'
// import AudioTest from './components/AudioTest'
// import CssTest from './components/CssTest'
// import Last from './components/Last'
import Dialog from './components/Dialog'

export default {
  name: 'app',
  // components: {
  //   Index,
  //   TextTest,
  //   ImageTest,
  //   AudioTest,
  //   CssTest,
  //   Last,
  //   Dialog
  // },
  data: () => ({
    pages: [],
    pageIndex: 0
  }),
  computed: {
    page() {
      return this.pages[this.pageIndex]
    }
  },
  created() {
    this.setData()
    this.setOffline()
  },
  methods: {
    setData() {
      //this.pages = ['Index', 'TextTest', 'ImageTest', 'AudioTest', 'CssTest', 'Last']
      
      // Lazy-Loading 컴포넌트 프리로딩 테스트
      this.pages = [
        () => import(`@/components/Index`),
        () => import(`@/components/TextTest`),
        () => import(`@/components/ImageTest`),
        () => import(`@/components/AudioTest`),
        () => import(`@/components/CssTest`),
        () => import(`@/components/Last`)
      ]

      this.pageIndex = 0

      // store에 Preloading 테스트 할 Contents 추가
      let images = typeof IMAGES !== 'undefined' ? IMAGES : []
      let audios = typeof AUDIOS !== 'undefined' ? AUDIOS : []
      this.$store.commit('setImages', images)
      this.$store.commit('setAudios', audios)
    },
    setOffline() {
      let msg = '오프라인이 되었습니다.<br><br>크롬의 캐시 사용 설정이 되어있지 않으면 학습이 진행되지 않습니다.'
      
      window.addEventListener('offline', () => {
        this.$store.dispatch('showDialog', msg)
      })
    },
    prev() {
      console.log('prev')

      if(0 < this.pageIndex) {
        this.pageIndex--
      }
    },
    next() {
      console.log('next')

      if(this.pageIndex < (this.pages.length-1)) {
        this.pageIndex++
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}

img {
  display: inline;
  width: 300px;
  height: 300px;
}

textarea {
  width: 80%;
  height: 300px;
  border: 2px solid #429e87;
}
</style>
