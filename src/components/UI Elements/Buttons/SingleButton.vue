<template>
  <input type="image" v-on:click="emit"/>

</template>

<script>
    export default {
        name: "single-button",
      methods:{
          emit: function () {
            this.$emit('event_child')
          }
      }
    }
</script>

<style scoped>

</style>
