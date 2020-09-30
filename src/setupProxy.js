const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use('/reactYh', createProxyMiddleware({
        target: 'http://192.168.20.175:8090/',
        changeOrigin: true,
        pathRewrite: {
            '^/reactYh': ''
        }
    })
    )
}