<template>

  <div id="piplines">
     <div class="container">
     <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">pipeline</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Report</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" id="delivary-tab" data-toggle="tab" href="#delivary" role="tab" aria-controls="delivary" aria-selected="false">delivary</a>
  </li>
  
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane  active" id="home" role="tabpanel" aria-labelledby="home-tab">
    
    <!-- pipeline div  -->
    <table class="table table-bordered ">
      <thead>
        <tr class ="table-success">
          <th scope="col">#</th>
          <th scope="col">TestBlock ID</th>
          <th scope="col">TestBlock Tregar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>start_Testblock</td>
          <td>null</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>test_sum</td>
          <td>start_Testblock</td>
        </tr>
      
      </tbody>
    </table>

  </div>
  <div class="tab-pane " id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <table class="table table-bordered ">
      <thead>
        <tr class ="table-success">
          <th scope="col">#</th>
          <th scope="col">testBlock_ID</th>
          <th scope="col">Run_Date</th>
          <th scope="col">Commit_ID</th>
        </tr>
      </thead>
      <tbody>
        <tr data-toggle="modal" data-target="#reportDetials">
          <th scope="row">1</th>
          <td>start_Testblock</td>
          <td>18/9/2018</td>
          <td>ab0783a</td>
        </tr>
        <tr >
          <th scope="row">2</th>
          <td>test_sum</td>
          <td>18/9/2018</td>
          <td>fa0a542</td>
        </tr>
      
        <tr>
          <th scope="row">3</th>
          <td>start_Testblock</td>
          <td>18/9/2018</td>
          <td>a54293a</td>
        </tr>
      </tbody>
    </table>

  </div>
  <div class="tab-pane " id="delivary" role="tabpanel" aria-labelledby="profile-tab">
    <table class="table table-bordered ">
      <thead>
        <tr class ="table-success">
          <th scope="col">#</th>
          <th scope="col">Run_Date</th>
          <th scope="col">Download Docker file</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><a href="">calculator.docker</a></td>
          <td>18/9/2018</td>
        </tr>
        <tr >
          <th scope="row">2</th>
          <td><a href="">calculator.docker</a></td>
          <td>18/9/2018</td>
        </tr>
      
        <tr>
          <th scope="row">3</th>
          <td><a href="">calculator.docker</a></td>
          <td>18/9/2018</td>
        </tr>
      </tbody>
    </table>

  </div>
</div>
     

    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    
  },
  methods:{
      m (){
          alert("a;lsdf;l asdd");
      }
  }
}
</script>

<style>

</style>