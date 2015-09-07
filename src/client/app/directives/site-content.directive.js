(function () {
  'use strict';

  angular
    .module('app')
    .directive('siteContent', siteContent);

    function siteContent() {
        return {
            restrict: 'EA',
            templateUrl: "site-content.html"
        };
    }
    
})();
