var Storage = require('storage');

module.exports = function (ctx, next) {
  Storage.loadGames(function () {
    next();
  });
};
