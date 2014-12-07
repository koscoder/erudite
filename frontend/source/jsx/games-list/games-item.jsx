var React = require('react');
var page = require('page');
var Storage = require('storage');
var template = require('./games-item.view.jsx');

var GamesItem = React.createClass({
  getInitialState: function () {
    var gameId = this.props.id;
    var model = Storage.getGame(gameId);
    model.on('change', (function (ctx) {
      return function () {
        ctx.setState({game: model.attributes});
      };
    })(this));
    return {game: model.attributes};
  },
  render: template,
  handlerJoin: function () {
    page('/game/' + this.getId());
  },
  getGame: function () {
    return this.state.game;
  },
  getGameModel: function () {
    return Storage.getGame(this.getGame().id);
  },
  getId: function () {
    return this.getGame().id;
  },
  getTitle: function () {
    return this.getGame().title;
  },
  getStatus: function () {
    var game = this.getGameModel();
    switch (this.getGame().status) {
      case game.GAME_WAITING:
        return 'Waiting';
      case game.GAME_PROGRESS:
        return 'Battle';
      case game.GAME_CLOSED:
        return 'Dead';
    }

    return false;
  },
  getPlayers: function () {
    var game = this.getGame();
    return game.players.length + '/' + game.playersMax;
  },
  getRoom: function () {
    var game = this.getGameModel();
    switch (this.getGame().room) {
      case game.ROOM_JOSTLER:
        return 'Jostler (5 minutes)';
      case game.ROOM_THIEF:
        return 'Thief (10 minutes)';
      case game.ROOM_ROBBER:
        return 'Robber (20 minutes)';
    }

    return false;
  },
  getTags: function () {
    return <span>[{this.getGame().tags.join(', ')}]</span>;
  },
  getFlags: function () {
    var flags = this.getGame().flags;
    var flagsElements = flags.map(function (countryId) {
      var className = countryId + ' flag';
      return <i className={className}></i>
    });
    return flagsElements;
  },
  getJoinButton: function () {
    var started = this.getGame().started;
    var className = 'button ui green' + (started ? ' disabled' : '');
    return <button className={className} onClick={this.handlerJoin}>Join</button>
  }
});

module.exports = GamesItem;
