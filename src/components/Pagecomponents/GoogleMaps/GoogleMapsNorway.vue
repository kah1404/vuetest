<template>
  <div style="position: relative">
    <div class="googleMaps" v-bind:id="mapName"></div>
  </div>

</template>

<script>
  import showProspects from './Prospects'
  import showAppLeads from './AppLeads'
  export default {
    name: 'googleMapsNorway',
    props: ['country', 'source'],
    components:{
    },
    data: function () {
      return {
        mapName:  "-map",
        prospectsData: [],
        appLeadsData: [],
        map: null,
        markers: [],
        searchMarkers: [],
        countryId: "norway",
        cb1: this.$store.state.open,

      }
      },
    mounted() {
      this.AppLeads();
      this.Prospects();
      this.GoogleMaps();

    },
    methods:{
       GoogleMaps(){

        const element = document.getElementById(this.mapName);
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 4,
            disableDefaultUI: true,
          };

          this.map = new google.maps.Map(element, options);

         //google.maps.event.addListener(this.map, 'tilesloaded', function () {

         //});
      },
      AppLeads(){
        showAppLeads.getPosts().then(data => {
          this.appLeadsData = data;
          console.log(this.appLeadsData);

          this.appLeadsData.forEach((leads) => {
            const position = new google.maps.LatLng(leads.lat, leads.lng);

            const marker = new google.maps.Marker({
              position: position,
              map: this.map,
              optimized: true
            });

            const contentString = "<div>"+ leads.address + "</div>"

            const infoWindow = new google.maps.InfoWindow({
              content: contentString,
            });

            marker.addListener('click', function () {
              infoWindow.open(this.map, marker)
            });

            this.markers.push(marker);

          });
          const markerCluster = new MarkerClusterer(
            this.map,
            this.markers,
            {
              imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });

        })
      },
      Prospects(){
        showProspects.getPosts().then(data => {
          this.prospectsData = data;
          console.log(this.prospectsData);

          this.prospectsData.forEach((company) => {
            const position = new google.maps.LatLng(company.lat, company.lng);

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

            const infoWindow = new google.maps.InfoWindow({
              content: contentString,
            });

            marker.addListener('click', function () {
              infoWindow.open(this.map, marker)
            });
            this.markers.push(marker);
          });
          const markerCluster = new MarkerClusterer(
            this.map,
            this.markers,
            {
              imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        })
      },
    }
  }
</script>


<style scoped>
div{
    text-align: justify;
}
</style>
