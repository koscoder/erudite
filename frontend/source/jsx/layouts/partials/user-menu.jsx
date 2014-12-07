var React = require('react');
var page = require('page');
var template = require('./user-menu.view.jsx');

var UserMenu = React.createClass({
  render: function () {
    return template.call(this);
  },
  handleLoginLink: function () {
    page('/login');
  }
});

module.exports = UserMenu;

