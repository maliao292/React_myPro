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
        path: '/map',
        component: Map
    }, {
        path: '/operation',
        component: Operation
    },]
}]
export default routes