<template>
  <div class="text-button">
    <md-button class="md-raised md-primary">
        {{msg}}
        <component :is="icon" />
    </md-button>

  </div>
</template>

<script>

export default {
  name: 'TextButton',
  props: {
    msg: String,
    icon: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: 2px;
  min-height: 40px;
  min-width: 100px;
  justify-content: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
