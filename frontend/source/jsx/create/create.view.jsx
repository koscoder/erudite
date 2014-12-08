var DefaultLayout = require('../layouts/default.jsx');

var regionsStyle = {
  width: '100%',
  height: '500px'
};

module.exports = function () {
  var gameTopics = this.state.topics.map(function (topic) {
    var topicName = 'topics[' + topic.id + ']';
    return (
        <div className="field">
          <div className="ui toggle checkbox">
            <input type="checkbox" value={topic.id} name={topicName} />
            <label>{topic.title}</label>
          </div>
        </div>
    );
  });

  var gameTypes = _.each(this.state.gameTypes, function (index, gameType) {
    return React.createElement('option', gameType + '3', {value: index});
  });
  var selectTypes = (
    <select className="ui dropdown" ref="gameTypes" value="0">
      <option value="0">[ Select Game Type ]</option>
      <option value="1">Short room</option>
      {gameTypes}
    </select>
  );

  return (
    <DefaultLayout>
      <h1>Create New Game</h1>
      <div className="ui form" ref="mainInfo">
        <h4 className="ui dividing header">Game Information</h4>
        <div className="two fields">
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="Game title" />
          </div>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>Game Type</label>
                <select className="ui dropdown" value="0">
                  <option value="0">[ Select Game Type ]</option>
                  <option value="jostler">Jostler (5 minutes, 15 cards)</option>
                  <option value="thief">Thief (10 minutes, 30 cards)</option>
                  <option value="robber">Robber (20 minutes, 60 cards)</option>
                </select>
              </div>
              <div className="field">
                <label>Max number of players</label>
                <input type="text" name="players" placeholder="Max # of players" value="5" />
              </div>
            </div>
          </div>
        </div>
        <h4 className="ui dividing header">Topics and Countries</h4>
        <div className="field">
          <div className="sixteen wide column">
            <div className="ui stackable inverted divided relaxed grid">
              <div className="four wide column">
                <div className="field" ref="topics">
                  <label>Topics</label>
                  {gameTopics}
                </div>
              </div>
              <div className="twelve wide column">
                <div className="field">
                  <label>Countries</label>
                  <div className="worldmap"></div>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <div className="ui error message">
          <div className="header">We noticed some issues</div>
        </div>
        <div className="ui submit button" onClick={this.handleCreate}>Create</div>
      </div>
    </DefaultLayout>
  );
};
