var React = require('react');
var template = require('./login.view.jsx');

var LoginPage = React.createClass({
  render: function () {
    return template.apply(this);
  }
});

module.exports = LoginPage;
