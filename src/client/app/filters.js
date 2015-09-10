(function() {
    'use strict';

    angular
        .module('app.filters', [])
        .filter('titleize', titleize);

    function titleize() {
        return function(input) {
            return _.titleize(input);
        };
    }

})();
