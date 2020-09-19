import React,{Component} from 'react'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mag:'登录'
         };
    }
    render() {
        return (
            <div>{this.state.mag}</div>
        );
    }
}

export default Login;