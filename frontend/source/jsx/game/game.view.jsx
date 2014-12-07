var DefaultLayout = require('../layouts/default.jsx');
var GameBoard = require('./game-board.jsx');

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
          <div className="twelve wide column game-board-active">
            <h4>Questions</h4>
            <div className="ui segment">
              <div className="ui five column grid">
                <div className="column">
                  <div className="ui segment green inverted center aligned card">
                    <h1><i className="icon checkmark"></i></h1>
                    <p>+500 points</p>
                    <p>You</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment red inverted center aligned card">
                    <h1><i className="icon remove"></i></h1>
                    <p>-300 points</p>
                    <p>You</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment center aligned card">
                    <h1><i className="icon remove"></i></h1>
                    <p>-250 points</p>
                    <p><i>Stevie Feliciano</i></p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment center aligned card">
                    <h1><i className="icon checkmark"></i></h1>
                    <p>+250 points</p>
                    <p><i>Veronika Ossi</i></p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>300 points</p>
                    <p>New</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>200 points</p>
                    <p>New</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>150 points</p>
                    <p>New</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment green inverted center aligned card">
                    <h1><i className="icon checkmark"></i></h1>
                    <p>+500 points</p>
                    <p>You</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment red inverted center aligned card">
                    <h1><i className="icon remove"></i></h1>
                    <p>-300 points</p>
                    <p>You</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment center aligned card">
                    <h1><i className="icon remove"></i></h1>
                    <p>-250 points</p>
                    <p><i>Stevie Feliciano</i></p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment center aligned card">
                    <h1><i className="icon checkmark"></i></h1>
                    <p>+250 points</p>
                    <p><i>Veronika Ossi</i></p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>150 points</p>
                    <p>New</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>100 points</p>
                    <p>New</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>400 points</p>
                    <p>New</p>
                  </div>
                </div>
                <div className="column">
                  <div className="ui segment blue inverted center aligned card">
                    <h1><i className="icon">?</i></h1>
                    <p>800 points</p>
                    <p>New</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
