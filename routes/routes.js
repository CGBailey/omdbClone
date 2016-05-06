angular.module("movieApp")
.config(function($routeProvider){
  $routeProvider
  .when('/movies/:id', {
    template: "<movie-directive></movie-directive>",
    controller: "MovieController"
  })
  .when('/search/:title', {
    template: "<search-directive></search-directive>",
    contoller: "SearchController"
  })
})
