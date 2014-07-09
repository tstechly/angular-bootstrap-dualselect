'use strict';
/*
 Usage

 <ts-dualselect label1="All items" label2="Selected items" ng-model="selected" ng-options="selectable" value="name"></ts-dualselect>

 where:
 label1 - label for left  select box
 label2 - label for right select box
 ng-options - elements that can be selected, displayed in left select box
 ng-model - 'selected' elements, displayed in right select box
 value - (optional) - if selectable elements are objects, value is name of the property. Value of the property
 will be displayed in the select


 */
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
      var valueAttribute = attrs.value

      scope.$on("dualselect.event:data-ready", function() {
        scope.selectable = scope.$parent[attrs.ngOptions];
        /* Add only items that are not on selectedItems list */
        for(var idx in scope.selectable) {
          var item = scope.selectable[idx];
          var itemValue = valueAttribute!==undefined?item[valueAttribute]:item;

          scope.selectable.push(itemValue);
          if(!contains(scope.selectedItems, itemValue) && item!==undefined && itemValue!==undefined) {
            scope.allItems.push(itemValue);
            scope.fAllItems.push(itemValue);
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