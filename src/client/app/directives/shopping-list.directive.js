(function () {
  'use strict';

  angular
    .module('app')
    .directive('shoppingList', shoppingList);

    function shoppingList() {
        return {
            restrict: 'EA',
            templateUrl: 'shopping-list.html',
            controller: 'ShoppingListController',
            controllerAs: 'vm'
        };
    }

})();
