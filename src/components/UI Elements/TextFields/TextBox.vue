<template>
  <div>{{someText.text}}<input type="checkbox"/></div>
</template>

<script>
    export default {
        name: "text-box",
        props: ['someText']
    }
</script>

<style scoped>

</style>
