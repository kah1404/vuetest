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
        markerCoordinates: []
      }
    },
    created: function () {
      this.$http.get('http://localhost:52796/api/coordinates')
        .then(function (response) {
          for(var i = 0; i < response.data.length; i++){
            var coordinates = response.data[i];

            this.markerCoordinates.push({
              latitude: parseFloat(coordinates.lat),
              longitude: parseFloat(coordinates.lon)
            });
          }
          const bounds = new google.maps.LatLngBounds();
          const element = document.getElementById(this.mapName);
          const mapCentre = this.markerCoordinates[0];
          const options = {
            center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
            zoom: 15
          }
          const map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({position,map});
            map.fitBounds(bounds.extend(position))
          });
        })
    },
  }
</script>


<style scoped>
</style>
