var React = require('react');
var template = require('./lobby.view.jsx');

var LobbyPage = React.createClass({
  render: function () {
    return template.call(this);
  }
});

module.exports = LobbyPage;

