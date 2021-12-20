<template>
  <div class="text-button">
      <button>{{msg}}</button>
    
  </div>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin: 2px;
  min-height: 30px;
  min-width: 70px;
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
