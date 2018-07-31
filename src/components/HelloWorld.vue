<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>

    <ul class="item_container">
      <li class="item" v-for="(item,index) in pageList" :key="index">
        {{item.title}}
      </li>
    </ul>

    <Footer />
  </div>
</template>

<script>
import Footer from './common/Footer'
import pageList from './detail/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to deyesea.com!',
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
h1, h2 {
  font-weight: normal;
}
.title {
  margin-bottom: 40px;
}
.item_container {
  margin: auto 20px;
}
ul {
  list-style-type: none
}
.item {
  border: 1px solid gray;
  text-align: left;
  padding: 6px 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

</style>
