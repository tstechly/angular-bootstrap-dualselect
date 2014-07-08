'use strict';

var scripts = document.getElementsByTagName("script");
var currentScriptPath = scripts[scripts.length-1].src;

/* returns true if array 'a' contains 'obj' */
function contains(a, obj) {
  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}


angular.module('tstechly.angular-bootstrap-dualselect', []).directive('tsDualselect', [ function () {
  return {
    restrict: 'E',
    scope:true,
    templateUrl: currentScriptPath.replace('bootstrap-dualselect.js', 'dualselect.html'),
    controller: 'DualselectCtrl',
    link: function (scope, elements, attrs) {
      scope.label1 = attrs.label1;
      scope.label2 = attrs.label2;
      scope.selectedItems = scope.$parent[attrs.ngModel];

      scope.$on("dualselect.event:data-ready", function() {
        scope.selectable = scope.$parent[attrs.ngOptions];
        /* Add only items that are not on selectedItems list */
        for(var idx in scope.selectable) {
          var item = scope.selectable[idx];
          scope.selectable.push(item.name)
          if(!contains(scope.selectedItems, item.name) && item!==undefined && item.name!==undefined) {
            scope.allItems.push(item.name);
            scope.fAllItems.push(item.name);
          }
        }

        scope.allItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
        scope.fAllItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
        scope.selectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
        scope.fSelectedItems.sort(function(a,b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
      });
    }
  };
}]);