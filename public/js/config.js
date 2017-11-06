
//公共模块配置
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        template:'assets/artTemplate/template-web',
        uploadify:'assets/uploadify/jquery.uploadify.min'
    },

    //如果某个第三方的类库不支持AMD，通过shim
    //可以实现类似模块的用法

    shim:{
        //模块有何特点

        uploadify : {
            // 1 .通过exports可以将非模块的方法或属性公开出来
            //相当于标准模块return 的作用
            // exports:

            // 2. 通过deps 可以依赖其他模块
            deps : ['jquery']


        }     
    }
});