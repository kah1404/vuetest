<template>
  <div style="position: relative">
    <div class="googleMaps" v-bind:id="mapName"></div>
    <button class="button" v-on:click="deleteMarkers" >Delete markers</button>
  </div>

</template>

<script>
  export default {
    name: 'googleMapsSweden',
    props: ['country'],

    data: function () {
      return {
        mapName:  "-map",
        markerCoordinates: [],
        map: null,
        markers: []
      }
    },
    mounted: function () {
      console.log(this.country);
      this.$http.get('http://localhost:63463/api?country=sweden')
        .then(function (response) {
          for(let i = 0; i < response.data.length; i++){
            let leads = response.data[i];

            this.markerCoordinates.push({
              latitude: parseFloat(leads.lat),
              longitude: parseFloat(leads.lon),
              companyName: leads.companyName,
              orgNumber: leads.orgNumber,
              telephoneNumber: leads.telephoneNumber,
              revenue: leads.revenue,
              numberOfVehicles: leads.numberOfVehicles,
              numberOfServiceVehicles: leads.numberOfServiceVehicles,
              numberOfCompanyVehicles: leads.numberOfCompanyVehicles,
              numberOfHeavyVehicles: leads.numberOfHeavyVehicles,
              numberOfEmployees: leads.numberOfEmployees
            });
          }
          const element = document.getElementById(this.mapName);
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,
            disableDefaultUI: true
          };

          this.map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((company) => {
            const position = new google.maps.LatLng(company.latitude, company.longitude);
            const marker = new google.maps.Marker({
              position,
              map: this.map
            });

            const contentString =
              "<div style='font-size: large'>" + company.companyName + "</div> <n/>" +
              "<div> OrgNumber: "+  company.orgNumber + "</div><n/>"+
              "<div> Telephone number: "+ company.telephoneNumber +"</div><n/>"+
              "<div> revenue: "+ company.revenue +"</div><n/>" +
              "<div> number of vehicles: "+ company.numberOfVehicles +"</div><n/>"+
              "<div> number of serviceVehicles: "+ company.numberOfServiceVehicles +"</div><n/>"+
              "<div> number of companyVehicles: "+ company.numberOfCompanyVehicles +"</div><n/>"+
              "<div> number of heavyVehicles: "+ company.numberOfHeavyVehicles +"</div><n/>"+
              "<div> number of employees: "+ company.numberOfEmployees +"</div><n/>"
            ;

            const infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            marker.addListener('click', function () {
              infowindow.open(this.map, marker)
            });
            this.markers.push(marker);
          });
        });
    },
    methods:{
      setMapOnAll: function (map) {
        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(map);
        }
      },
      clearMarkers: function () {
        this.setMapOnAll(null);
      },
      deleteMarkers: function () {
        this.clearMarkers();
        this.markers = [];
      }
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
  .button{
    z-index: 1;
    position: absolute;
    top: 3rem;
    left: 9.5rem;
    width: auto;
  }
</style>
