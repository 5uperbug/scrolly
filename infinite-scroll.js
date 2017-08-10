(function() {
  'use strict';

  angular
    .module('web')

    /**
     * All app level directives go here
     */

    //Infinte scroll load
    .directive('scrolly', function ($document) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          $document.bind('scroll', function () {
            //visible height + pixel scrolled = total height
            if ((document.body.offsetHeight + document.body.scrollTop) >= document.body.scrollHeight) {
              scope.$apply(attrs.scrolly);
            }
          });
        }
      };
    });

})();
