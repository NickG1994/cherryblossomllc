<template>
  <b-container fluid id="main-container">
    <b-container fluid class="hero-container">
      <img id="cherry-img-1" class="cherry-img" src="../assets/img/cherry_1.svg" alt="cherry blossom">

      <b-container class="inner-hero-container">
        <b-container id="text-container" class="text-container-left">
          <h1>Cherry Blossoms Creations</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a nunc commodo ligula pretium efficitur quis id nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
          <a class="btn contact" href="https://www.google.com/">Contact</a>
        </b-container>
      </b-container>

      <div class="wrapper">
        <div class="button">
          <div class="icon"><img src="../assets/icons/facebook.svg" alt="FaceBook Link"></div>
          <span class="span"> <a href="">Facebook</a></span>
        </div>
        <div class="button">
          <div class="icon"><img src="../assets/icons/instagram.svg" alt="FaceBook Link"></div>
          <span class="span"> <a href="Instagram">Instagram</a> </span>
        </div>
        <div class="button">
          <div class="icon"><img src="../assets/icons/youtube.svg" alt="FaceBook Link"></div>
          <span class="span"> <a href="">YouTube</a></span>
        </div>
      </div>
    </b-container>
    <div class="section-2">
      <div class="section-2-main-container">
        <h2>Amazing Art</h2>
        <div class="line"></div>
        <p>A wide array of distinct and creative homepages is at your disposal. Make your choice and quickly set up a beautiful looking website. </p>
        <imageSliderComponent></imageSliderComponent>
      </div>
    </div>
    <div class="section-3">
      <div class="section-3-main-container">
        <h5>Designed With The Utmost Care</h5>
        <h4>Create The Easy Way </h4>
        <p>With a powerful drag-and-drop page builder, stunning templates, 
          and a collection of intuitive options, Creator lets you handcraft 
          your website without having to know a single line of code.
        </p>
        <button>Launch Me</button>
      </div>
    </div>

    <div class="section-4">
      <div class="section-4-main-container">
        <div class="section-4-left">
          <div class="section-4-grid" >

            <div class="item-wrapper item-1">

              <img src="../assets/img/bg-image.jpg" alt="">
              <div class="section-4-left-text-container">
                <h3>Light Up Your Home </h3>
                <h5>Morbi ac mollis nisl. Maecenas enim magna, congue eget auctor vitae</h5>
                <button>Gallery</button>
              </div>

            </div>

            <div class="flip item-wrapper item-2">
              <img src="../assets/img/bg-image.jpg" alt="">
              <div  class="section-4-left-text-container">
                <h3>Variety of Designs to choose from </h3>
                <h5>Morbi ac mollis nisl. Maecenas enim magna, congue eget auctor vitae</h5>
                <button>Gallery</button>
              </div>
            </div>

            <div class="item-wrapper item-3">
              <img src="../assets/img/bg-image.jpg" alt="">
              <div class="section-4-left-text-container">
                <h3>What we Do? </h3>
                <h5>Morbi ac mollis nisl. Maecenas enim magna, congue eget auctor vitae</h5>
                <button>Gallery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
      <div class="section-5-main-container">

        <div class="section-5-left-container">
          <h3>Our Tools and skills</h3>
          <div class="line"></div>
          <p>Proin a egestas orci. Nam convallis lectus nec nulla interdum, aliquet auctor elit sodales. Aenean maximus augue pulvinar ex maximus maximus. Nam volutpat ipsum ipsum, ac maximus nibh semper ut</p>
        </div>

        <div class="section-5-right-container">

          <div class="line-container">
            <div class="line-wrapper">
              <div class="line-wrapper-text">
                <h4>Photoshop</h4>
                <h5>60%</h5>
              </div>
              <div class="section-5-line">
                <div class="line-fill"></div>
              </div>
            </div>

          </div>
          
          <div class=" top-bottom-margin line-container">
            <div class="line-wrapper">
              <div class="line-wrapper-text">
                <h4>Photoshop</h4>
                <h5>60%</h5>
              </div>
              <div class="section-5-line">
                <div class="line-fill"></div>
              </div>
            </div>

          </div>

          <div class="line-container">
            <div class="line-wrapper">
              <div class="line-wrapper-text">
                <h4>Photoshop</h4>
                <h5>60%</h5>
              </div>
              <div class="section-5-line">
                <div class="line-fill"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import imageSliderComponent from "@/components/imageSlider.vue";
export default {
  name: 'Home',
  components:{imageSliderComponent}
}
</script>

<style src="../assets/home.css"></style>
