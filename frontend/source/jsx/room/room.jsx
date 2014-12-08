var React = require('react');
var Storage = require('storage');
var template = require('./room.view.jsx');

var Room = React.createClass({
  render: template,
  getQuestions: function () {
    var game = Storage.getGame(this.props.gameId);
    return game.getQuestions();
  }
});

module.exports = Room;
