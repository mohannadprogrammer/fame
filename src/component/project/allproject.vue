<template>

  <div id="allproject">
      <div class="container">
      <h1>your projects :</h1>

      <div class="row">
        
        <div v-for="(project,index) of projects" class ="col-lg-3 col-md-6 col-sm-6" href="pipeline.html"  >
          <div class ="project-box text-center">
            <h4>{{project.name}}</h4>
              <svg class="radial-progress" data-percentage="0" viewBox="0 0 80 80">
                  <circle class="incomplete" cx="40" cy="40" r="35"></circle>
                  <circle class="complete" v-bind:class="bindColor" cx="40" cy="40" r="35" :style="project.cicle"></circle>
                  <text class="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">{{project.compeleteness}}%</text>
              </svg> 
              <hr>
              <h3>description:</h3>
              <p>{{project.description}}</p>
          </div>

        </div>
        </div>    
    </div>
  </div>
</template>

<script>

var projs =[
    {
        name :"calculator System",
        description :"system do the main math process",
        compeleteness:90,
        cicle:"stroke-dashoffset:"+21.9
    }
    ,
    {
        name :"school grade System",
        description :"system do the main math process",
        compeleteness:80,
        cicle:"stroke-dashoffset:"+((100-80)/100)*219
    },
    {
        name :"calculator System",
        description :"system do the main math process",
        compeleteness:50,
        cicle:"stroke-dashoffset:"+((100-50)/100)*219
    },
    {
        name :"calculator System",
        description :"system do the main math process",
        compeleteness:25,
        cicle:"stroke-dashoffset:"+((100-25)/100)*219
    }
];
export default {
  name :"allproject",
  data () {
    return {
        projects :projs,
        low:true,
        medium:false,
        high:true,
        very_high:false,
    }
  },
  methods :{
      Display_percentage(){
            var temp =this.compeltness; 
            temp=100-temp;
            return (temp/100)*219; 
        },
    setColor(index){
        if (projects[index].compeleteness>=90){
            this.very_high = true;
            this.low=false;
            this.medium=false;
            this.high=false;
        }
        if(projects[index].compeleteness>=70) {
            this.high=true;
            this.very_high = false;
            this.low=false;
            this.medium=false;
        }
        if (projects[index].compeleteness>=40){
            this.medium=true;
            this.very_high = false;
            this.low=false;
            this.high=false;
        }
        if (projects[index].compeleteness>=40){
            this.medium=true;
            this.very_high = false;
            this.low=false;
            this.high=false;
        }
    },
    setForALL(){
        for (var i =0 ;i<=this.projects.length;i++){
            setColor
        }
    }
  },
  computed:{
      bindColor(){
          return {
              low:this.low,
              medium:this.medium,
              high:this.high,
              very_high:this.very_high
          }
      }
  }
}
</script>

<style>
.low{
    stroke: red;

}
.medium{
    stroke:yellow;
    
}
.high{
    stroke:orange;
}
.very_high{
    stroke: green;
}
</style>