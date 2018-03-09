<template>
  <input type="button" v-on:click="emit"/>

</template>

<script>
    export default {
        name: "single-button",
      methods:{
          emit: function () {
            this.$emit('eventChildButton')
          }
      }
    }
</script>

<style scoped>

</style>
