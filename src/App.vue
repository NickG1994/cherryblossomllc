<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import navigation from '@/components/nav.vue';
export default {
  name:'app',
  components: { navigation }

}
</script>


<style>
#app, *  {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#nav a.router-link-exact-active .links-container{
  color: red;
}
</style>
