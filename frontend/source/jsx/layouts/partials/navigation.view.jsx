module.exports = function () {
  return (
    <div className="ui large secondary network menu">
      <a onClick={this.handleHomeLink} className="view-ui item transition animating scale in active"><i className="cube icon"></i> Games</a>
      <a onClick={this.handleCreateLink} className="view-ui item transition animating scale in" href="create.html"><i className="plus icon"></i> Create Game</a>
      <a onClick={this.handleRatingLink} className="view-ui item transition animating scale in"><i className="empty star icon"></i> Ratings</a>
      <span onClick={this.handleTopicsLink} className="additional item transition animating scale in"><i className="puzzle icon"></i> Topics</span>
    </div>
  );
};

