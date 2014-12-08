var Storage = require('storage');

module.exports = function (ctx, next) {
  var game = Storage.getGame(ctx.params.id);
  if (game) {
    next();
  } else {
    Storage.loadGames(function (err) {
      if (!err) next();
      else page('/games');
    });
  }
};
