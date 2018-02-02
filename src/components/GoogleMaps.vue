<template>
  <div class="googleMaps" v-bind:id="mapName"></div>
</template>

<script>
  export default {
    name: 'googleMaps',
    data: function () {
      return {
        mapName:  "-map",
        markerCoordinates: [],
        Info: [{
          Name: "Jon",
          Age: 22
        }]
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
          const element = document.getElementById(this.mapName);
          const mapCentre = this.markerCoordinates[0];
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,

          };
          const contentString = "<div>test</div>";
          const infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          const map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({position,map});
            marker.addListener('click', function () {
                infowindow.open(map, marker)
            });
          });
        })
    },
  }
</script>


<style scoped>
</style>
