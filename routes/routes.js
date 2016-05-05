angular.module("porfolioApp")
.config(function($routeProvider){
  $routeProvider
  .when('/movies/:title', {
    template: "<movie-directive></movie-directive>",
    controller: "MovieController"
  })
  .when('/projects', {
    template: "../partials/projects.html",
    contoller: "projectsController"
  })
  .when('/resume', {
    template: "../partials/resume.html",
    controller: "resumeController"
  })
})
