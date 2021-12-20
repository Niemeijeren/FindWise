<template>
  <div class="text-button">
    <md-button class="md-raised md-primary">
        <component :is="icon1" class="icon" />
        <p style="display:inline">{{msg}}</p>
        <component :is="icon2" class="icon" />
    </md-button>

  </div>
</template>

<script>

export default {
  name: 'TextButton',
  props: {
    msg: String,
    icon1: String,
    icon2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: 2px;
  padding: auto;
  min-height: 40px;
  min-width: 100px;
  vertical-align: top;
}
.icon {
    padding: 0;
    width: 24px;
    height: 24px;
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
