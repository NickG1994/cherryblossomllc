<template>
  <div id="nav">
    <div class="nav-container">
      <div class="left-nav">
        <img src="../assets/icons/logo.svg" alt="Logo"><p>Cherry Blossoms Creations</p>
      </div>
      <div class="right-nav-container">
        <div class="right-nav-content" v-for="link in links" :key="link.id">
          <span class="img-container"> <img :class="(link.id === 1) ? 'link-img' : 'nothing'" :src="link.img" alt=""> </span>
          <span class="links-container"><router-link :to="link.path">{{ link.title }}</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navgation',
  data(){
    return{
      links: [
        {
          id:1,
          title: "Home",
          path: "/",
          img: require('../assets/icons/Home.svg')
        }
        ,
        {
          id:2,
          title: "Products",
          path: "/Products",
          img: require('../assets/icons/shop.svg')
        }
        ,
        {
          id:3,
          title: "Gallary",
          path: "/gallery",
          img: require('../assets/icons/Gallery.svg')
        }
        ,
        {
          id:4,
          title: "About",
          path: "/about",
          img: require('../assets/icons/About.svg')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/nav.css"></style>
