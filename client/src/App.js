import React, { Component } from 'react';
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    authed: false
  }

  
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;