import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import store from '@/store'
import {setLoginMsgAction} from '@/store/createAction';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'admin',
            password:'123456',
            titleName: require('../../assets/images/ltitle.png'),
            pic: require('../../assets/images/cdbg.png'),
            factory: require('../../assets/img/type.png'),
        };
        console.log(store.getState())
    }
    dologin = ()=>{
       // store.dispatch(setLoginMsgAction(this.state.username,this.state.password))
        store.dispatch({
            type:'LOGIN'
        })
        this.props.history.push('/main')
    }
    render() {
        return (
            <>
                <div className="login">
                    <div className="proTitle">
                        <img src={this.state.titleName} alt="" />
                    </div>
                    <div className="lCon">
                        <div className="cdcd">
                            <img src={this.state.pic} alt="" />
                        </div>
                        <div className="logmsg">
                            <Form width="100px" label-position="top">
                                <Input defaultValue={this.state.username} className='el-input__inner'/>
                                <Input.Password defaultValue={this.state.password} className='el-input__inner' />
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