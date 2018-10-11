<template>

  <div id="addTestBlock">
      
    <!-- button that use to show the modal -->
      <button  type="button" class="add btn btn-success" data-toggle="modal" data-target="#exampleModal">
            <span class ="glyphicon glyphicon-plus" ></span>
      </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Add new Testblock </h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form  action ="php/login.php" method ="GET">
  <div class="form-group">
    <label>test block ID :</label>
    <input name="name" type="text" placeholder="project name" class="form-control" >
  </div>
  <div class="form-group">
    <label>build files :</label>
    <div class ="holder">
      <div class ="item btn-primary">
        m.java
        <span class ="glyphicon glyphicon-remove" ></span>
      </div>
      <div class ="item btn-primary">
        m.java
        <span class ="glyphicon glyphicon-remove" ></span>
      </div>
      <div class ="item btn-primary">
        m.java
        <span class ="glyphicon glyphicon-remove" ></span>
      </div>
      <div class ="item btn-primary">
        m.java
        <span class ="glyphicon glyphicon-remove" ></span>
      </div>
    </div>
    <div >

    </div>
  </div>
  <div class="form-group">
    <label>run class :</label>
    <div class="holder">
      <div class ="item btn-primary">
        m.java
        <span class ="glyphicon glyphicon-remove" ></span>
      </div>
    </div>
  </div>



  
<div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" >Add</button>
      </div>
</form>
      </div>
      
    </div>
  </div>
</div>
<!-- end of the model-->

  </div>
</template>

<script>
export default {

  data () {
    
  }
}
</script>

<style>

</style>