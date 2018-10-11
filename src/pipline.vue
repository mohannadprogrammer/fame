<template>

  <div id="pipline">
      <nav class="navbar navbar-inverse  mynav">
      
      <h1>CI<font>CD </font> </h1>
      
    </nav>
   <add></add>
  </div>
</template>

<script>
import add from "./component/pipline/addTestBlock.vue";
export default {
  components:{
      "add":add
  },
  name :'pipline',
  data () {
    return {
        
    }
  }
}
</script>

<style>

</style>