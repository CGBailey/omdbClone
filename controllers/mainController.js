angular.module('movieApp')
.controller("MainController", ['$scope', 'mainService','$location', function($scope,mainService,$location){
  $scope.view = {};
  $scope.view.test = "TEST!!!";
  $scope.view.search = "Search!!!";

  $scope.changeLocation = function(searchTerm){
    console.log(searchTerm);
    $location.path('/search/' + searchTerm);
  }

}])
