'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });
};
