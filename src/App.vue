<template>
  <div id="app">
    <abaxLogo class="image"></abaxLogo>
    <GoogleMaps class="googleMaps" name="example"></GoogleMaps>
  </div>

</template>

<script>
import GoogleMaps from './components/googleMaps'
import AbaxLogo from './components/UI Elements/Logo/AbaxLogo'

export default {
  name: 'App',
  components: {
    GoogleMaps,
    AbaxLogo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.image{
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 16px;
  user-select: none;
}
  .googleMaps{
    width: 100%;
    height: 100vh;
    margin: 0;
    background: gray;
  }
</style>
