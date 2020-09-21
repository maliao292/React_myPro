import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: require('../../assets/images/ltitle.png'),
            pic: require('../../assets/images/cdbg.png'),
            factory: require('../../assets/img/type.png'),
        };
    }
    dologin = ()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <>
                <div class="login">
                    <div class="proTitle">
                        <img src={this.state.titleName} alt="" />
                    </div>
                    <div class="lCon">
                        <div class="cdcd">
                            <img src={this.state.pic} alt="" />
                        </div>
                        <div class="logmsg">
                            <Form width="100px" label-position="top">
                                <Input className='el-input__inner'/>
                                <Input.Password className='el-input__inner' />
                            </Form>

                            <div className="dologin">
                                <Button className="mybtn el-input__inner" type="primary" onClick={this.dologin}>登录</Button>
                        </div>
                    </div>
                </div>

            </div ></>
        );
    }
}

export default Login;