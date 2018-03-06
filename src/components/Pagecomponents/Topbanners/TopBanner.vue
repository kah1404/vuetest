<template>
  <div>
    <svgicon icon="logo_turqouise" class="svgIcon" :original="true"  ></svgicon>
    <svgicon icon="ProspectorLogo" class="logo" color="black"  ></svgicon>

    <app-window />

  </div>
</template>

<script>
  import AbaxLogo from '../../UI Elements/Logo/AbaxLogo'
  import SingleButton from '../../UI Elements/Buttons/SingleButton'
  import AppWindow from '../../Pagecomponents/Appwindows/AppWindow'
  import '../../../compiled-icons/logo_turqouise'

    export default {
      components: {
        AbaxLogo,
        SingleButton,
        AppWindow

      },
      name: "top-banner",
      data() {
        return {
        }
      },
      methods: {
          clicked: function () {
            let count = this.$store.state.count;

            this.$store.commit('increase');

            console.log(count);

            if(count>= 10){
              this.$store.commit('resetCount', 0);
              console.log(this.$store.state.count);
            }

          }
      },
      mounted: function(){

      }
  }
</script>

<style scoped>
  .svgIcon{
    z-index: 2;
    position: absolute;
    left: 0.6rem;
    width: 135px;
  }
  .logo{
    position: absolute;
    z-index: 3;
    top: 0.5rem;
    left: 40rem;
    user-select: none;
    width: 200px;
  }
</style>
