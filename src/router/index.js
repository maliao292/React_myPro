import Login from '@/components/Login'
import Main from '@/components/Home'
import Map from '@/components/Home/Map'
import Operation from '@/components/Home/Operation'
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
    },]
}]
export default routes