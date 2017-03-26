<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view v-bind:items="books" class="moduleCls"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      books : [
          { name : 'book1' , price : '120' },
          { name : 'book2' , price : '120' },
          { name : 'book3' , price : '120' }
      ],
      moduleCls: 'moduleCls'
    }
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
