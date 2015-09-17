(function() {
    'use strict';

    angular
        .module('app')
        .config(configure);

    function configure($mdIconProvider) {
        $mdIconProvider
            .iconSet('navigation', '/src/images/material-design-icons/navigation-icons.svg', 24)
            .iconSet('action', '/src/images/material-design-icons/action-icons.svg', 24)
            .iconSet('content', '/src/images/material-design-icons/content-icons.svg', 24);
    }

})();
