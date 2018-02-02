<template>
  <div class="container">
    <div class="grid-container">
      <text-box class="text"
      v-for="text in textField"
      v-bind="text"
      v-bind:someText="text">
      </text-box>
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
          textField: [
            {text: "Show prospects"},
            {text: "Show app leads"},
          ]
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
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 35rem;
  background-color: #00B3BD;
  display: none;
}
.grid-container{
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  border: 1px solid black;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  text-align: center;
  font-size: 15px;
}
</style>
