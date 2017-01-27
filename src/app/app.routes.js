(function () {
    'use strict';

    angular
        .module('app')
        .config(configRoutes)
        .run(runRoutes);

    /*@ngInject*/
    function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        var contentPath = 'app/content/';

        // Remove # from URL
        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/');

        // States
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: contentPath + 'shopping-list/shopping-list.html',
                controller: 'ShoppingListController'
            })
            .state('shopping-list', {
                url: '/shopping-list',
                templateUrl: contentPath + 'shopping-list/shopping-list.html',
                controller: 'ShoppingListController'
            })
            .state('items', {
                url: '/items',
                templateUrl: contentPath + 'items/items.html',
                controller: 'ItemsController'
            });
    }

    /*@ngInject*/
    function runRoutes($rootScope) {
        $rootScope.$on('$stateChangeStart', stateChangeStartCallback);

        function stateChangeStartCallback(event, toState, toParams, fromState, fromParams, options) {
            //if you need to do anything when the route changes
        }
    }
})();
