(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppHeaderController', AppHeaderController);

    /*@ngInject*/
    function AppHeaderController($scope, $mdSidenav) {
        $scope.openSidenav = openSidenav;

        function openSidenav() {
            $mdSidenav('sidenav')
                .open()
                .then(function() {
                    // console.log('opened');
                });
        }
    }

})();
