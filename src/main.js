import Vue from 'vue'
import App from './App'
import '@/assets/css/common.css'
import '@/assets/css/style.css'
import '@/assets/css/style_zl.css'
import '@/assets/alibabaFont/iconfont.css'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index';
Vue.use(ElementUI);
import myCharts from './chartMethod'
Vue.use(myCharts)
import publicMethods from './chartMethod/publicMethods'
Vue.use(publicMethods)
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
