import React, { Component } from 'react';
import { Map } from 'react-amap';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ width: '100%', height: '800px' }}>
                <Map amapkey={'6749e07e6a17a94ea7bc2a164f9202dd'} />
            </div>
        );
    }
}

export default index;