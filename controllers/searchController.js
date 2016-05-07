angular.module("movieApp")
.controller("SearchController", ['$scope', '$routeParams', 'mainService', '$http', '$location', function($scope, $routeParams, mainService, $http, $location){
  $scope.view = {};
    $http.get("http://www.omdbapi.com/?s="+$routeParams.title).then(function(response) {
      $scope.view.movies = response.data.Search;
    })
  $scope.view.singleMovie = function(id){
    $location.path('/movies/' + id);
  }
}])
