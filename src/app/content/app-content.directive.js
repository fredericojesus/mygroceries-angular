(function() {
    'use strict';

    angular
        .module('app')
        .directive('appContent', appContent);

    function appContent() {
        return {
            restrict: 'EA',
            templateUrl: 'app/content/app-content.html'
        };
    }

})();
