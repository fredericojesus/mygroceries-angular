(function() {
    'use strict';

    angular
        .module('app')
        .directive('siteContent', siteContent);

    function siteContent() {
        return {
            restrict: 'EA',
            templateUrl: 'app/site-content/site-content.html'
        };
    }

})();
