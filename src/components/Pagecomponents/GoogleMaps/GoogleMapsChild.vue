<template>
    <div v-on:click="emit"></div>
</template>

<script>
    export default {
        name: "google-maps-child",
      methods:{
          emit: function () {
            this.$emit('childMap')
          }
      }
    }
</script>

<style scoped>

</style>
