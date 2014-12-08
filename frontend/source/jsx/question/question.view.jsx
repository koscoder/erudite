var Icon = require('./icon.jsx');
var Points = require('./points.jsx');

module.exports = function () {
  var question = this.props.question;
  var points = question.points;
  var status = question.status;
  var cardClassName = 'ui segment inverted center aligned card';

  if (status === 'new') {
    cardClassName += ' blue';
  } else if (status === 'passed') {
    cardClassName += ' green';
  } else if (status === 'failed') {
    cardClassName += ' red';
  }

  return (
    <div className={cardClassName}>
      <h1><Icon status={status} /></h1>
      <p><Points status={status} points={points} /></p>
      <p>You</p>
    </div>
  );
};
