import appService from './App.Service.js'


const googleMapsMarkers = {
  getMarkers(countryId){
    appService.getPosts(countryId).then(data => {
      this.markerCoordinates = data;
      console.log(this.markerCoordinates);

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

      })
    }
  };









export default googleMapsMarkers
