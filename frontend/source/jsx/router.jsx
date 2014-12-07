var page = require('page');
var acl = require('./acl.jsx');

// Modules
var LoadingPage = require('./loading/loading.jsx');
var LoginPage = require('./login/login.jsx');
var LobbyPage = require('./lobby/lobby.jsx');
var NotExistsPage = require('./404/404.jsx');
var Create = require('./create/create.jsx');

var route = function (url) {
  var chain = window.Array.prototype.slice.call(arguments, 1);
  return page.apply(window, [url, acl].concat(chain));
};

var init = function (changePage) {
  route('/', function () {
    changePage(<LobbyPage />);
  });

  route('/login', function () {
    changePage(<LoginPage />);
  });

  route('/create', function () {
    changePage(<Create />);
  });

  route('/index.html', function () {
    page.redirect('#');
  });

  route('/game', function () {
    page.redirect('#');
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
