var React = require('react');
var page = require('page');
var template = require('./footer.view.jsx');

var Footer = React.createClass({
  render: function () {
    return template.call(this);
  }
});

module.exports = Footer;
