var React = require('react');

var Points = React.createClass({
  render: function () {
    var points = this.props.points;
    var status = this.props.status;

    var operator = '';
    if (status === 'passed') {
      operator = '+';
    } else if (status === 'failed') {
      operator = '-';
    }

    return (
      <p>{operator}{points} points</p>
    );
  }
});

module.exports = Points;
