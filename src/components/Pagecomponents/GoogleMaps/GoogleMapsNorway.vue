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
        countryId: "norway",
      }
      },
    mounted: function () {
      this.GoogleMaps();
    },

    methods:{
      GoogleMaps(){
        appService.getPosts(this.countryId).then(data => {
          this.markerCoordinates = data;


          console.log(this.markerCoordinates);

          const element = document.getElementById(this.mapName);
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,
            disableDefaultUI: true
          };
          let path = "M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z";


          this.map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((company) => {
            const position = new google.maps.LatLng(company.lat, company.lng);

            let SVGIcon = {
              path: "M20,10c0,5.5-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0S20,4.5,20,10z",
              fillColor: "#14B8BE",
              fillOpacity: 10,
              scale: 1
            };

            const marker = new google.maps.Marker({
              position: position,
              map: this.map,
              optimized: true,
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
              content: contentString,
            });

            marker.addListener('click', function () {
              infowindow.open(this.map, marker)
            });
            this.markers.push(marker);
          });
          const markerCluster = new MarkerClusterer(this.map, this.markers,
            {imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    });
  }
  }
  }
</script>


<style scoped>
div{
    text-align: justify;
}
</style>
