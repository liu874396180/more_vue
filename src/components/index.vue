<template>
  <div class="hello">
     index 页面
     <hr>
     <p>引入子组件</p>
     <other></other>
     <router-link to="./other">去other组件</router-link>
  </div>
</template>

<script>
import other from './other'
export default {
  name: 'index',
  components:{
    other
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
