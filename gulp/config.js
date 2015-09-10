'use strict';

module.exports = {

    'styles': {
        'src': 'src/client/styles/**/*.styl',
        'dest': 'dist'
    },

    'scripts': {
        'src': 'src/client/app/**/*.js',
        'dest': 'dist'
    },

    'views': {
        'watch': [
            'index.html',
            'src/client/app/views/**/*.html'
        ],
        'src': 'src/client/app/views/**/*.html',
        'dest': 'dist'
    },

    'dist': {
        'root': 'dist'
    }

};
