var Navigation = require('./partials/navigation.jsx');
var UserMenu = require('./partials/user-menu.jsx');
var Logo = require('./partials/logo.jsx');
var Footer = require('./partials/footer.jsx');

module.exports = function () {
  return (
    <div className="pusher">
      <div className="full height">
        <div className="bar light fixed">
          <div className="ui page grid">
            <div className="column">
              <Logo />
              <UserMenu />
              <Navigation />
            </div>
          </div>
        </div>

        <div className="ui vertical feature segment">
          <div className="ui centered page grid">
            <div className="sixteen wide column">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
};
