'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function ($scope) {
  $scope.list = ['Arizona', 'Alaska', 'Alabama'];
  $scope.list2 = ['Florida', 'Kansas'];
}]);