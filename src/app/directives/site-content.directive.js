(function() {
    'use strict';

    angular
        .module('app')
        .directive('siteContent', siteContent);

    function siteContent() {
        return {
            restrict: 'EA',
            templateUrl: 'app/views/site-content.html'
        };
    }

})();
