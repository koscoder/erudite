var Question = require('../question/question.jsx');

module.exports = function () {
  var questions = this.getQuestions().map(function (question) {
    return (
      <div className="column">
        <Question question={question} />
      </div>
    );
  });

  return (
    <div className="twelve wide column game-board-active">
      <h4>Questions</h4>
      <div className="ui segment">
        <div className="ui five column grid">
          {questions}
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
  );
};
