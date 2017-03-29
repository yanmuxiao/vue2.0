<template>
  <div id="app">
  
    <router-view></router-view>
    <div class="app-main">

        <div class="app-main-contain">
            <router-view name="aside"></router-view>
            <router-view name="mainContent"></router-view>  
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>



<style>


  .app-main-contain {
      width: 90%;
      margin: 0 auto;
      display: flex;
  }


</style>
