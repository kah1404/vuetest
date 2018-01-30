<template>
  <div id="app">
    <abaxLogo></abaxLogo>
    <GoogleMaps name="example"></GoogleMaps>
  </div>

</template>

<script>
import Test from './components/Test'
import GoogleMaps from './components/googleMaps'
import AbaxLogo from './components/UI Elements/Logo/AbaxLogo'

export default {
  name: 'App',
  components: {
    Test,
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
</style>
