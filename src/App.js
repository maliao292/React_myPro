import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route exect path='/' component={Home}></Route>
          <Route exect path='/login' component={Login}></Route>
        </div>
        </Router >
      </div >
    );
  }
}

export default App;
