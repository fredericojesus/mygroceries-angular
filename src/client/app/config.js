(function() {
    'use strict';

    angular
        .module('app')
        .config(configure);

    function configure($mdIconProvider) {
        $mdIconProvider
            .iconSet('action', '/src/client/images/material-design-icons/action-icons.svg', 24)
            .iconSet('content', '/src/client/images/material-design-icons/content-icons.svg', 24);
    }

})();
