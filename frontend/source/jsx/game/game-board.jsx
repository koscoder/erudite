var React = require('react');
var Storage = require('storage');
var template = require('./game-board.view.jsx');

var GameInfo = React.createClass({
  render: template,
  getPlayersNumber: function () {
    var game = Storage.getGame(this.props.gameId);
    return game.get('players').length + '/' + game.get('playersMax');
  },
  getPlayers: function () {
    var game = Storage.getGame(this.props.gameId);
    return game.get('players');
  }
});

module.exports = GameInfo;
