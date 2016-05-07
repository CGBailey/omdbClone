angular.module("movieApp")
.controller("MovieController", ['$scope', '$routeParams', '$http', 'mainService', function($scope, $routeParams, $http, mainService){
        console.log("controller")
        $scope.view = {};
        $scope.view.movie = {};
        console.log($routeParams.id);
          $http.get("http://www.omdbapi.com/?i="+$routeParams.id).then(function(response) {
            $scope.view.movie = response.data;
            console.log($scope.view.movie);
          })

}])
