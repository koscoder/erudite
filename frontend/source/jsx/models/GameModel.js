var BackboneModel = require('backbone/model');

// Game Status
var GAME_WAITING = 'waiting',
    GAME_PROGRESS = 'progress',
    GAME_CLOSED = 'closed';
// Room types
var ROOM_JOSTLER = 'jostler',
    ROOM_THIEF = 'thief',
    ROOM_ROBBER = 'robber';

var GameModel = BackboneModel.extend({
  defaults: {
    id: null,
    title: null, // string
    status: GAME_WAITING,
    playersMax: 2,
    players: null, // array of ids
    room: ROOM_THIEF,
    tags: null, // array of names
    flags: null, // array of codes
    started: false
  },

  GAME_WAITING: GAME_WAITING,
  GAME_PROGRESS: GAME_PROGRESS,
  GAME_CLOSED: GAME_CLOSED,

  ROOM_JOSTLER: ROOM_JOSTLER,
  ROOM_THIEF: ROOM_THIEF,
  ROOM_ROBBER: ROOM_ROBBER
});

GameModel.GAME_WAITING = GAME_WAITING;
GameModel.GAME_PROGRESS = GAME_PROGRESS;
GameModel.GAME_CLOSED = GAME_CLOSED;

GameModel.ROOM_JOSTLER = ROOM_JOSTLER,
GameModel.ROOM_THIEF = ROOM_THIEF,
GameModel.ROOM_ROBBER = ROOM_ROBBER

module.exports = GameModel;
