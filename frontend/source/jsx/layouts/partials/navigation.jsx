var React = require('react');
var page = require('page');
var template = require('./navigation.view.jsx');

var Navigation = React.createClass({
  render: template,
  handleHomeLink: function () {
    page('#');
  },
  handleCreateLink: function () {
    page('/create');
  },
  handleRatingLink: function () {
    page('/rating');
  },
  handleTopicsLink: function () {
    page('/topics');
  }
});

module.exports = Navigation;

