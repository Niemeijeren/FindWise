<template>
  <div class="hello">
    <p>Parent</p>
    <input v-model="message" />
    <p>Child</p>
    <TextButton v-bind:msg="message" icon="menu-icon">
    </TextButton>
    
  </div>
</template>

<script>
import TextButton from './text-button/TextButton.vue'

export default {
  name: 'HelloWorld',
  components: {
    TextButton,
  },
  props: {
    message: String,
    icon: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
