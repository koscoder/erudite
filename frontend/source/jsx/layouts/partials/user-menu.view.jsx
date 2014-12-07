module.exports = function () {
  return (
    <div className="ui right floated secondary menu">
      <div onClick={this.handleLoginLink} className="ui floating link item">
        <div className="text">Logout</div>
      </div>
    </div>
  );
};

