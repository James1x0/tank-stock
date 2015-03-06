/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    vendorDir = 'bower_components/';

var app = new EmberApp();

/* Ember Data Adapter */

var bowerIncludes = [
  'ember-localstorage-adapter/localstorage_adapter.js',
  'font-awesome/css/font-awesome.css',
  'animate.css/animate.css',
  'nprogress/nprogress.css',
  'c3js-chart/c3.css',
  'd3/d3.js',
  'velocity/velocity.js',
  'bootstrap/dist/js/bootstrap.min.js',
  'moment/moment.js',
  'bootstrap.growl/bootstrap-growl.js',
  'nprogress/nprogress.js',
  'c3js-chart/c3.js',
  'typeahead.js/dist/typeahead.jquery.js',
];

bowerIncludes.forEach(function ( path ) {
  app.import( vendorDir + path );
});

module.exports = app.toTree();
