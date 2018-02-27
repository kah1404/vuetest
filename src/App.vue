<template>
  <div id="app">
<top-banner></top-banner>
  </div>
</template>

<script>
import TopBanner from './components/Pagecomponents/Topbanners/TopBanner'

export default {
  name: 'App',
  components: {
    TopBanner,
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
