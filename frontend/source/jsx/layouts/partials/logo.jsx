var React = require('react');
var page = require('page');
var template = require('./logo.view.jsx');

var Logo = React.createClass({
  render: template,
  handleClickBanner: function () {
    page('#');
  }
});

module.exports = Logo;
