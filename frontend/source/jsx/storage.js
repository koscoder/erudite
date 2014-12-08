var $ = require('jQuery');
var _ = require('lodash');
var Backbone = require('backbone');

// Collections
var GamesCollection = require('./collections/GamesCollection.js');

// Mocks
var gamesList = require('./mocks/games.js');

// Storage
var Storage = _.extend({}, Backbone.Events, {
    games : new GamesCollection(gamesList),
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

    getGamesCollection : function () {
      return this.games;
    },

    getGames : function () {
      return _.clone(this.getGamesCollection().models);
    },

    createGame : function (game) {
      return this.getGamesCollection().create(game);
    },

    getGame : function (id) {
      return this.getGamesCollection().get(+id);
    }
});

module.exports = window.Store = Storage;
