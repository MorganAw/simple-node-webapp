import React from 'react';

export var LoginForm = React.createClass({
  render() {
    console.log('***** Rendering login form *****');
    return (
      <div>
        <div id="this_div">L O G I N B O Y S</div>
        <form action="/login" method="post">
          <div className="input-group text-center">
            <input id="webapp_email" maxLength="128" name="webapp_email" placeholder="Email" type="email" />
          </div>
        
          <div className="input-group text-center">
            <input id="webapp_password" maxLength="128" name="webapp_password" placeholder="Password" type="password" />
          </div>
          
          <input id="login_btn" className="btn" type="submit" value="Sign in"/>
        </form>
      </div>

    );
  }
});
