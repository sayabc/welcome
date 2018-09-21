<template>
  <div id="app">
    <div class="content content_header">
      <div class="c_h_div rot_right"></div>
      <div class="c_h_div rot_mid"></div>
      <div class="c_h_div rot_left">
        <h3>Deyesea</h3>
        <p>每一天都是那么美</p>
      </div>
    </div>
    <div class="content content_main">
      <div class="article_list">
        <router-view/>
      </div>
    </div>
    <div class="content content_footer">
      footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100vw;
  height: 100vh;
  /* background-color:#DBF5F1; */
  color: #000;
}
.content {
  width: 60%;
  margin: 0 auto;
}
.content_header {
  width: 60%;
  margin: 0 auto;
  padding-top: 50px;
}
.c_h_div {
  background-color: #EFEFEF;
  box-shadow: 0px 0px 10px 2px rgba(200,200,200,0.5);
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
}
.rot_mid {
  transform: rotate(-4deg);
  margin-left: 6px;
}
.rot_right {
  transform: rotate(2deg);
  margin-top: 84px;
  margin-bottom: -200px;
  margin-left: 20px;
}
.rot_left {
  margin-top: -200px;
  transform: rotate(-10deg);
  margin-left: -12px;
  height: 260px;
  border-bottom: 3px dashed #22C3AA;
  padding-top: 100px;
}
</style>

