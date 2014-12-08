var page = require('page');
var acl = require('./acl.jsx');

// Modules
var LoadingPage = require('./loading/loading.jsx');
var LoginPage = require('./login/login.jsx');
var LobbyPage = require('./lobby/lobby.jsx');
var LoadLobbyData = require('./lobby/load-data.js');
var NotExistsPage = require('./404/404.jsx');
var Create = require('./create/create.jsx');
var LoadCreateData = require('./create/load-data.js');
var Game = require('./game/game.jsx');

var route = function (url) {
  var chain = window.Array.prototype.slice.call(arguments, 1);
  return page.apply(window, [url, acl].concat(chain));
};

var init = function (changePage) {
  route('/games', LoadLobbyData, function () {
    changePage(<LobbyPage />);
  });

  route('/login', function () {
    changePage(<LoginPage />);
  });

  route('/logout', function () {
    window.location.href = '/logout';
  });

  route('/create', LoadCreateData, function () {
    changePage(<Create />);
  });

  route('/game/:id', function (ctx) {
    changePage(<Game id={ctx.params.id} />);
  });

  route('/index.html', function () {
    page.redirect('/games');
  });

  route('/', function () {
    page.redirect('/games');
  });

  route('*', function () {
    changePage(<NotExistsPage />);
  });

  page({
    popstate: false,
    hashbang: true
  });

  setTimeout(function () {
    var hash = window.location.hash;
    if (hash.indexOf('#!') === 0) {
      page(hash.slice(2));
    } else {
      page('#');
    }
  }, 1);
  
  return <LoadingPage />;
}

module.exports = init;
