import Login from '@/components/Login'
import Main from '@/components/Home'
import Map from '@/components/Home/Map'
import Operation from '@/components/Home/Operation'
import Setting from '@/components/Home/Setting'
import Role from '@/components/Home/Setting/Role'
import User from '@/components/Home/Setting/User'
let routes = [{
    path: '/',
    exact: true,
    component: Login
}, {
    path: '/main',
    component: Main,
    children: [{
        path: '/main/',
        exact: true,
        component: Map
    }, {
        path: '/main/operation',
        component: Operation
    }, {
        path: '/main/setting',
        component: Setting,
        children: [{
            path: '/main/setting/',
            exact: true,
            component: Role,
        }, {
            path: '/main/setting/user',
            component: User,
        }]
    }]
}]
export default routes