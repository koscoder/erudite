var React = require('react');
var page = require('page');
var template = require('./navigation.view.jsx');

var Navigation = React.createClass({
  render: function () {
    return template();
  },
  handleHomeLink: function () {
    page('#');
  }
});

module.exports = Navigation;

