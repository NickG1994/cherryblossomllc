<template>
  <div id="Splash">
    <div class="splash-container">
      <img class="img-load" src="../../public/icon.svg" alt="icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style defer scoped>
  .splash-container{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  background-color: black;
  width: 100%;
  height: 100%;
  }
  .img-load {
    width: 12vw;
    height: 12vw;
    animation-name: rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }
  @keyframes rotate {
    to{
      transform: rotate(360deg);
    }
  }
</style>
