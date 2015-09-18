'use strict';

module.exports = function () {
    var client = './src/';
    var clientApp = client + 'app/';
    var dist = './dist/';
    var temp = './.tmp/';

    var config = {

        //Files paths
        alljs: [
            './src/**/*.js',
            './*.js',
            './gulp/**/*.js'
        ],
        client: client,
        css: temp + '**/*.css',
        dist: dist,
        htmltemplates: clientApp + '**/*.html',
        index: 'index.html',
        images: client + 'images/**/*.*',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            temp + 'templates.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        root: './',
        stylus: client + '**/*.styl',
        temp: temp,

        //files to watch in dev environment
        watchFiles: [
            clientApp + '**/*.js',
            clientApp + '**/*.html',
            clientApp + '**/*.styl',
            client + '**/*.styl'
        ],

        //optimized files
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        //template cache
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app',
                root: 'app/',
                standAlone: false
            }
        },

        //bower and npm locations
        bower: {
            json: require('../bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
