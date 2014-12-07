var DefaultLayout = require('../layouts/default.jsx');

module.exports = function () {
  return (
    <DefaultLayout>
      <h1>Game "Books of XX Century"</h1>
      <div className="sixteen wide column">
        <div className="ui stackable inverted divided relaxed grid">
          <div className="four wide column">
            <h4>Time Left</h4>
            <h1><i className="icon wait"></i> 12:56</h1>
            <h4>Game Information</h4>
            <p>Type: Short game</p>
            <p>Countries: <i className="ua flag"></i> <i className="belarus flag"></i> <i className="ru flag"></i></p>
            <p>Topic: Films</p>
            <h4>Players List 5/6</h4>
            <div className="ui divided list">
              <div className="item">
                <img className="ui avatar image" src="http://semantic-ui.com/images/avatar/small/daniel.jpg" />
                <div className="content">
                  <a className="header">Daniel Louise [Creator]</a>
                  <div className="description">0 Points</div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src="http://semantic-ui.com/images/avatar/small/stevie.jpg" />
                <div className="content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">0 Points</div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src="http://semantic-ui.com/images/avatar/small/elliot.jpg" />
                <div className="content">
                  <a className="header">Elliot Fu</a>
                  <div className="description">0 Points</div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src="http://semantic-ui.com/images/avatar/small/jenny.jpg" />
                <div className="content">
                  <a className="header">Jenny Hess</a>
                  <div className="description">0 Points</div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" src="http://semantic-ui.com/images/avatar/small/veronika.jpg" />
                <div className="content">
                  <a className="header">Veronika Ossi</a>
                  <div className="description">0 Points</div>
                </div>
              </div>
            </div>
          </div>
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
