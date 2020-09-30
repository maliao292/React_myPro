import { message } from 'antd';
import { roleListApi as list } from '@/api';
import { roleList } from './actionType'

export const getList = value => ({
    type: roleList,
    value
})

export const setLoginMsgAction = (formdata) => dispatch => {
    list(formdata).then((res) => {
        res.code === 200 ? message.success(res.msg) : message.error(res.msg);
        if (res.code === 200) {
        console.log(res.data)

            dispatch(getList(res.data))
        }

    })
}

