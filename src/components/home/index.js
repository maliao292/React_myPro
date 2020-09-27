import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '主页',
            userName: 'admin',
            mapname: '',
            stationname: '',
            photo: require('../../assets/images/user.png'),
            logout: require('../../assets/images/logout.png'),
            setting: require('../../assets/images/setting.png'),
        };
    }
    logout = () => {
        this.props.history.push('/')
    }
    routeList = () => {
        return this.props.route.map((route, key) => {
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
            <div className='homeContainer'>
                <div className="homeRight">
                    <div className="navigation">
                        <div className="homeProName">电动汽车充电桩一体化平台</div>
                        <ul>
                            <li>
                                <Link to='/main/'><div><span className="icon iconfont iconyh_zhgl-01"></span><span>综合管理</span><i></i></div></Link>
                            </li>
                            <li>
                                <Link to='/main/operation'><div><span className="icon iconfont iconyh_yygl1"></span><span>运营管理</span><i></i></div></Link>
                            </li>
                        </ul>
                        <div className="userMsg">
                            <div>
                                <img src={this.state.logout} onClick={this.logout} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mainContent'>
                        <Switch>
                            {this.routeList()}
                        </Switch>
                    </div>
                </div >
            </div >
        );
    }
}

export default Home;