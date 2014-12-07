var React = require('react');
var template = require('./games-list.view.jsx');
var GamesItem = require('./games-item.jsx');
var Storage = require('storage');

var GamesList = React.createClass({
  getInitialState: function () {
    Storage.getGamesCollection()
      .on('change', (function (ctx) {
        return function () {
          ctx.setState({games: Storage.getGames()});
        };
      })(this));
    return {games: Storage.getGames()};
  },
  render: template,
  getGames: function () {
    return this.state.games.map(function (game) {
      return <GamesItem id={game.get('id')} />;
    });
  }
});

module.exports = GamesList;
