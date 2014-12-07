var React = require('react');
var page = require('page');
var template = require('./default.view.jsx');

var DefaultLayout = React.createClass({
  render: function () {
    return template.apply(this);
  },
  handleHomeLink: function () {
    page('#');
  },
  handleLoginLink: function () {
    page('/login');
  }
});

module.exports = DefaultLayout;
