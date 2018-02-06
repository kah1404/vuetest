<template>
  <div class="page">
    <abax-logo class="abaxIcon" />
    <single-button class="Settings" v-bind:src="cog" v-on:eventChildButton="eventChildAppWindow"/>
    <app-window id="menu" />


    <select id="dropDownMenu" class="dropDownMenu" v-on:change="this.showCountry">
      <option value="norway">Norway</option>
      <option value="sweden">Sweden</option>
    </select>


  <div id="googleMap">
    <google-maps v-bind:country="country"/>
  </div>
  </div>
</template>

<script>
  import AbaxLogo from '../../UI Elements/Logo/AbaxLogo'
  import SingleButton from '../../UI Elements/Buttons/SingleButton'
  import AppWindow from '../../Pagecomponents/Appwindows/AppWindow'
  import GoogleMaps from '../../Pagecomponents/GoogleMaps/GoogleMaps'

    export default {
      components: {
        AbaxLogo,
        SingleButton,
        AppWindow,
        GoogleMaps,
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
            console.log(c);
            div.innerHTML = '<google-maps-norway country="'+c+'"/>'
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

</style>
