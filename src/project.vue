<template>

  <div id="project">
      <nav class="navbar navbar-inverse  mynav">
      
      <h1>CI<font>CD </font> </h1>
      
    </nav>
    <allproject></allproject>
    
  </div>
</template>

<script>
import allproject from "./component/project/allproject.vue";

export default {
  components:{
      "allproject":allproject
      
  },
  name :'project',
  data () {
    return {
        
    }
  }
}
</script>

<style>

</style>