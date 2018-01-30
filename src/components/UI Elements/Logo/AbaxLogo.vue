<template>
<img v-bind:src="this.picture">
</template>

<script>
    export default {
        name: "abax-logo",
      data(){
          return {
            picture: ('/static/AbaxLogo.PNG')
          }
      }

    }
</script>

<style scoped>

</style>
