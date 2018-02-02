<template>
  <div id="app">
    <top-banner/>
    <GoogleMaps class="googleMaps" name="example"></GoogleMaps>
   <!-- <test-stuff/>-->
  </div>
</template>

<script>
import GoogleMaps from './components/googleMaps'
import TopBanner from './components/Pagecomponents/Topbanners/TopBanner'
import InfoWindow from './components/Pagecomponents/Appwindows/AppWindow'
import TestStuff from './components/TestComponents/somestuff'


export default {
  name: 'App',
  components: {
    GoogleMaps,
    TopBanner,
    InfoWindow,
    TestStuff,

  },

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
.TopBanner{
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 5px;
  user-select: none;
  width: 150px;
}
  .googleMaps{
    width: 100%;
    height: 100vh;
    margin: 0;
    background: gray;
  }
  .window{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 600px;
    display: none;
  }
  .button{
    z-index: 1;
    position: absolute;
    top: 115px;
    left: 160px;
    width: 50px;
    opacity: 100;
  }
</style>
