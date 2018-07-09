<template>
  <div class="footer">
    <h4>Some domains for sale now!</h4>
    <a class="ft-a" href="//sayabc.app">https://sayabc.app</a>
    <a class="ft-a" href="//yuewen.app">https://yuewen.app</a>
    <a class="ft-a" href="//juejin.app">https://juejin.app</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;

}
.ft-a {
  color: aquamarine;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  margin-left: 30px;
}

</style>
