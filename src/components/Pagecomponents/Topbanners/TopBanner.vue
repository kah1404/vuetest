<template>
  <div class="page">
    <abax-logo class="abaxIcon" />
    <single-button class="Settings" v-bind:src="cog" v-on:event_child="eventChild"/>
    <app-window id="menu" />

  </div>
</template>

<script>
  import AbaxLogo from '../../UI Elements/Logo/AbaxLogo'
  import SingleButton from '../../UI Elements/Buttons/SingleButton'
  import AppWindow from '../../Pagecomponents/Appwindows/AppWindow'
    export default {
      components: {
        AbaxLogo,
        SingleButton,
        AppWindow
      },
      name: "top-banner",
      data() {
        return {
          buttonText: "Click",
          cog: "./static/cog.png"
        }
      },
      methods: {
        eventChild: function () {
          var x = document.getElementById("menu");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
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
    top: 7rem;
    left: 10rem;
    width: 50px;
    opacity: 100;
  }
  .abaxIcon{
    z-index: 1;
    position: absolute;
    top: 8px;
    left: 5px;
    user-select: none;
    width: 150px;
  }
</style>
