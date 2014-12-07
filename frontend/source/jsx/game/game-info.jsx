var React = require('react');
var Storage = require('storage');
var template = require('./game-info.view.jsx');

var GameInfo = React.createClass({
  render: template,
  getRoomName: function () {
    var game = Storage.getGame(this.props.game);
    switch (game.get('room')) {
      case game.ROOM_JOSTLER:
        return 'Jostler';
      case game.ROOM_THIEF:
        return 'Thief';
      case game.ROOM_ROBBER:
        return 'Robber';
    }

    return false;
  },
  getFlags: function () {
    var game = Storage.getGame(this.props.game);
    return game.get('flags');
  },
  getTags: function () {
    var game = Storage.getGame(this.props.game);
    return game.get('tags');
  }
});

module.exports = GameInfo;
