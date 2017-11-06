
define(['jquery' , 'template', 'ckeditor' , './utils' , 'uploadify'], function($, template , CKEDITOR) {

    CKEDITOR.replace('ck');

    $('form').on('submit' ,function () {
        var _this = $(this);
        $.ajax({
            url:'/api/product/addProduct',
            type: 'post',
            data: _this.serialize(),
            success:function (info) {  
                if(info.success) {
                    location.href = '/goods_list.php';
                }
            }
        });
        return false;
    });

    //jquery插件 一般使用规律
    //$(DOM).插件方法(对象格式参数)
    $('#upfile').uploadify({
        // flash插件
        // 使用 flash 进行上传

        // 修改上传按钮文字
        buttonText:'',
        //上传按钮宽高
        width:120,
        height:120,
        //上传文件name属性
        fileObjName:'pic1',
        //自定义上传进度条
        itemTemplate:'<span></span>',
        //使用flash
        swf : '/public/assets/uploadify/uploadify.swf',
        //文件上传地址
        uploader:'/api/product/addProductPic',
        onUploadSuccess:function (file,data) {  
            var res = JSON.parse(data);
            //实现预览效果
            $('.preview img').attr('src','http://localhost:3000' + res.picAddr);
            //将图片上传地址放到表单中等待提交
            $('input[name="pic"]').val(res.picAddr);
        }
    });

    //品牌列表
    $.ajax({
        url:'/api/category/querySecondCategoryPaging',
        type:'get',
        data:{page:1,pageSize:10},
        success:function (info) {
            //调用模板引擎
            var html = template('brands',info);
            //添加到DOM中
            $('.brand').append(html);
        }
    })
    
});