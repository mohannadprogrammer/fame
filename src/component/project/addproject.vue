<template>

  <div id="addProject">
      <!-- Modal -->
<div class="modal fade" id="addprojectModal" tabindex="-1" role="dialog" aria-labelledby="addprojectModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="addprojectModalLabel">Add new project </h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form  action ="php/login.php" method ="GET">
  <div class="form-group">
    <label>project name :</label>
    <input name="name" type="text" placeholder="project name" class="form-control" >
  </div>
  <div class="form-group">
    <label>github URL :</label>
    <input name ="url" type="text" placeholder="link :D" class="form-control">
  </div>
   <div class="form-group">
    <label for="exampleFormControlTextarea1">Description </label>
    <textarea class="form-control" rows="3"></textarea>
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


         <button  type="button" class="add btn btn-success" data-toggle="modal" data-target="#addprojectModal">
            <span class ="glyphicon glyphicon-plus" ></span>
            
      </button>
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