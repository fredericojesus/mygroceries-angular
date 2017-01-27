(function() {
    'use strict';

    angular
        .module('app')
        .controller('ItemsController', ItemsController);

    /*@ngInject*/
    function ItemsController($scope) {
        $scope.title = 'This is the items page!';
    }

})();
