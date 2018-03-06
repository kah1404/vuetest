<template>


  <label class="container">{{someText.text}}
    <input type="checkbox" >
    <span class="checkmark"></span>
  </label>
</template>

<script>
    export default {
        name: "text-box-with-check-box",
        props: ['someText']
    }
</script>

<style scoped>
  .container{
    display: block;
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .container:hover input ~ .checkmark {
    background-color: #14B8BE;
  }
  .container input:checked ~ .checkmark {
    background-color: #14B8BE;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  .container .checkmark:after {
    left: 5px;
    top: 2px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .checkmark{
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #eee;
  }
</style>
