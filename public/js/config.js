
//公共模块配置
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        template:'assets/artTemplate/template-web',
        // uploadify基于jquery的文件上传控件，支持ajax无刷新上传，多个文件同时上传，上传进行进度显示，删除已上传文件。
        // flash版本
        uploadify:'assets/uploadify/jquery.uploadify.min',
        //页面加载进度条插件
        nprogress: 'assets/nprogress/nprogress',
        //图标插件
        echarts: 'assets/echarts/echarts.min',
        //分文本编辑器
        ckeditor: 'assets/ckeditor/ckeditor'
    },

    //如果某个第三方的类库不支持AMD，通过shim
    //可以实现类似模块的用法

    shim:{
        //模块有何特点

        uploadify : {
            // 1 .通过exports可以将非模块的方法或属性公开出来
            // 相当于标准模块 return 的作用
            // exports:

            // 2. 通过deps 可以依赖其他模块
            deps : ['jquery']
        },
        ckeditor: {
            exports : 'CKEDITOR'
        }
    }
});

//全局执行
require(['nprogress' , 'jquery'], function (NProgress , $) {
    NProgress.start();
    NProgress.done();

    //当AJAX请求时，也需要进度显示
    //ajaxstart ajax发送前
    $(document).ajaxStart(function () {
        NProgress.start();
    }).ajaxStop(function () {
        NProgress.done();
    })
});