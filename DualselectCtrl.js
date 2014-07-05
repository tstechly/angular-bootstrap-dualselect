'use strict';

angular.module('tstechly.angular-bootstrap-dualselect').controller('DualselectCtrl', ['$scope', function ($scope) {
  $scope.selectedItems = [];
  $scope.allItems = [];
  $scope.fSelectedItems = $scope.selectedItems.slice(0);
  $scope.fAllItems = $scope.allItems.slice(0);
  $scope.select1Model = [];
  $scope.select2Model = [];
  $scope.filter1 = "";
  $scope.filter2 = "";
  $scope.isFiltering1 = false;
  $scope.isFiltering2 = false;


  $scope.showAll1 = function () {
    $scope.filter1 = "";
  };

  $scope.showAll2 = function () {
    $scope.filter2 = "";
  };

  $scope.$watch('filter1', function (filter) {
    $scope.fAllItems = $scope.allItems.filter(function (arrayElement) {
      return arrayElement.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
    $scope.fAllItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    $scope.isFiltering1 = ($scope.fAllItems.length != $scope.allItems.length);
  });

  $scope.$watch('filter2', function (filter) {
    $scope.fSelectedItems = $scope.selectedItems.filter(function (arrayElement) {
      return arrayElement.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
    $scope.fSelectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    $scope.isFiltering2 = ($scope.fSelectedItems.length != $scope.selectedItems.length);
  });

  $scope.add = function () {
    angular.forEach($scope.allItems, function (name, idx) {
      if (name == $scope.select1Model) {
        $scope.selectedItems.push(name);
        $scope.fSelectedItems.push(name);
        $scope.allItems.splice(idx, 1);
        $scope.fAllItems.splice(idx, 1);
      }
    });
    $scope.selectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    $scope.fSelectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
  }

  $scope.remove = function () {
    angular.forEach($scope.selectedItems, function (name, idx) {
      if (name == $scope.select2Model) {
        $scope.allItems.push(name);
        $scope.fAllItems.push(name);
        $scope.selectedItems.splice(idx, 1);
        $scope.fSelectedItems.splice(idx, 1);
      }
    });
    $scope.allItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    $scope.fAllItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
  };


  $scope.addAll = function () {
    if ($scope.fAllItems.length != $scope.allItems.length) {
      for (var ii = $scope.fAllItems.length - 1; ii >= 0; ii--) {
        $scope.selectedItems.push($scope.fAllItems[ii]);
        $scope.fSelectedItems.push($scope.fAllItems[ii]);
        $scope.fAllItems.splice(ii, 1);
        $scope.allItems.splice(ii, 1);
      }
    }
    else {
      for (var ii = $scope.allItems.length - 1; ii >= 0; ii--) {
        $scope.selectedItems.push($scope.fAllItems[ii]);
        $scope.fSelectedItems.push($scope.fAllItems[ii]);
        $scope.fAllItems.splice(ii, 1);
        $scope.allItems.splice(ii, 1);
      }
    }
    $scope.selectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    $scope.fSelectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
  };

  $scope.removeAll = function () {
    if ($scope.fSelectedItems.length != $scope.selectedItems.length) {
      for (var ii = $scope.fSelectedItems.length - 1; ii >= 0; ii--) {
        $scope.allItems.push($scope.fSelectedItems[ii]);
        $scope.fAllItems.push($scope.selectedItems[ii]);
        $scope.fSelectedItems.splice(ii, 1);
        $scope.selectedItems.splice(ii, 1);
      }
    }
    else {
      for (var ii = $scope.fSelectedItems.length - 1; ii >= 0; ii--) {
        $scope.allItems.push($scope.fSelectedItems[ii]);
        $scope.fAllItems.push($scope.selectedItems[ii]);
        $scope.fSelectedItems.splice(ii, 1);
        $scope.selectedItems.splice(ii, 1);
      }
    }
    $scope.allItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    $scope.fAllItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
  };

}]);