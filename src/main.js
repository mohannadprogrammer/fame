import Vue from 'vue'
import App from './App.vue'
import Project from './project.vue'
import Pipline from './pipline.vue'

var app =new Vue({
  el: '#app',
  render: h => h(App)
});

var project =new Vue({
  el: '#project',
  render: h => h(Project)
});
var project =new Vue({
  el: '#pipline',
  render: h => h(Pipline)
});