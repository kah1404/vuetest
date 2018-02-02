<template>
  <div>
  <child-map v-bind:id="mapName" ></child-map>

    <b-dropdown style="background-color: #00B3BD" id="ddown1" text="Dropdown Button" class="m-md-2 dropDownMenu">
      <b-dropdown-item style="background-color: #00B3BD"><button>Norway</button></b-dropdown-item>
      <b-dropdown-item style="background-color: #00B3BD">Sweden</b-dropdown-item>
    </b-dropdown>
  </div>
</template>


<script>
  import childMap from 'GoogleMapsChild'
  import Button from "bootstrap-vue/es/components/button/button";


  export default {
    name: 'googleMaps',
    components:{
      Button,
      childMap

    },
    data: function () {
      return {
        mapName:  "-map",
        markerCoordinates: [],
      }
    },
    created: function () {
      //this.$http.get('http://localhost:52796/api/coordinates')
      this.$http.get('http://localhost:63463/api/Norway')
        .then(function (response) {
          for(var i = 0; i < response.data.length; i++){
            var leads = response.data[i];

            this.markerCoordinates.push({
              latitude: parseFloat(leads.lat),
              longitude: parseFloat(leads.lng),
              orgnr: leads.orgnr,
              name: leads.navn,
            });
          }
          const element = document.getElementById(this.mapName);
          const mapCentre = this.markerCoordinates[0];
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,

          };

          const map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((company) => {
            const position = new google.maps.LatLng(company.latitude, company.longitude);
            const marker = new google.maps.Marker({position,map});

            const contentString =
              "<div> orgnr: " + company.orgnr + "</div> <br/>" +
              "<div> Name: "+ company.name + "</div>";


            const infowindow = new google.maps.InfoWindow({
              content: contentString
            });
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
