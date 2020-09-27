import { message } from 'antd';
import { login as loginapi } from '@/api';
import { logIn } from './actionType'
export const loginAction = value => ({
    type: logIn,
    value
})

export const setLoginMsgAction = (username, password) => dispatch => {
    loginapi({ username, password }).then((res) => {
        this.setToken(res.headers.authorization)
        this.setUser(this.ruleForm.username)
        res = res.data
        res.code == 200 ? message.success(res.message) : message.error(res.message);
        if (res.code == 200) {
            alert(666)
            dispatch(loginAction)
        }

    })
}