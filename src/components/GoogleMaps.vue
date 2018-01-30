<template>
  <div class="googleMaps" v-bind:id="mapName"></div>
</template>

<script>
  export default {
    name: 'googleMaps',
    props: ['name'],
    data: function () {
      return {
        mapName: this.name + "-map",
      }
    },
    mounted: function () {
      const element = document.getElementById(this.mapName)
      const options = {
        zoom: 14,
        center: new google.maps.LatLng(59.051880,10.018935)
      }
      const map = new google.maps.Map(element,options);
    }
  };

</script>


<style scoped>
  .googleMaps {
    width: 100%;
    height: 100vh;
    margin: 0;
    background: gray;
  }
</style>
