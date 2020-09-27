import { message } from 'antd';
import { login as loginapi } from '@/api';
import { logIn } from './actionType'

export const loginAction = value => ({
    type: logIn,
    value
})

export const setLoginMsgAction = (username, password) => dispatch => {
    loginapi({ username, password }).then((res) => {
        res = res.data
        res.code == 200 ? message.success(res.msg) : message.error(res.msg);
        if (res.code == 200) {
            alert(.1)
            dispatch(loginAction)
        }

    })
}

export const getListAction = () => (dispatch) => {
    listData().then((res)=>{
        dispatch(setListAction(res.result))
    })
}