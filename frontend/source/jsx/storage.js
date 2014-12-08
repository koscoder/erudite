var $ = require('jQuery');
var _ = require('lodash');
var Backbone = require('backbone');

// Collections
var GamesCollection = require('./collections/GamesCollection.js');

// Storage
var Storage = _.extend({}, Backbone.Events, {
    games : new GamesCollection(),
    gameConfig : null,

    getGameConfig: function (callbackFunction) {
        var self = this;
        if (this.gameConfig) {
            callbackFunction();
        } else {
            $.get('/api/game/game-options', {}, function(data) {
                this.gameConfig = data;
                self.trigger('load:game-config', data);
                callbackFunction();
            }, 'json');
        }
    },

    loadGames: function (callback) {
      var self = this;
      callback = _.isFunction(callback) ? callback : _.noop;
      $.ajax('/api/game/list', {
        success: function (data) {
          var games = _.map(data, function (row) {
            var game = {
              id: row.id,
              title: row.title,
              status: row.status,
              playersMax: row.playersMax,
              room: row.room,
              started: parseInt(row.started),
              tags: row.tags.replace(/"/g, '').split(','),
              flags: row.flags.replace(/"/g, '').split(',')
            };

            game.players = [];
            _.each(row.players, function (player) {
              game.players.push({
                id: parseInt(player.user.id),
                username: player.user.name,
                score: parseInt(player.score),
                avatar: 'http://semantic-ui.com/images/avatar/small/stevie.jpg'
              });
            });

            return game;
          });
          self.trigger('load:games', games);
          callback(null, games);
        },
        error: function (err) {
          callback(err);
        }
      });
    },

    getGamesCollection : function () {
      return this.games;
    },

    getGames : function () {
      return _.clone(this.getGamesCollection().models);
    },

    addGame : function (game) {
      return this.getGamesCollection().add(game);
    },

    getGame : function (id) {
      return this.getGamesCollection().get(+id);
    }
});

Storage.on('load:games', function (games) {
  var gamesCollection = Storage.getGamesCollection();
  var oldGames = Storage.getGames();
  games = _.clone(games);
  _.each(oldGames, function (oldGame) {
    var match = _.find(games, function (game) {
      return +oldGame.get('id') === +game.id;
    });

    if (match) {
      oldGame.set(match);
      _.remove(games, match);
    } else {
      gamesCollection.remove(oldGame);
    }
  });
  gamesCollection.add(games);
});

module.exports = window.Store = Storage;
