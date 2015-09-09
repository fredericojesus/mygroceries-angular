(function() {
  'use strict';

  angular
    .module('app')
    .directive('sidenav', sidenav);

  function sidenav() {
    return {
      restrict: 'EA',
      templateUrl: 'sidenav.html'
    };
  }

})();
