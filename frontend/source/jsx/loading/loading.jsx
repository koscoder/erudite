var React = require('react');
var template = require('./loading.view.jsx');

var LoadingPage = React.createClass({
  render: function () {
    return template.call(this);
  }
});

module.exports = LoadingPage;
