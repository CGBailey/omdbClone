angular.module("movieApp")
.controller("SearchController", ['$scope', '$routeParams', 'mainService', "$http", function($scope, $routeParams, mainService, $http){
  $scope.view = {};
  console.log($routeParams)
    $http.get("http://www.omdbapi.com/?s="+$routeParams.title).then(function(response) {
      console.log(response.data)
      $scope.view.movies = response.data.Search;
    })
}])
