'use strict';

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('tstechly.angular-bootstrap-dualselect', []).directive('tsDualselect', [ function () {

  return {
    restrict: 'E',
    scope:true,
    templateUrl: currentScriptPath.replace('bootstrap-dualselect.js', 'dualselect.html'),
    controller: 'DualselectCtrl',
    link: function (scope, elements, attrs) {
      scope.label1 = attrs.label1;
      scope.label2 = attrs.label2;
      scope.allItems = scope.$parent[attrs.ngOptions];
      scope.selectedItems = scope.$parent[attrs.ngModel];
    }
  };

}]);