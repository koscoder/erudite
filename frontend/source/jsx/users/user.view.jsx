module.exports = function () {
  var user = this.props.user;

  return (
    <div className="item">
      <img className="ui avatar image" src={user.avatar} />
      <div className="content">
        <a className="header">{user.username}</a>
        <div className="description">{user.score} Points</div>
      </div>
    </div>
  );
};
