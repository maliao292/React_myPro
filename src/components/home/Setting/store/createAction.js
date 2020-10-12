import { message } from 'antd';
import { roleListApi as list } from '@/api';
import { roleList } from './actionType'

export const getList = value => ({
    type: roleList,
    value
})

export const setLoginMsgAction = (formdata) => dispatch => {
    list(formdata).then((res) => {
        if (res.code === 200) {
            dispatch(getList(res.data))
        }
    })
}

