// Karma configuration
// Generated on Mon Dec 23 2013 14:08:05 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/webL10n/l10n.js',
      'app/bower_components/quojs/quo.js',
      'app/bower_components/lungo/lungo.js',
      'app/bower_components/monocle/monocle.js',
      'app/bower_components/underscore/underscore-min.js',
      {pattern: 'app/templates/*.mustache', watched: true, included: false, served: true},
      '.tmp/scripts/config.js',
      '.tmp/scripts/app.notification.js',
      '.tmp/scripts/app.persist.js',
      '.tmp/scripts/app.utils.js',
      '.tmp/scripts/monocle/model/country.js',
      '.tmp/scripts/monocle/view/MLPView.js',
      '.tmp/scripts/monocle/view/Countryli.js',
      'app/scripts/services.js',
      '.tmp/spec/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],

    preprocessors: {
      'app/scripts/*.js': 'coverage',
      '.tmp/scripts/*.js': 'coverage',
      '.tmp/scripts/monocle/model/*.js': 'coverage',
      '.tmp/scripts/monocle/view/*.js': 'coverage'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
        type: "lcov",
        dir: "coverage/"
    },

    proxies: {
      '/templates/': 'http://localhost:9876/base/app/templates/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
