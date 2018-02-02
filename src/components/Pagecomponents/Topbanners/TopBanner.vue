<template>
  <div class="page">
    <abax-logo class="abaxIcon" />
    <single-button class="Settings" v-bind:src="cog" v-on:eventChildButton="eventChildAppWindow"/>
    <app-window id="menu" />

    <select class="dropDownMenu" @change="this.showCountry">
      <option value="norway" selected="selected">Norway</option>
      <option value="sweden">Sweden</option>
    </select>



  <div id="googleMap">
    <google-maps-norway v-bind:country="country" class="googleMaps"/>
  </div>
  </div>
</template>

<script>
  import AbaxLogo from '../../UI Elements/Logo/AbaxLogo'
  import SingleButton from '../../UI Elements/Buttons/SingleButton'
  import AppWindow from '../../Pagecomponents/Appwindows/AppWindow'
  import GoogleMapsNorway from '../../Pagecomponents/GoogleMaps/GoogleMapsNorway'

    export default {
      components: {
        AbaxLogo,
        SingleButton,
        AppWindow,
        GoogleMapsNorway
      },
      name: "top-banner",
      data() {
        return {
          buttonText: "Click",
          cog: "./static/cog.png",
          country: "norway"
        }
      },
      methods: {
        eventChildAppWindow: function () {
          const x = document.getElementById("menu");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        },
        showCountry: function () {
            let div = document.getElementById('googleMap');
            let select = document.getElementById('dropDownMenu');
            let c = select.options[select.selectedIndex].value;
            alert('wee')
            let html = '<google-maps-norway country="'+ c +'" class="googleMaps"/>';
            console.log(html);
            div.innerHTML = html;
        }
      }
  }
</script>

<style scoped>
  .page{
    width: 100%;
    height: 100%;
  }
  .Settings{
    z-index: 1;
    position: absolute;
    top: 6rem;
    left: 10rem;
    width: 50px;
    opacity: 100;
  }
  .abaxIcon{
    z-index: 1;
    position: absolute;
    left: 0.5rem;
    user-select: none;
    width: 150px;
  }
  .dropDownMenu{
    z-index: 1;
    position: absolute;
    right: 0.5rem;
  }
  .googleMaps{
    width: 100%;
    height: 100vh;
    margin: 0;
    background: gray;
  }
</style>
