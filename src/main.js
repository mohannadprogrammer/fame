import Vue from 'vue'
import App from './App.vue'
import Project from './project.vue'

var app =new Vue({
  el: '#app',
  render: h => h(App)
});

var project =new Vue({
  el: '#project',
  render: h => h(Project)
});
