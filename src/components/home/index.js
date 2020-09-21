import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
    logout = () =>{
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className='homeContainer'>
                <div className="homeRight">
                    <div className="navigation">
                        <div className="homeProName">电动汽车充电桩一体化平台</div>
                        <ul>
                            <li>
                                <Link to='/login'><span className="icon iconfont iconyh_zhgl-01"></span><span>综合管理</span><i></i></Link>
                            </li>

                        </ul>
                        <div className="userMsg">
                            <div>
                                <img src={this.state.logout} onClick={this.logout} alt="" />
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        );
    }
}

export default Home;