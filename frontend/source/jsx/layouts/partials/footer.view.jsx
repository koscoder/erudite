module.exports = function () {
  return (
    <div className="ui vertical inverted black footer segment">
      <div className="ui centered page grid">
        <div className="sixteen wide column">
          <div className="ui stackable inverted divided relaxed grid">
            <div className="eight wide column logo">
              <h3 className="ui inverted header">Developed by CodeTiburon</h3>
              <p>For the world's first global virtual #hackathon</p>
              <p><i>No matter how good your existing software is, we can make it better.</i></p>
              <a href="http://codetiburon.com/" target="_blank"><img className="ui image logo" src="./assets/images/logo-footer.png" /></a>
            </div>
            <div className="four wide column">
              <h5 className="ui teal inverted header">About</h5>
              <div className="ui inverted link list">
                <a className="item" href="https://github.com/CodeTiburon/erudite" target="_blank"><i className="github square icon"></i>GitHub</a>
                <a className="item" href="#" target="_blank">About Project</a>
                <a className="item" href="#" target="_blank"><i className="linkedin square icon"></i>Stas</a>
                <a className="item" href="#" target="_blank"><i className="linkedin square icon"></i>Konstantin</a>
                <a className="item" href="#" target="_blank"><i className="linkedin square icon"></i>Vadim</a>
              </div>
            </div>
            <div className="four wide column">
              <h5 className="ui teal inverted header">APIs</h5>
              <div className="ui inverted link list">
                <a className="item" href="https://developers.google.com/chart/" target="_blank">Google Charts</a>
                <a className="item" href="https://developers.google.com/freebase/v1/mql-overview" target="_blank">Google Freebase</a>
                <a className="item" href="https://gravatar.com" target="_blank">Gravatar</a>
                <a className="item" href="https://dev.twitter.com/web/sign-in" target="_blank">Sign in with Twitter</a>
                <a className="item" href="https://developers.facebook.com/docs/facebook-login/v2.2" target="_blank">Facebook Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
