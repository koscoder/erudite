var DefaultLayout = require('../layouts/default.jsx');
var GamesList = require('../games-list/games-list.jsx');

module.exports = function () {
  return (
    <DefaultLayout>
      <h1>Active Games</h1>
      <div className="ui warning message">Some important message here. For example - there are no active games</div>
      <GamesList />
    </DefaultLayout>
  );
};

