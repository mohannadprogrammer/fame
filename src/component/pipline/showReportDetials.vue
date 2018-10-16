<template>

  <div id="reportDet">
      <div class="modal fade" id="reportDetials" tabindex="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">report Detials</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action ='php/reges.php' method ="post">
            <div class="form-group row">
                <h3 for="staticEmail" class="col-sm-6 col-form-label">TestBlock ID :</h3>
                <div class="col-sm-6">
                    <input type="text" readonly class="form-control-plaintext" value="start_Testblock">
                </div>
            </div>

            <div class="form-group ">
                <h3 class=" col-form-label">Build Class :</h3>
            <table class="table">
                    <thead>
                        <tr class ="table-primary">
                        <th scope="col">class name </th>
                        <th scope="col">report </th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                    </tr>
                </tbody>
            </table>
            </div>

            <div class="form-group ">
                <h3 class=" col-form-label">run Class :</h3>
            <table class="table">
                    <thead>
                        <tr class ="table-primary">
                        <th scope="col">class name </th>
                        <th scope="col">report </th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                    </tr>
                </tbody>
            </table>
            </div>

  
        </form>


      </div>


    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>

      
      
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {}
};
</script>

<style>
</style>