import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '@/router'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  routeList = () => {
    return routes.map((route, key) => {
      if (route.exact) {
        return <Route key={key} exact path={route.path}
          render={
            props => (
              <route.component {...props} route={route.children} />
            )
          }
        />
      }
      else
        return <Route key={key} path={route.path}
          render={
            props => (
              <route.component {...props} route={route.children} />
            )
          }
        />
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {this.routeList()}
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;
