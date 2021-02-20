module.exports = {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/music-cp',
    configureWebpack: {
        resolve: {
            alias: {
                's': '@/element-variables.scss',
                'api': '@/axios/api.js'
            }
        }
    },
    devServer: {
        proxy: {//解决跨域问题
            '/data': {
                // 此处的写法，目的是为了 将 /api 替换成 https://autumnfish.cn/
                target: 'https://autumnfish.cn/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/data': ''
                }
            }
        }
    }
}