<template>
  <div id="app" v-cloak>
    <top-banner></top-banner>
    <google-maps class="googleMaps" v-bind:key="this.$store.state.name"></google-maps>
  </div>
</template>

<script>
import TopBanner from './components/Pagecomponents/Topbanners/TopBanner'
import GoogleMaps from './components/Pagecomponents/GoogleMaps/GoogleMapsNorway'

export default {
  name: 'App',
  components: {
    TopBanner,
    GoogleMaps,
  },


}
</script>

<style>
body, html{
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Arial', Helvetica,Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
[v-cloak] > *{display:none}
[v-cloak]::before {content: "loading..."}
.googleMaps{
  display: flex;

  width: 100%;
  height: 100vh;
  background: gray;
}
</style>
