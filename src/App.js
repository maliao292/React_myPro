import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
