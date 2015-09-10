(function() {
    'use strict';

    angular
        .module('app')
        .controller('ShoppingListController', ShoppingListController);

    function ShoppingListController($scope, $mdToast) {
        var vm = this;
        vm.items = ['bread', 'apples', 'milk', 'cheese', 'eggs', 'beef', 'orange juice'];
        vm.itemsChecked = [];
        vm.newItem = '';

        vm.addItem = addItem;
        vm.checkItem = checkItem;
        vm.uncheckItem = uncheckItem;
        vm.exists = exists;
        vm.removeItem = removeItem;

        function addItem() {
            if (_.isBlank(vm.newItem)) {
                return;
            }

            if (vm.items.indexOf(vm.newItem.toLowerCase()) > -1 || vm.itemsChecked.indexOf(vm.newItem.toLowerCase()) > -1) {
                $mdToast.show({
                    template: '<md-toast style="left: 50%; top: 20%;"><span flex>You already have that item on your list!</span></md-toast>',
                    hideDelay: 3000
                });
            } else {
                vm.items.unshift(vm.newItem.toLowerCase());
                vm.newItem = '';
            }
        }

        function checkItem(item) {
            vm.removeItem(item, vm.items);
            vm.itemsChecked.unshift(item);
        }

        function uncheckItem(item) {
            vm.removeItem(item, vm.itemsChecked);
            vm.items.unshift(item);
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
