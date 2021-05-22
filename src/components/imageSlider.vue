<template>
  <div id="imageslider-container">
    <div class="button-container">
      <div class="button" :class="(Active() === index) ? 'Active' : 'None' " v-for="(cards, index) in calcNumCards" :key="index" @click="Show(index)">
        <p>{{index + 1}}</p>
      </div>
    </div>
    <div class="imageslider">
      <transition-group class="span" name="opacity" tag="div">
        <div class="slide" v-for="image in toBeShown" :key="image.id">
          <img :src="image.imgSrc" :alt="image.alt">
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imageSlider',
  data(){
    return{
      images:[
        {
          id:"1",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"2",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"3",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"4",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"5",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"6",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"7",
          imgSrc:require("../assets/img/random.jpg"),
          alt:""
        }
        ,{
          id:"8",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,{
          id:"9",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,
        {
          id:"10",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,
        {
          id:"11",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
        ,
        {
          id:"12",
          imgSrc:require("../assets/img/bg-image.jpg"),
          alt:""
        }
      ],
      currIndex:6,
      lastIndex:0,
      cardsToShow:6,
      showActive:0
    }
  },
  methods:{
    Show(e){
      //console.log("page" + window.pageYOffset);
      //window.scroll(window.pageYOffset);
      this.showActive = e;
      this.currIndex = (e + 1) * this.cardsToShow;
      this.lastIndex = this.currIndex - this.cardsToShow;
      console.log(e)
    },
    Active(){
      return this.showActive;
    }
  },
  computed:{
    toBeShown(){
      return this.images.slice(this.lastIndex, this.currIndex);
    },
    calcNumCards(){
      return Math.ceil(this.images.length / this.cardsToShow);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style defer scoped>
*, body{
  margin: 0;
  padding: 0;
}
#imageslider-container{
  margin-top: 2vw;
}
.span{
  display:contents;
}
.button-container{
  display: flex;
  justify-content: center;
  margin: 2vw 0;
}
.button {
  text-align: center;
  width: 4vw;
  height: 4vw;
  background-color: #e9598b;
  border: 2px solid #8f0e3b;
  cursor: pointer;
}
.button > p{
  position: relative;
  top: 25%;
  height: 100%;
  font-size: 1.4vw;
}
.imageslider {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-gap: 1vw;
  width: 100%;
  justify-content: center;
}
.slide{
  width: 20vw;
  height: 25vw;  
}

img {
  width: inherit;
  height: inherit;
}

.opacity-enter-active, .opacity-leave-active{
  transition: all 1s ease;
}

.opacity-enter, .opacity-leave-to {
  opacity: 0;
}
.opacity-leave-active {
  display: none;
}
.opacity-enter-to, .opacity-leave{
  transition-delay: 0.5s;
  opacity: 1;
}
.Active {
  background-color: turquoise;
  opacity: 0.8;
}
.button:hover{
  opacity: 0.8;
}
</style>
