var React = require('react');
var router = require('./router.jsx');

var AppContainer = React.createClass({
  getInitialState: function () {
    var container = this;
    var Page = router(function (Page) {
      container.setState({page: Page});
    });
    return {page: Page};
  },
  render: function () {
    return React.createElement(this.state.page);
  }
});


React.render(
  <AppContainer />,
  document.getElementById('app')
);

