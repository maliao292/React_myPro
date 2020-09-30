# 高德地图组件 npm install --save react-amap
## react-amap https://elemefe.github.io/react-amap/articles/start

# myRealReactPro
全面的 React 项目，包括 redux 、redux-thunk、router 以及 ANTD....

# npm i create-react-app 
## create-react-app --myapp 或者  npx create-react-app my-app

## 安装路由
### npm i react-router-dom --save

## 安装 antd
### npm i antd --save

## 配置绝对路径
1. npm run ejecj
2. config => webpack.config.js => resolve => alias
   1. 'components': path.resolve(__dirname, '../src/components'),


# redux 
## 1级集成
   1. npm i redux --save
   2. npm i react-thunk --save 可以使用 异步 action
   3. npm i immutable --save  改变reducer 数据类型  防止修改 state
      1. merge修改多个值
   4. redux-immutable from redux 管理 多个store
   5. import { Provider } from 'react-redux' 把 store 数据 注入 根组件
      1. <Provider store={store}>
   6. import { connect } from 'react-redux'
      1. 










### `npm start`
### `npm run build`
### `npm run eject`



