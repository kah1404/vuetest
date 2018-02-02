<template>
<div v-bind:id="mapName"></div>
</template>

<script>
  export default {
    name: 'googleMapsNorway',
    props: ['country'],
    data: function () {
      return {
        mapName:  "-map",
        markerCoordinates: [],
      }
    },
    mounted: function () {
      //this.$http.get('http://localhost:52796/api/coordinates')
      console.log(this.country);
      this.$http.get('http://localhost:63463/api?country=' + this.country)
        .then(function (response) {
          for(var i = 0; i < response.data.length; i++){
            var leads = response.data[i];

            this.markerCoordinates.push({
              latitude: parseFloat(leads.lat),
              longitude: parseFloat(leads.lng),
              orgnr: leads.orgnr,
              name: leads.Navn,
              mailingAddress: leads.postadresse,
            });
          }
          const element = document.getElementById(this.mapName);
          const mapCentre = this.markerCoordinates[0];
          const options = {
            center: new google.maps.LatLng(59.051804, 10.018234),
            zoom: 10,
            disableDefaultUI: true
          };

          const map = new google.maps.Map(element, options);
          this.markerCoordinates.forEach((company) => {
            const position = new google.maps.LatLng(company.latitude, company.longitude);
            const marker = new google.maps.Marker({position,map});

            const contentString =
              "<div> Name: " + company.name + "</div> <n/>" +
              "<div> Orgnr: "+  company.orgnr + "</div><n/>"       +
              "<div> Mailing address: "+ company.mailingAddress +"</div>"

            ;


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
div{
    text-align: justify;
}
</style>
