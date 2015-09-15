(function() {
    'use strict';

    angular
        .module('app')
        .controller('ShoppingListController', ShoppingListController);

    function ShoppingListController($scope, $mdToast) {
        $scope.items = ['bread', 'apples', 'milk', 'cheese', 'eggs', 'beef', 'orange juice'];
        $scope.itemsChecked = [];
        $scope.newItem = '';

        $scope.addItem = addItem;
        $scope.checkItem = checkItem;
        $scope.uncheckItem = uncheckItem;
        $scope.exists = exists;
        $scope.removeItem = removeItem;

        function addItem() {
            if (_.isBlank($scope.newItem)) {
                return;
            }

            if ($scope.items.indexOf($scope.newItem.toLowerCase()) > -1 || $scope.itemsChecked.indexOf($scope.newItem.toLowerCase()) > -1) {
                $mdToast.show({
                    template: '<md-toast style="left: 50%; top: 20%;"><span flex>You already have that item on your list!</span></md-toast>',
                    hideDelay: 3000
                });
            } else {
                $scope.items.unshift($scope.newItem.toLowerCase());
                $scope.newItem = '';
            }
        }

        function checkItem(item) {
            $scope.removeItem(item, $scope.items);
            $scope.itemsChecked.unshift(item);
        }

        function uncheckItem(item) {
            $scope.removeItem(item, $scope.itemsChecked);
            $scope.items.unshift(item);
        }

        function exists(item, list) {
            var index = list.indexOf(item);
            return index > -1;
        }

        function removeItem(item, list) {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

})();
