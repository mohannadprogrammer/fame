<template>

  <div id="pipline">
      <nav class="navbar navbar-inverse  mynav">
      
      <h1>CI<font>CD </font> </h1>
      
    </nav>
    <allpipline></allpipline>
   <add></add>
   <reportModal></reportModal>

  </div>
</template>

<script>
import add from "./component/pipline/addTestBlock.vue";
import allpipline from "./component/pipline/allpipline.vue";

import reportModal from "./component/pipline/showReportDetials.vue";

export default {
  components:{
      "add":add,
      "allpipline":allpipline,
      "reportModal":reportModal
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