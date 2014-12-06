var page = require('page');

// Modules
//var app = require('app');

// Routes

page('/', function () {
  console.log('home');
});

page('*', function () {
  console.log(arguments);
});

page();

