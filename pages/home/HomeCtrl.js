'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function ($scope, $timeout) {
  $scope.selectedStates = ['HAWAII', 'IOWA', 'ALASKA'];

  $scope.allStates = [
    "NEW HAMPSHIRE",
    "MAINE",
    "COLORADO",
    "ALASKA",
    "ALABAMA",
    "ARIZONA",
    "ARKANSAS",
    "CALIFORNIA",
    "CONNECTICUT",
    "DELAWARE",
    "FLORIDA",
    "GEORGIA",
    "HAWAII",
    "IDAHO",
    "ILLINOIS",
    "INDIANA",
    "IOWA",
    "KANSAS",
    "KENTUCKY",
    "LOUISIANA",
    "MARYLAND",
    "MASSACHUSETTS",
    "MICHIGAN",
    "MINNESOTA",
    "MISSISSIPPI",
    "MISSOURI",
    "MONTANA",
    "NEBRASKA",
    "NEVADA",
    "NEW JERSEY",
    "NEW MEXICO",
    "NEW YORK",
    "NORTH CAROLINA",
    "NORTH DAKOTA",
    "OHIO",
    "OKLAHOMA",
    "OREGON",
    "PENNSYLVANIA",
    "RHODE ISLAND",
    "SOUTH CAROLINA",
    "SOUTH DAKOTA",
    "TENNESSEE",
    "TEXAS",
    "UTAH",
    "VERMONT",
    "VIRGINIA",
    "WASHINGTON",
    "WEST VIRGINIA",
    "WISCONSIN",
    "WYOMING"
  ];


  setTimeout(function() {
    $scope.$broadcast("dualselect.event:data-ready");
  },1000);

}]);