import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    routeList = () => {
        return this.props.routes.map((route, key) => {
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
            <>
                <div className='modelPage'>
                    <div className="routerCon">
                        <ul>
                            <li>
                                <div>
                                    <Link to='/main/setting/'><i className="icon iconfont iconuser-fill"></i><p>用户管理</p></Link>
                                </div>

                            </li>
                            <li>
                                <div>
                                    <Link to='/main/setting/User'><i className="icon iconfont iconuser-group-fill"></i><p>角色管理</p></Link>
                                </div>
                            </li>

                        </ul>
                    </div >

                </div >
                <div className="container" style={{ width: '95%' }}>
                    <Switch>
                        {this.routeList()}
                    </Switch>
                </div>
            </>
        );
    }
}

export default index;