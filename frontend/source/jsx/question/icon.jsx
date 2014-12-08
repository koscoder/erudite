var React = require('react');

var QuestionIcon = React.createClass({
  render: function () {
    var iconClassName = 'icon';
    var content = '';
    
    switch (this.props.status) {
      case 'passed':
        iconClassName += ' checkmark';
        break;
      case 'failed':
        iconClassName += ' remove';
        break;
      default:
        content = '?';
    }

    return (
      <i className={iconClassName}>{content}</i>
    );
  }
});

module.exports = QuestionIcon;
