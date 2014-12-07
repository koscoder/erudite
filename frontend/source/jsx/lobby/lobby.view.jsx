var DefaultLayout = require('../layouts/default.jsx');

module.exports = function () {
  return (
    <DefaultLayout>
      <h1>Active Games</h1>
      <div className="ui warning message">Some important message here. For example - there are no active games</div>
      <table className="ui sortable celled table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Status</th>
            <th>Players #</th>
            <th>Type</th>
            <th>Topics</th>
            <th>Countries</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commonwealth of Independent States films</td>
            <td>Waiting</td>
            <td>3/5</td>
            <td>Standard game (45 minutes)</td>
            <td>[Films]</td>
            <td><i className="ua flag"></i> <i className="belarus flag"></i> <i className="ru flag"></i></td>
            <td><button className="button ui green" onclick="location.href='join.html'">Join</button></td>
          </tr>
          <tr>
            <td>Science fiction russian films</td>
            <td>Waiting</td>
            <td>1/5</td>
            <td>Short game (30 minutes)</td>
            <td>[Films]</td>
            <td><i className="ru flag"></i></td>
            <td><button className="button ui green" onclick="location.href='join.html'">Join</button></td>
          </tr>
          <tr>
            <td>Italian Painters</td>
            <td>Started</td>
            <td>2/4</td>
            <td>Standard game (45 minutes)</td>
            <td>[Arts]</td>
            <td><i className="it flag"></i></td>
            <td><button className="button ui green disabled">Join</button></td>
          </tr>
          <tr>
            <td>Books of XX Century</td>
            <td>Started</td>
            <td>4/6</td>
            <td>Long game (45 minutes)</td>
            <td>[Books]</td>
            <td><i className="gb flag"></i> <i className="us flag"></i> <i className="de flag"></i> <i className="fr flag"></i></td>
            <td><button className="button ui green disabled">Join</button></td>
          </tr>
          <tr>
            <td>Commonwealth of Independent States films</td>
            <td>Waiting</td>
            <td>3/5</td>
            <td>Standard game (45 minutes)</td>
            <td>[Films]</td>
            <td><i className="ua flag"></i> <i className="belarus flag"></i> <i className="ru flag"></i></td>
            <td><button className="button ui green" onclick="location.href='join.html'">Join</button></td>
          </tr>
          <tr>
            <td>Science fiction russian films</td>
            <td>Waiting</td>
            <td>1/5</td>
            <td>Short game (30 minutes)</td>
            <td>[Films]</td>
            <td><i className="ru flag"></i></td>
            <td><button className="button ui green" onclick="location.href='join.html'">Join</button></td>
          </tr>
          <tr>
            <td>Italian Painters</td>
            <td>Started</td>
            <td>2/4</td>
            <td>Standard game (45 minutes)</td>
            <td>[Arts]</td>
            <td><i className="it flag"></i></td>
            <td><button className="button ui green disabled">Join</button></td>
          </tr>
          <tr>
            <td>Books of XX Century</td>
            <td>Started</td>
            <td>4/6</td>
            <td>Long game (45 minutes)</td>
            <td>[Books]</td>
            <td><i className="gb flag"></i> <i className="us flag"></i> <i className="de flag"></i> <i className="fr flag"></i></td>
            <td><button className="button ui green disabled">Join</button></td>
          </tr>
        </tbody>
      </table>
    </DefaultLayout>
  );
};

