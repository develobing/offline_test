<template>
  <div id="textWrap">
    <h2>Text Offline Save Test</h2><br>
    <textarea id="draft"></textarea><br>
    <v-btn @click="saveOffline">오프라인 저장</v-btn>
  </div>
</template>

<script>
export default {
  name: 'TextTest',
  methods: {
    saveOffline() {
      console.log('saveOffline run!')
    }
  }
}
</script>

<style scoped>

</style>
