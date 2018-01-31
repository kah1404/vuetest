<template>
  <div id="app">
    <top-banner class="image"></top-banner>
    <button class="button" v-on:click="test()" > press me </button>
    <GoogleMaps class="googleMaps" name="example"></GoogleMaps>
    <app-window id="menu" class="window"></app-window>
  </div>
</template>

<script>
import GoogleMaps from './components/googleMaps'
import TopBanner from './components/Pagecomponents/Topbanners/TopBanner'
import AppWindow from './components/Pagecomponents/appwindows/AppWindow'
import Button from './components/UI Elements/Buttons/Button'

export default {
  name: 'App',
  components: {
    GoogleMaps,
    TopBanner,
    AppWindow,
    Button
  },
  methods: {
    test: function () {
      var x = document.getElementById("menu");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
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
    top: 150px;
    left: 170px;
    user-select: none;
  }
</style>
