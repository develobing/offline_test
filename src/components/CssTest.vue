<template>
  <div id="cssWrap">
    <h2>Css Offline Test</h2><br>
    <div class="css_test01">
      <h3>CSS Test01</h3>
    </div>
    <br>
    <hr>

    <div class="css_test02">
      <h3>CSS Test02</h3>
    </div>
    <br>
    <hr>

    <div class="css_test03">
      <h3>CSS Test03</h3>
    </div>
    <br>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'CssTest'
}
</script>

<style scoped>
@import url('../assets/css/css_test.css');

.css_test01 {
  width: 100%;;
  height: 200px;
  color: lightgray;
  background-image: url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  background-position: center;
}

.css_test02 {
  width: 100%;;
  height: 200px;
  color: lightgray;
  background-image: url('../assets/img/img01.jpg');
  background-position: center;
}
</style>
