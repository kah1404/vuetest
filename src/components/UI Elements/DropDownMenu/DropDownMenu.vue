<template>
  <div>
    <b-dropdown style="background-color: #00B3BD" id="ddown1" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item style="background-color: #00B3BD">Norway</b-dropdown-item>
      <b-dropdown-item style="background-color: #00B3BD">Sweden</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
    export default {
        name: "drop-down-menu",
      props: ['menuOptions']
    }
</script>

<style  scoped>
.dropDown{
  background-color:#00B3BD ;
}
</style>
