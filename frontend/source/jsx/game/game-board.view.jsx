var Users = require('../users/users.jsx');
var GameInfo = require('../game/game-info.jsx');

module.exports = function () {
  return (
    <div className="four wide column">
      <h4>Time Left</h4>
      <h1><i className="icon wait"></i> 12:56</h1>
      <h4>Game Information</h4>
      <GameInfo game={this.props.gameId} />
      <h4>Players List {this.getPlayersNumber()}</h4>
      <Users list={this.getPlayers()} />
    </div>
  );
};
