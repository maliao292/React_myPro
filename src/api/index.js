import axios from './config';
import qs from 'qs'
/** 通用 */
// 角色下拉
export let roleSelectApi = dataobj => axios.post('/sys/role/listNoPage',qs.stringify(dataobj));
/**
 * 登录
 * @param {*} dataobj 
 */
export let login = dataobj => axios.post('/login',qs.stringify(dataobj));
export let mapMarker = dataobj => {
    return new Promise((resolve, reject)=>{
        let data = [{
            longitude:'120.317148',
            latitude:'31.498137',
            runStatus:1,
            stationName:'余杭宜家充电站'

        },{
            longitude:'120.324701',
            latitude:'31.492428',
            runStatus:2,
            stationName:'余杭宜家充电站'

        },{
            longitude:'120.326847',
            latitude:'31.488878',
            runStatus:3,
            stationName:'余杭宜家充电站'

        },{
            longitude:'120.327319',
            latitude:'31.481779',
            runStatus:4,
            stationName:'余杭宜家充电站'

        },{
            longitude:'120.30333',
            latitude:'31.495026',
            runStatus:1,
            stationName:'余杭宜家充电站'

        },{
            longitude:'120.303072',
            latitude:'31.484304',
            runStatus:2,
            stationName:'余杭宜家充电站'

        }]
        resolve(data)
    })
};

// 用户
// 列表
export let userListApi = dataobj => axios.post('/sys/user',qs.stringify(dataobj));
// 新增 
export let editUserApi = dataobj => axios.post('/sys/user/saveOrEdit',qs.stringify(dataobj));
// 删除
export let delUserApi = dataobj => axios.post('/sys/user/del',qs.stringify(dataobj));