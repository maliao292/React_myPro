import axios from './config';
import qs from 'qs'
/** 通用 */
// 角色下拉
export let roleSelectApi = dataobj => axios.post('/sys/role/listNoPage',qs.stringify(dataobj));
// 站点下拉
export let stationSelectApi = dataobj => axios.post('/common/getStation',qs.stringify(dataobj));
// 桩下拉
export let pieSelectApi = dataobj => axios.post('/common/getEquipment',qs.stringify(dataobj));
// 厂商下拉
export let factorySelectApi = dataobj => axios.post('/common/getManufacturer',qs.stringify(dataobj));
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

// 角色
// 列表
export let roleListApi = dataobj => axios.post('/sys/role',qs.stringify(dataobj));
// 删除
export let delRoleApi = dataobj => axios.post('/sys/role/del',qs.stringify(dataobj));
// 新增 
export let editRoleApi = dataobj => axios.post('/sys/role/saveOrEdit',qs.stringify(dataobj));
// 权限列表 
export let roleTreeApi = dataobj => axios.post('/sys/role/getPermission',qs.stringify(dataobj));
// 修改权限 
export let editPowerApi = dataobj => axios.post('/sys/role/savePermission',qs.stringify(dataobj));

// 电价设置
// 列表
export let elePriceListApi = dataobj => axios.post('/op/elePrice/getList',qs.stringify(dataobj));
// 列表删除
export let delElePriceApi = dataobj => axios.post('/op/elePrice/del',qs.stringify(dataobj));
// 选择列表tree
export let checkElePriceApi = dataobj => axios.post('/op/elePrice/getTree',qs.stringify(dataobj));
// 设置电价 
export let setElePriceApi = dataobj => axios.post('/op/elePrice/setPrice',qs.stringify(dataobj));
// 模板列表
export let eleModelListApi = dataobj => axios.post('/op/elePrice/getModelList',qs.stringify(dataobj));
// 模板新增/编辑
export let eleModelEditApi = dataobj => axios.post('/op/elePrice/modelSaveOrEdit',qs.stringify(dataobj));
// 模板删除
export let eleModelDelApi = dataobj => axios.post('/op/elePrice/modelDel',qs.stringify(dataobj));
// 下放 
export let eleModelXfApi = dataobj => axios.post('/op/elePrice/delegate',qs.stringify(dataobj));
// 导出
export let eleModelExportApi = dataobj => axios({
    method: 'post',
    url: '/op/elePrice/export',
    responseType: 'blob',
    data:qs.stringify(dataobj)
});