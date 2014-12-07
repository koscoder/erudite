var React = require('react');
var template = require('./login.view.jsx');

var LoginPage = React.createClass({
  render: function () {
    return template.call(this);
  }
});

module.exports = LoginPage;
