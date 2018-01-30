<template>
  <div v-bind:id="mapName"></div>
</template>

<script>
  export default {
    name: 'googleMaps',
    props: ['name'],
    data: function () {
      return {
        mapName: this.name + "-map",
        markerCoordinates: [{
          latitude: 51.501527,
          longitude: -0.1921837
        }, {
          latitude: 51.505874,
          longitude: -0.1838486
        }, {
          latitude: 51.4998973,
          longitude: -0.202432
        }]
      }
    },
    created: function () {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          console.log(response.data)
        })
    },
    mounted: function () {
      const bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName)
      const mapCentre = this.markerCoordinates[0]
      const options = {
        center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
      }
      const map = new google.maps.Map(element, options);
      this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({
          position,
          map
        });
        map.fitBounds(bounds.extend(position))
      });
    }
  }



</script>


<style scoped>
</style>
