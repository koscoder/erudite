var React = require('react');
var page = require('page');
var template = require('./logo.view.jsx');

var Logo = React.createClass({
  render: function () {
    return template.call(this);
  },
  handleClickBanner: function () {
    page('#');
  }
});

module.exports = Logo;
