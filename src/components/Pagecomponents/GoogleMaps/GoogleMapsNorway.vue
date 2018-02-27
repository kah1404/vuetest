<template>
  <div style="position: relative">
    <div class="googleMaps" v-bind:id="mapName"></div>
  </div>

</template>

<script>
  import appService from './App.Service.js'
  export default {
    name: 'googleMapsNorway',
    props: ['country', 'source'],
    data: function () {
      return {
        mapName:  "-map",
        markerCoordinates: [],
        map: null,
        markers: [],
        searchMarkers: [],
        countryId: "norway"
      }
      },
    created: function () {
      this.initMap();
    },

    methods:{
      initMap: function () {


        appService.getPosts(this.countryId).then(data => {
          this.markerCoordinates = data;
          console.log(this.markerCoordinates);

          const element = document.getElementById(this.mapName);
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,
            disableDefaultUI: true
          };

          this.map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((company) => {
            const position = new google.maps.LatLng(company.lat, company.lng);
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
