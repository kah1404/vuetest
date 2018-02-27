<template>
  <div class="page">
    <svgicon icon="logo_turqouise" class="svgIcon" :original="true" ></svgicon>
    <app-window id="menu" />



    <google-maps v-bind:source="source" v-bind:country="this.$store.state.name"/>
  </div>
</template>

<script>
  import AbaxLogo from '../../UI Elements/Logo/AbaxLogo'
  import SingleButton from '../../UI Elements/Buttons/SingleButton'
  import AppWindow from '../../Pagecomponents/Appwindows/AppWindow'
  import GoogleMaps from '../../Pagecomponents/GoogleMaps/GoogleMapsNorway'
  import '../../../compiled-icons/logo_turqouise'

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
        }
      },
      methods: {

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
  .svgIcon{
    z-index: 1;
    position: absolute;
    left: 0.5rem;
    user-select: none;
    width: 150px;
  }

</style>
