<template>
  <div class="container">
    <div class="grid-container">
      <text-box class="text" v-text="this.text1"></text-box>
      <check-box class="text"></check-box>
      <text-box class="text" v-text="this.text2"></text-box>
      <check-box class="text"></check-box>
    </div>

  </div>
</template>

<script>
  import CheckBox from '../../UI Elements/CheckBoxes/CheckBox'
  import TextBox from '../../UI Elements/TextFields/TextBox'
    export default {
        name: "app-window",
      data() {
        return {
          text1: 'Option1',
          text2: 'Option2'
        }
      },
      components:{
        CheckBox,
        TextBox
      }


  }
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-container{
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 1;
}
.text{
  color: #000;

}
</style>
