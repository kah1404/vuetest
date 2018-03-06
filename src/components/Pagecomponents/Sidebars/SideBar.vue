<template>
  <div class="sideBar">
    <div class="innerSideBar" ></div>
  </div>
</template>

<script>
    export default {
        name: "side-bar"
    }
</script>

<style scoped>
.sideBar{
  position: relative;
  background-color: #1ABEC4;
  z-index: 1;
  width: 10rem;
  height: 100vh;
}
.innerSideBar{
  background-color: black;
  position: relative;
  width: 50px;
  height: 100vh;
  left: 8rem;

}
</style>
