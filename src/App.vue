<template>
  <div id="app">
    <splash v-if="show"/>
      <navigation></navigation>
      <router-view/>
  </div>
</template>

<script>
import splash from '@/components/Splash.vue';
import navigation from '@/components/nav.vue';
export default {
  name:'app',
  components: { navigation,  splash},
  data(){
    return {
      show: true
    }
  },  
  methods:{
        display(){
          let nav = document.getElementById("nav");
          let textContainer = document.getElementById("text-container");
          let cherryImg = document.getElementById("cherry-img-1");
          document.onreadystatechange = () => {
            if(document.readyState == "complete"){
              setTimeout(() => {
                this.show = false;   
                nav.style.animationName = "nav-width";
                textContainer.style.animationName = "fade-in";
                cherryImg.style.animationName = "fade-in";
              }, 2000);
            }
          }
        }
      },
      mounted(){
        this.display();
      }
      
}
</script>


<style>
/* Animations */
/* Nav Animations */
@keyframes nav-width {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
/* Hero Animations */
@keyframes fade-in {
  from {opacity: 0;}
  to {opacity: 1;}
}
/* End Animations */
</style>
