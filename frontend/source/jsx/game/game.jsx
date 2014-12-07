var React = require('react');
var Storage = require('storage');
var GameModel = require('../models/GameModel.js');
var template = require('./game.view.jsx');

var Game = React.createClass({
  getInitialState: function () {
    var model = Storage.getGame(this.props.id);
    model.on('change', (function (ctx) {
      return function () {
        ctx.setState({game: model.attributes});
      };
    })(this));
    return {game: model.attributes};
  },
  render: template
});

module.exports = Game;
