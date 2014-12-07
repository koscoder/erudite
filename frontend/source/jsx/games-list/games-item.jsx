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
  getId: function () {
    return this.getGame().id;
  },
  getTitle: function () {
    return this.getGame().title;
  },
  getStatus: function () {
    return this.getGame().status;
  },
  getPlayers: function () {
    var game = this.getGame();
    return game.players + '/' + game.playersMax;
  },
  getRoom: function () {
    return this.getGame().room;
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
