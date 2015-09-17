(function() {
    'use strict';

    angular
        .module('app')
        .directive('shoppingList', shoppingList);

    function shoppingList() {
        return {
            restrict: 'EA',
            templateUrl: 'app/content/shopping-list/shopping-list.html',
            controller: 'ShoppingListController'
        };
    }

})();
