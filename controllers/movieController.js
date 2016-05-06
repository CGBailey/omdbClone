angular.module("movieApp")
.controller("MovieController", ['$scope', '$routeParams', 'mainService', function($scope, $routeParams, mainService){
        $scope.view.movie = {};
        console.log($routeParams)
          $http.get("http://www.omdbapi.com/?i="+$routeParams.id).then(function(response) {
            $scope.view.movie = response.data;
          })

}])
