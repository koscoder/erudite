var Storage = require('./storage.js'); // Must be on the top
var React = require('react');
var router = require('./router.jsx');

var AppContainer = React.createClass({
  getInitialState: function () {
    var container = this;
    var PageElement = router(function (PageElement) {
      container.setState({page: PageElement});
    });
    return {page: PageElement};
  },
  render: function () {
    return this.state.page;
  }
});


React.render(
  <AppContainer />,
  document.getElementById('app')
);

