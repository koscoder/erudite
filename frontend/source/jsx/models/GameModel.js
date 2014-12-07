var BackboneModel = require('backbone/model');

var GAME_WAITING = 'waiting',
    GAME_PROGRESS = 'progress',
    GAME_CLOSED = 'closed';

var GameModel = BackboneModel.extend({
  defaults: {
    id: null,
    title: null, // string
    status: GAME_WAITING,
    playersMax: 2,
    players: null, // array of ids
    room: 'Standard game (45 minutes)',
    tags: null, // array of names
    flags: null, // array of codes
    started: false
  }
});

module.exports = GameModel;
