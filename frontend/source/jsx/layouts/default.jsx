var React = require('react');
var page = require('page');
var template = require('./default.view.jsx');

var DefaultLayout = React.createClass({
  render: function () {
    return template.call(this);
  }
});

module.exports = DefaultLayout;
