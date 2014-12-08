var DefaultLayout = require('../layouts/default.jsx');
var GameBoard = require('./game-board.jsx');
var Room = require('../room/room.jsx');

module.exports = function () {
  var players = this.state.game.players;
  var gameId = this.state.game.id;
  var gameName = this.state.game.title;

  return (
    <DefaultLayout>
      <h1>Game "{gameName}"</h1>
      <div className="sixteen wide column">
        <div className="ui stackable inverted divided relaxed grid">
          <GameBoard gameId={this.state.game.id} />
          <Room gameId={this.state.game.id} />
        </div>
      </div>
    </DefaultLayout>
  );
};
