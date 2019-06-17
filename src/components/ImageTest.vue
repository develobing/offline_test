<template>
  <div id="imageWrap">
    <h2>Image Preload Test</h2><br>
  </div>
</template>

<script>
export default {
  name: 'ImageTest',
  computed: {
    images() {
      return this.$store.getters.getImages
    }
  },
  mounted() {
    this.setImages()
  },
  methods: {
    setImages() {
      console.log('this.images', this.images)

      let imageWrap = document.querySelector('#imageWrap')
      this.images.forEach(image => {
        let imageTag = document.createElement('img')
        imageTag.src = image
        imageWrap.appendChild(imageTag)
      })
    }
  }
}
</script>

<style scoped>

</style>
