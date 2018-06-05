<template>
  <div>
    <h1>{{ appName }}</h1>
    <h2>Lucy Zhang &#9961; Bill Yu</h2>
  </div>
</template>

<script>
const { appName } = require('../config')

export default {
  name: 'Home',
  data () {
    return {
      appName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
