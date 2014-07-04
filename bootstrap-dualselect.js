'use strict';

angular.module('tstechly.angular-bootstrap-dualselect', []).directive('tsDualselect', [ function () {

  return {
    restrict: 'E',
    scope:true,
    templateUrl: 'dualselect.html',
    controller: 'DualselectCtrl',
    link: function (scope, elements, attrs) {
      scope.label1 = attrs.label1;
      scope.label2 = attrs.label2;
      scope.allItems = scope.$parent.list;
      scope.selectedItems = scope.$parent.list2;
    }
  };

}]);