var React = require('react');
var page = require('page');
var template = require('./games-item.view.jsx');

var GamesItem = React.createClass({
  componentWillMount: function () {
    this.setState({game: this.props.game});
  },
  render: function () {
    return template.call(this);
  },
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
