var User = require('./user.jsx');

module.exports = function () {
  var users = this.props.list.map(function (user) {
    return (<User user={user} />);
  });

  return (
    <div className="ui divided list">
      {users}
    </div>
  );
};
