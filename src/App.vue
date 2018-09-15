<template>

  <div id="app">
    	
		<nav class="navbar navbar-inverse  mynav">
      <h1>CI<font>CD </font> </h1>

    </nav>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="img\1.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>find the bugs more early.</h5>
        <p>...</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img\3.jpg" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>improve the quality of software</h5>
        <p>...</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="img\2.jpg" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
        <h5>reduce productivity</h5>
        <p>...</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
		<header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
         
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
            <a class="btn btn-light btn-xl js-scroll-trigger" href="#regiest">Regiestration</a>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#login">LOGIN!</a>
          </div>
        </div>
      </div>
    </header>

    <section  id="login" >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading text-white">Login</h2>
            <hr class="light my-4">
            <div class="container" >

<form class="well col-xs-4" action ="php/login.php" method ="GET">
  <div class="form-group">
    
    <input name="name" type="text" placeholder="Username" class="form-control">
  </div>
  <div class="form-group">
    
    <input name ="pass" type="password" placeholder="Password" class="form-control">
  </div>

    <button class="btn btn-litgh btn-block" style="width: 40%; margin-left: 30%;">Login</button>
</form>
</div>
          </div>
        </div>
      </div>
      
    </section>
<br/>
<br/>
    <section >
      <div class="container ">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading" id="regiest">Regiestration</h2>
            <hr class="my-4">
          </div>
        </div>
      </div>
      <div class="container text-center" >

<form class="well col-xs-4" action ='php/reges.php' method ="post">
  <div class="form-group">
    <label>Username</label>
    <input name ="name" type="text" placeholder="Username" class="form-control">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input name = "pass" type="password" placeholder="Password" class="form-control">
  </div>
  <div class="form-group">
    <label>Confirm Password</label>
    <input type="password" placeholder="Re-Enter You Password" class="form-control">

  </div>

  <div class="form-group">
    <label>Email</label>
    <input name ="email" type="email" placeholder="Enter Your Email" class="form-control">
  </div>
  <div class="form-group">
    <label>Phone</label>
    <input name = "phone" type="number" placeholder="Enter YourPhone Number" class="form-control">
  </div>

    <button class="btn btn-primary btn-block" style="width: 40%; margin-left: 30%;">Sign Up</button>
</form>
</div>
    </section>

  
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
html{
  height: auto;
}
img{
  height: 400px;
}
#login{
  position: relative;
  padding-top :100px;
  display: block;
  background :#62ce91;
  height: 400px;
}
#regiestration
{
  padding-bottom: 100px;
}
header {
  background :black;
  height: 210px;
}
</style>
