import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'主页'
         };
    }
    render() {
        return (
            <div>{this.state.msg}</div>
        );
    }
}

export default Home;