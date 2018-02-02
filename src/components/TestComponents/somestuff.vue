<template>
<ol>
  <some-text
  v-for="item in truck"
  v-bind="item"
  v-bind:todo="item">
  </some-text>
</ol>
</template>

<script>
  import SomeText from './TextBoxes'
    export default {
        name: "somestuff",
      data(){
        return{
          truck:[
            {id: 0, text: 'saw'},
            {id: 1, text: 'hammer'},
            {id: 2, text: 'nails'}
          ]
        }
      },
        components:{
          SomeText
        }
    }
</script>

<style scoped>

</style>
