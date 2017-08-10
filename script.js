var myApp = angular.module('app', []);

myApp.directive('scrolly', function($document) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var raw = element[0];
      if(attrs.scrollMode === "page") {
        console.log(attrs.scrollMode);
        $document.bind('scroll', function () {
          //visible height + pixels scrolled = total height
          if ((window.innerHeight + document.body.scrollTop) >= document.body.scrollHeight) {
            scope.$apply(attrs.scrolly);
          }
        });
      } else if(attrs.scrollMode === "element") {
        console.log(attrs.scrollMode);
        element.bind('scroll', function() {
          //visible height + pixels scrolled = total height
          if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
            scope.$apply(attrs.scrolly);
          }
        });
      };
    }
  };
});

myApp.directive('scrollyPage', function($document) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      $document.bind('scroll', function () {
        //visible height + pixel scrolled = total height
        if ((window.innerHeight + document.body.scrollTop) >= document.body.scrollHeight) {
          scope.$apply(attrs.scrollyPage);
        }
      });
    }
  };
});

myApp.controller('ctrl', ['$scope', function($scope) {
  $scope.showMore = function() {
    alert('show more triggered');
  };

  $scope.showPageEnd = function() {
    console.log('Page end');
  }
}]);
