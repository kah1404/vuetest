<template>
  <div>
  <div class="googleMaps" :id="mapName"></div>
  </div>
</template>
<script>
  export default {
    name: 'googleMaps',
    props: ['country'],
    data: function () {
      return {
        mapName: this.name + "-map",
        markerCoordinates: [],
        companyData: [],
        map: null,
        content: null,
        marker: null
      }
    },
    methods:{
      googleMap: function (response) {
        for(let i = 0; i < response.data.length; i++){
          let leads = response.data[i];

          this.markerCoordinates.push({
            latitude: parseFloat(leads.lat),
            longitude: parseFloat(leads.lon),
          });

          this.companyData.push({
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

          const element = document.getElementById(this.mapName);
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,
            disableDefaultUI: true
          };

          this.map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((coordinate) =>{
            const position = new google.maps.LatLng(coordinate.latitude, coordinate.longitude);
            this.marker = new google.maps.Marker({position, map: this.position})
          });

          this.companyData.forEach((company) => {
            const contentString =
              "<div style='font-size: large'>" + company.companyName + "</div> <n/>" +
              "<div> OrgNumber: "+  company.orgNumber + "</div><n/>"+
              "<div> Telephone number: "+ company.telephoneNumber +"</div><n/>"+
              "<div> revenue: "+ company.revenue +"</div><n/>" +
              "<div> number of vehicles: "+ company.numberOfVehicles +"</div><n/>"+
              "<div> number of serviceVehicles: "+ company.numberOfServiceVehicles +"</div><n/>"+
              "<div> number of companyVehicles: "+ company.numberOfCompanyVehicles +"</div><n/>"+
              "<div> number of heavyVehicles: "+ company.numberOfHeavyVehicles +"</div><n/>"+
              "<div> number of employees: "+ company.numberOfEmployees +"</div><n/>";

            const infoWindow = new google.maps.InfoWindow({content: contentString});
            this.marker.addListener('click', function () {
              infoWindow.open(this.map, this.marker)
            });
          });
        }
      }
    },
    mounted: function () {
      console.log(this.country);
      this.$http.get('http://localhost:63463/api/company/norway')
        .then(function (response) {
          this.googleMap(response);
        })
    },
  };
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
  .dropDownMenu {
    z-index: 1;
    position: absolute;
    right: 0.5rem;
    top: 1rem;
  }
</style>
