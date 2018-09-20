<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>

    <ul class="item_container">
      <li class="item" v-for="(item,index) in pageList" :key="index">
        {{item.title}}
      </li>
    </ul>

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Footer from './common/Footer'
import pageList from './detail/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      pageList: pageList
    }
  },
  components: {
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.hello {
  padding-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
.title {
  margin-bottom: 40px;
}
.item_container {
  margin: auto 24%;
}
ul {
  list-style-type: none
}
.item {
  text-align: left;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.item:hover {
  /* border: 1px solid green; */
  border-radius: 6px;
  background: rgba(255, 255, 255, .1);
  transition: .3s;
}

</style>
