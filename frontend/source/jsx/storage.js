var _ = require('lodash');

// Collections
var GamesCollection = require('./collections/GamesCollection.js');

// Mocks
var gamesList = require('./mocks/games.js');

// Storage
var Storage = function () {
  this.games = new GamesCollection(gamesList);
};

Storage.prototype.getGamesCollection = function () {
  return this.games;
};

Storage.prototype.getGames = function () {
  return _.clone(this.getGamesCollection().models);
};

Storage.prototype.createGame = function (game) {
  return this.getGamesCollection().create(game);
};

Storage.prototype.getGame = function (id) {
  return this.getGamesCollection().get(+id);
};

module.exports = window.Store = new Storage;
