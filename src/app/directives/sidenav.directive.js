(function() {
    'use strict';

    angular
        .module('app')
        .directive('sidenav', sidenav);

    function sidenav() {
        return {
            restrict: 'EA',
            templateUrl: 'app/views/sidenav.html'
        };
    }

})();
