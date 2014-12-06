var _ = require('lodash');
var React = require('react');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>Hello, World!</div>
    );
  }
});

React.render(
  <HelloWorld />,
  document.getElementById('app')
);
