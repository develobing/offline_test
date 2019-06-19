<template>
  <div id="textWrap">
    <h2>Text Offline Save Test</h2><br>
    <input id="title" type="text" v-model="title"><br>
    <textarea id="content" v-model="content"></textarea><br>
    <v-btn @click="saveOffline">오프라인 저장</v-btn>
    <v-btn @click="loadOffline">오프라인 불러오기</v-btn>
    <v-btn @click="discardOffline">오프라인 데이터 삭제</v-btn>
  </div>
</template>

<script>
export default {
  name: 'TextTest',
  data: () => ({
    title: '',
    content: ''
  }),
  methods: {
    saveOffline() {
      console.log('saveOffline run!')
      if(localStorage === undefined || localStorage === null) return

      let studyData = {
        title: this.title,
        content: this.content
      }
      console.log('saveOffline - studyData : ', studyData)
      localStorage.setItem('studyData', JSON.stringify(studyData))
    },
    loadOffline() {
      console.log('loadOffline run!')
      if(localStorage === undefined || localStorage === null) return
      
      let studyData = JSON.parse(localStorage.getItem('studyData'))
      console.log('loadOffline - studyData : ', studyData)
      if(studyData === undefined || studyData === null) return

      this.title = studyData.title
      this.content = studyData.content
    },
    discardOffline() {
      console.log('discardOffline run!')
      localStorage.removeItem('studyData')
    }
  }
}
</script>

<style scoped>

</style>
