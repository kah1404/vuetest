<template>
  <div>
  <div class="googleMaps" v-bind:id="mapName"></div>
  </div>
</template>
<script>
  import googleMapsMarkers from './GoogleMapsMarkers'
  export default {
    name: 'googleMaps',
    props: ['country'],
    data: function () {
      return {
        mapName: this.name + "-map",
        markerCoordinates: [],
        markers: [],
        countryId: "norway"
      }
    },
    methods:{
      googleMap: function(){

        googleMapsMarkers.getMarkers(this.countryId);




        /*appService.getPosts(this.countryId).then(data => {
          this.markerCoordinates = data;
        });*/


        const element = document.getElementById(this.mapName);
        const options = {
          center: new google.maps.LatLng(59.051804, 10.018234),
          zoom: 10,
          disableDefaultUI: true
        };
        const map = new google.maps.Map(element,options);

      }
    },
      mounted: function () {
        this.googleMap()
      }
  }
</script>
<style scoped>
  div{
    text-align: justify;
  }
  .googleMaps{
    width: 100%;
    height: 100vh;
    margin: 0;
    background: gray;
  }
</style>
