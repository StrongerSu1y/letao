
//加载模块配置
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min'
    }
})
require(['src/index']);