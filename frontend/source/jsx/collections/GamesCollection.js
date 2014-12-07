var BackboneCollection = require('backbone/collection');
var GameModel = require('../models/GameModel.js');

var GamesCollection = BackboneCollection.extend({
  model: GameModel
});

module.exports = GamesCollection;
